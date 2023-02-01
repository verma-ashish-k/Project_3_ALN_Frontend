import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';

function ProtectedRoutes({ children, isAllowed }) {
  const authContext = useContext(AuthContext);

  const user = authContext.user;

  if (!isAllowed) {
    return <Navigate to='/home/CreateAccount' replace />;
  }
  return children;
}

export default ProtectedRoutes;
