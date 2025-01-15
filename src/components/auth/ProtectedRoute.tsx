import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../utils/cookies';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
