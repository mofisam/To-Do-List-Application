import pytest
from app import create_app, db
from app.models import User, Task

@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app()
    flask_app.config.from_object('config.TestConfig')

    testing_client = flask_app.test_client()

    ctx = flask_app.app_context()
    ctx.push()

    yield testing_client

    ctx.pop()

@pytest.fixture(scope='module')
def init_database():
    db.create_all()

    user1 = User(username='testuser1', email='test1@example.com', password='password')
    user2 = User(username='testuser2', email='test2@example.com', password='password')
    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()

    yield db

    db.drop_all()

def test_register(test_client, init_database):
    response = test_client.post('/register', json={
        'username': 'newuser',
        'email': 'newuser@example.com',
        'password': 'password'
    })
    assert response.status_code == 201

def test_login(test_client, init_database):
    response = test_client.post('/login', json={
        'email': 'test1@example.com',
        'password': 'password'
    })
    assert response.status_code == 200
    assert 'access_token' in response.json

def test_get_tasks(test_client, init_database):
    login_response = test_client.post('/login', json={
        'email': 'test1@example.com',
        'password': 'password'
    })
    access_token = login_response.json['access_token']

    response = test_client.get('/tasks', headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 200

def test_create_task(test_client, init_database):
    login_response = test_client.post('/login', json={
        'email': 'test1@example.com',
        'password': 'password'
    })
    access_token = login_response.json['access_token']

    response = test_client.post('/tasks', json={
        'title': 'New Task',
        'description': 'Task description'
    }, headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 201
