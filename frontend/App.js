import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <h2>Home Page</h2>
          </Route>
          <Route path="/tasks">
            <TaskForm addTask={addTask} />
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          </Route>
          <Route path="/about">
            <h2>About Page</h2>
            <p>This is a simple task manager application.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
