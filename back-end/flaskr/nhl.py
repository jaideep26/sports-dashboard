from flask import (Blueprint, jsonify)
import requests
import logging

bp = Blueprint('nhl', __name__, url_prefix='/nhl')
nhl_api_url = "https://api-web.nhle.com/v1"

# Routes
@bp.route('/schedule', methods=['GET'])
def get_schedule():
    try:
        response = {}
        errors = []

        logging.info('Fetching schedule from external NHL API')
        fetched_schedule = requests.get(f"{nhl_api_url}/schedule/now")

        if fetched_schedule.status_code == 200:
            schedule = fetched_schedule.json()
            response["gameWeek"] = get_game_week(schedule)
        else:
            errors.append(f"Request failed with status code {fetched_schedule.status_code}")
    except requests.exceptions.RequestException as e:
        errors.append(str(e))
    
    return jsonify({
        "data": response,
        "errors": errors
    })

@bp.route('/game/<int:game_id>', methods=['GET'])
def get_game(game_id):
    try:
        response = {}
        errors = []

        logging.info('Fetching landing information from external NHL API')
        fetched_landing = requests.get(f"{nhl_api_url}/gamecenter/{game_id}/landing")

        logging.info('Fetching boxscore from external NHL API')
        fetched_boxscore = requests.get(f"{nhl_api_url}/gamecenter/{game_id}/boxscore")

        if fetched_landing.status_code == 200:
            landing = fetched_landing.json()
            response["landing"] = get_landing(landing)    
        else:
            errors.append(f"Failed to fetch landing details with status code {fetched_landing.status_code}")

        if fetched_boxscore.status_code == 200:
            boxscore = fetched_boxscore.json()
            response["boxscore"] = get_boxscore(boxscore)
        else:
            errors.append(f"Failed to fetch boxscore details with status code {fetched_boxscore.status_code}")
    except requests.exceptions.RequestException as e:
        errors.append(str(e))

    return jsonify({
        "data": response,
        "errors": errors
    })

# Helper functions
def get_game_week(response):
    fetched_game_week = response.get("gameWeek")
    game_days = []

    for fetched_game_day in fetched_game_week:
        game_days.append(get_game_day(fetched_game_day))

    return game_days

def get_game_day(game_day):
    games = []
    for game in game_day.get("games"):
        games.append(get_game_details(game))

    return {
        "date": game_day.get("date"),
        "games": games,
        "numberOfGames": game_day.get("numberOfGames")
    }

def get_game_details(game):
    return {
        "awayTeam": get_team_details(game.get("awayTeam")),
        "gameScheduleState": game.get("gameScheduleState"),
        "gameState": game.get("gameState"),
        "homeTeam": get_team_details(game.get("homeTeam")),
        "id": game.get("id"),
        "periodDescriptor": game.get("periodDescriptor"),
        "startTimeUTC": game.get("startTimeUTC"),
        "venue": game.get("venue").get("default")
    }

def get_team_details(team):
    return {
        "abbreviation": team.get("abbrev"),
        "commonName": team.get("commonName").get("default"),
        "darkLogo": team.get("darkLogo"),
        "id": team.get("id"),
        "logo": team.get("logo"),
        "placeName": team.get("placeName").get("default"),
        "score": team.get("score"),
    }

#TODO: Implement these functions
def get_landing(landing):
    return landing

def get_boxscore(boxscore):
    return boxscore