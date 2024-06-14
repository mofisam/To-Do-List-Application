import React, { createContext, useState, useEffect } from 'react';

// Create a new context instance
const AuthContext = createContext();

// AuthProvider component definition
export const AuthProvider = ({ children }) => {
  // State variable to store authentication data
  const [authData, setAuthData] = useState(null);

  // useEffect hook to check for token in local storage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      setAuthData({ token }); // If token exists, set authentication data
    }
  }, []); // Run this effect only once on component mount

  // Render the AuthContext.Provider with value set to authData and setAuthData
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children} {/* Render the children components */}
    </AuthContext.Provider>
  );
};

export default AuthContext; // Export the AuthContext
