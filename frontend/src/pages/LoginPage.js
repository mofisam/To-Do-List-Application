import React, { useState, useContext } from 'react'; // Import React and hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import axios from 'axios'; // Import axios for making HTTP requests
import AuthContext from '../context/AuthContext'; // Import AuthContext for managing authentication state

// LoginPage component definition
const LoginPage = () => {
  const [email, setEmail] = useState(''); // State variable for email input
  const [password, setPassword] = useState(''); // State variable for password input
  const { setAuthData } = useContext(AuthContext); // Access setAuthData function from AuthContext
  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send POST request to login endpoint with email and password
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      // Store token in local storage
      localStorage.setItem('token', res.data.token);
      // Update authentication context with user data
      setAuthData(res.data);
      // Redirect to dashboard page
      navigate.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error); // Log error if login fails
    }
  };

  // Render login form
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}> {/* Form submission handler */}
        <h2>Login</h2> {/* Title */}
        <input
          type="email"
          placeholder="Email"
          value={email} // Controlled input: value is controlled by state variable `email`
          onChange={(e) => setEmail(e.target.value)} // Handle input change to update email state
          required // Email input is required
        />
        <input
          type="password"
          placeholder="Password"
          value={password} // Controlled input: value is controlled by state variable `password`
          onChange={(e) => setPassword(e.target.value)} // Handle input change to update password state
          required // Password input is required
        />
        <button type="submit">Login</button> {/* Submit button */}
        <p>Don't have an account? <a href="/register">Register</a></p> {/* Link to registration page */}
      </form>
    </div>
  );
};

export default LoginPage; // Export LoginPage component
