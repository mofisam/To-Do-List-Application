from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_login import LoginManager

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
login = LoginManager()

def create_app():
        app = Flask(__name__)
        app.config.from_object('config.Config')

        db.init_app(app)
        migrate.init_app(app, db)
        jwt.init_app(app)
        login.init_app(app)

        with app.app_context():
            from . import routes
            db.create_all()

        return app

