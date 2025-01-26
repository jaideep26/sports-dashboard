from flask import (Blueprint, jsonify)
import requests
import logging

bp = Blueprint('nhl', __name__, url_prefix='/nhl')
nhl_api_url = "https://api-web.nhle.com/v1"

@bp.route('/schedule', methods=['GET'])
def get_schedule():
    try:
        logging.info('Sending request to external NHL API')
        fetched_schedule_response = requests.get(f"{nhl_api_url}/schedule/now")

        if fetched_schedule_response.status_code == 200:
            response = fetched_schedule_response.json()
            game_week = get_game_week(response)
            #TODO - create a custom response
            data = {
                "gameWeek": game_week
            }
            return jsonify({"success": True, "data": data})
        else:
            return jsonify({"success": False, "error": f"Request failed with status code {response.status_code}"})
    except requests.exceptions.RequestException as e:
        return jsonify({"success": False, "error": str(e)})

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