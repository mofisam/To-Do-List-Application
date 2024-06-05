import pytest
from app.schemas import user_schema, task_schema
from app.models import User, Task

@pytest.fixture(scope='module')
def new_user():
    user = User(username='testuser', email='test@example.com', password='password')
    return user

@pytest.fixture(scope='module')
def new_task():
    task = Task(title='Test Task', description='Task description')
    return task

def test_user_schema(new_user):
    user_data = user_schema.dump(new_user)
    assert user_data['username'] == 'testuser'
    assert user_data['email'] == 'test@example.com'

def test_task_schema(new_task):
    task_data = task_schema.dump(new_task)
    assert task_data['title'] == 'Test Task'
    assert task_data['description'] == 'Task description'
    assert not task_data['completed']
