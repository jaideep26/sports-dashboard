from flask import Flask
from logging.config import dictConfig

dictConfig({
    "version": 1,
    "formatters": {
        "default": {
            "format": "[%(asctime)s] %(levelname)s - %(module)s: %(message)s"
        },
        "colored": {
            "()": "colorlog.ColoredFormatter",
            "format": "[%(asctime)s] %(log_color)s%(levelname)-8s %(module)s: %(message)s",
            "datefmt":"%Y-%m-%d %H:%M:%S"

        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stdout",
            "formatter": "colored"
        }
    },
    "root": {
        "level": "DEBUG",
        "handlers": ["console"]
    }
})

def create_app():
    app = Flask(__name__)

    from . import nhl
    app.register_blueprint(nhl.bp)

    return app