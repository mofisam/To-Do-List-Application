import React from 'react';

// TaskItem component displays information about a single task
const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    // Each task is represented as an <li> element with class "task-item"
    <li className="task-item">
      <div className="task-info">
        {/* 
          Display task title.
          If task is completed, apply class "completed" to style it differently.
          On click, call toggleTaskCompletion function with task id as argument.
        */}
        <span 
          className={task.completed ? 'completed' : ''}
          onClick={() => toggleTaskCompletion(task.id)}
        >
          {task.title}
        </span>
        {/* Display task description */}
        <p className="task-description">{task.description}</p>
      </div>
      {/* Button to delete the task. On click, call deleteTask function with task id as argument */}
      <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
    </li>
  );
};

export default TaskItem;
