import pytest
from app import create_app, db
from app.models import User, Task

@pytest.fixture(scope='module')
def new_user():
    user = User(username='testuser', email='test@example.com', password='password')
    return user

@pytest.fixture(scope='module')
def new_task():
    task = Task(title='Test Task', description='Task description')
    return task

def test_new_user(new_user):
    assert new_user.username == 'testuser'
    assert new_user.email == 'test@example.com'
    assert new_user.password == 'password'

def test_new_task(new_task):
    assert new_task.title == 'Test Task'
    assert new_task.description == 'Task description'
    assert not new_task.completed

def test_add_user_to_db(new_user):
    db.session.add(new_user)
    db.session.commit()
    assert User.query.filter_by(username='testuser').first() == new_user

def test_add_task_to_db(new_task, new_user):
    new_task.user_id = new_user.id
    db.session.add(new_task)
    db.session.commit()
    assert Task.query.filter_by(title='Test Task').first() == new_task
