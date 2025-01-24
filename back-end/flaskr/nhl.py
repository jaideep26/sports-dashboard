from flask import (Blueprint, jsonify)
import requests

bp = Blueprint('nhl', __name__, url_prefix='/nhl')

nhl_api_url = "https://api-web.nhle.com/v1"

@bp.route('/schedule', methods=['GET'])
def get_schedule():
    try:
        fetched_schedule_response = requests.get(f"{nhl_api_url}/schedule/now")

        if fetched_schedule_response.status_code == 200:
            response = fetched_schedule_response.json()

            #TODO - create a custom response
            data = {
                "gameWeek": response.get("gameWeek")
            }
            return jsonify({"success": True, "data": data})
        else:
            return jsonify({"success": False, "error": f"Request failed with status code {response.status_code}"})
    except requests.exceptions.RequestException as e:
        # Handle request exceptions (e.g., network errors)
        return jsonify({"success": False, "error": str(e)})