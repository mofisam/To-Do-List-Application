import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TaskManager</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <Link to="/" className="navbar-item" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/login" className="navbar-item" onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/register" className="navbar-item" onClick={toggleMenu}>
          Register
        </Link>
        <Link to="/dashboard" className="navbar-item" onClick={toggleMenu}>
          Dashboard
        </Link>
        <Link to="/about" className="navbar-item" onClick={toggleMenu}>
          About
        </Link>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
