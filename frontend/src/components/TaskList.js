import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
