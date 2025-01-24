from flask import Flask

def create_app():
    app = Flask(__name__)

    from . import nhl
    app.register_blueprint(nhl.bp)

    return app