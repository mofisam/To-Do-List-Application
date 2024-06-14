import React, { useState } from 'react';

// TaskForm component takes a prop `addTask` which is a function to add a new task
const TaskForm = ({ addTask }) => {
  // Define state variables for title and description using useState hook
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Call the addTask function passed as a prop with title and description as arguments
    addTask({ title, description });
    // Clear the input fields by resetting the state variables
    setTitle('');
    setDescription('');
  };

  // Render the form with input fields for title and description
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title</label>
        {/* Input field for title */}
        <input
          type="text"
          value={title} // Controlled input: value is controlled by the state variable `title`
          onChange={(e) => setTitle(e.target.value)} // Handle input change to update title state
          required // Title is required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        {/* Textarea field for description */}
        <textarea
          value={description} // Controlled textarea: value is controlled by the state variable `description`
          onChange={(e) => setDescription(e.target.value)} // Handle textarea change to update description state
          className="form-textarea"
        />
      </div>
      {/* Submit button */}
      <button type="submit" className="form-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
