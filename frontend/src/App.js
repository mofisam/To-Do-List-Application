import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Dashboard from './pages/Dashboard';
//import error_404_message from './componets/error_404_message';
import  ProtectedRoute  from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

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
    <AuthProvider>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <ProtectedRoute path="/dashboard" element={<Dashboard/>} />
            {/*<Route path="/sa" element={<error_404_message/>} />*/}
            <Route path="/tasks" element={
            <div><TaskForm addTask={addTask} />
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            </div>}>
              
            </Route>
            <Route path="/about" element={
            <div><h2>About Page</h2>
              <p>This is a simple task manager application.</p>
            </div>} >
              
            </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
