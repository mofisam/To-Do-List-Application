import React, { useEffect, useState, useContext } from 'react'; // Import React, useEffect, useState, and useContext hooks
import axios from 'axios'; // Import axios for making HTTP requests
import AuthContext from '../context/AuthContext'; // Import AuthContext for accessing authentication state

// Dashboard component definition
const Dashboard = () => {
  const [user, setUser] = useState(null); // State variable for storing user data
  const { authData } = useContext(AuthContext); // Access authData from AuthContext using useContext hook

  // useEffect hook to fetch user data when the component mounts or when authData.token changes
  useEffect(() => {
    // Function to fetch user data
    const fetchUser = async () => {
      try {
        // Send GET request to retrieve user data
        const res = await axios.get('http://localhost:3000/api/auth/me', {
          headers: {
            Authorization: authData.token, // Pass token in the Authorization header
          },
        });
        setUser(res.data); // Update user state with fetched user data
      } catch (error) {
        console.error('Failed to fetch user', error); // Log error if fetching user data fails
      }
    };

    fetchUser(); // Call fetchUser function
  }, [authData.token]); // Run this effect whenever authData.token changes

  // Render loading message if user data is not yet available
  if (!user) {
    return <div>Loading...</div>;
  }

  // Render user dashboard
  return (
    <div className="dashboard">
      <h2>Welcome, {user.email}</h2> {/* Display user email */}
      <p>This is your dashboard.</p> {/* Dashboard content */}
    </div>
  );
};

export default Dashboard; // Export Dashboard component
