import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className="task-item">
      <div className="task-info">
        <span 
          className={task.completed ? 'completed' : ''}
          onClick={() => toggleTaskCompletion(task.id)}
        >
          {task.title}
        </span>
        <p className="task-description">{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
    </li>
  );
};

export default TaskItem;
