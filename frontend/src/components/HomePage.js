import React from 'react';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Task Manager</h1>
        <p>Manage your tasks efficiently and effectively</p>
        <a href="/tasks" className="cta-button">Get Started</a>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Task Management</h3>
            <p>Keep track of your tasks with a simple and intuitive interface.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Login</h3>
            <p>Your data is safe with us. Secure login and data protection.</p>
          </div>
          <div className="feature-item">
            <h3>Progress Tracking</h3>
            <p>Monitor your task completion status and stay on top of your goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
