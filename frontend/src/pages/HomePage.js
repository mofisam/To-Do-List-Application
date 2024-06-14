import React from 'react';

// HomePage component definition
const HomePage = () => {
  return (
    <div className="home-container"> {/* Container for the homepage */}
      <header className="hero"> {/* Header section */}
        <h1>Welcome to Task Manager</h1> {/* Main heading */}
        <p>Manage your tasks efficiently and effectively</p> {/* Subheading */}
        <a href="/tasks" className="cta-button">Get Started</a> {/* Button to navigate to tasks page */}
      </header>
      <section className="features"> {/* Features section */}
        <h2>Features</h2> {/* Features section heading */}
        <div className="feature-list"> {/* List of features */}
          <div className="feature-item"> {/* First feature item */}
            <h3>Easy Task Management</h3> {/* Feature title */}
            <p>Keep track of your tasks with a simple and intuitive interface.</p> {/* Feature description */}
          </div>
          <div className="feature-item"> {/* Second feature item */}
            <h3>Secure Login</h3> {/* Feature title */}
            <p>Your data is safe with us. Secure login and data protection.</p> {/* Feature description */}
          </div>
          <div className="feature-item"> {/* Third feature item */}
            <h3>Progress Tracking</h3> {/* Feature title */}
            <p>Monitor your task completion status and stay on top of your goals.</p> {/* Feature description */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; // Export HomePage component
