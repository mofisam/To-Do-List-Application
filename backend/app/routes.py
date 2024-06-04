from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from . import db
from .models import User, Task
from .schemas import user_schema, task_schema, tasks_schema

bp = Blueprint('routes', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 400

    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not user.password == password:
        return jsonify({"error": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

@bp.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    user_id = get_jwt_identity()
    tasks = Task.query.filter_by(user_id=user_id).all()
    return tasks_schema.jsonify(tasks), 200

@bp.route('/tasks', methods=['POST'])
@jwt_required()
def create_task():
    data = request.get_json()
    user_id = get_jwt_identity()
    title = data.get('title')
    description = data.get('description')
    due_date = data.get('due_date')

    task = Task(title=title, description=description, due_date=due_date, user_id=user_id)
    db.session.add(task)
    db.session.commit()

    return task_schema.jsonify(task), 201

@bp.route('/tasks/<int:id>', methods=['PUT'])
@jwt_required()
def update_task(id):
    data = request.get_json()
    task = Task.query.get_or_404(id)
    if task.user_id != get_jwt_identity():
        return jsonify({"error": "Unauthorized"}), 403

    task.title = data.get('title', task.title)
    task.description = data.get('description', task.description)
    ask.due_date = data.get('due_date', task.due_date)
    task.completed = data.get('completed', task.completed)

    db.session.commit()
                                                                                                                            return task_schema.jsonify(task), 200

@bp.route('/tasks/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_task(id):
    task = Task.query.get_or_404(id)
    if task.user_id != get_jwt_identity():
        return jsonify({"error": "Unauthorized"}), 403

    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"}), 200

