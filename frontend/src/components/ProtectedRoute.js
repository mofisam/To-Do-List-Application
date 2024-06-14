import React, { useContext } from 'react';
import { BrowserRouter as Route, Navigate,} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authData } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authData && authData.token ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
