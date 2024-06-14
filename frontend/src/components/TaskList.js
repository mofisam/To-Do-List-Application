import React from 'react'; // Import React library
import TaskItem from './TaskItem'; // Import TaskItem component

// TaskList component definition
const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list"> {/* Container for the task list */}
      <h2>Task List</h2> {/* Heading for the task list */}
      {/* Conditional rendering: if tasks array is empty */}
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
            key={task.id} // Unique key for each TaskItem
            task={task} // Pass task object as prop to TaskItem
              deleteTask={deleteTask} // Pass deleteTask function as prop to TaskItem
              toggleTaskCompletion={toggleTaskCompletion} // Pass toggleTaskCompletion function as prop to TaskItem
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList; // Export TaskList component
