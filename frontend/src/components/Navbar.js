import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        TaskManager
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/tasks" className="navbar-item">
          Tasks
        </Link>
        <Link to="/login" className="navbar-item">
          Login
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
