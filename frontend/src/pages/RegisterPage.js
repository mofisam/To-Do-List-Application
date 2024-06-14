import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests
import '../index.css'; // Import CSS file

// RegisterPage component definition
const RegisterPage = () => {
  const [email, setEmail] = useState(''); // State variable for email input
  const [password, setPassword] = useState(''); // State variable for password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State variable for confirm password input

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (password !== confirmPassword) { // Check if passwords match
      alert('Passwords do not match'); // Show alert if passwords do not match
      return;
    }
    try {
      // Send POST request to register endpoint with email and password
      await axios.post('http://localhost:3000/api/auth/register', { email, password });
      alert('User registered successfully'); // Show success alert
    } catch (error) {
      console.error('Registration failed', error); // Log error if registration fails
    }
  };

  // Render registration form
  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}> {/* Form submission handler */}
        <h2>Register</h2> {/* Title */}
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword} // Controlled input: value is controlled by state variable `confirmPassword`
          onChange={(e) => setConfirmPassword(e.target.value)} // Handle input change to update confirm password state
          required // Confirm password input is required
        />
        <button type="submit">Register</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default RegisterPage; // Export RegisterPage component
