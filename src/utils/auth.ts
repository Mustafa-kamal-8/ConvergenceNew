import { getToken } from './cookies';

// Check if the user is authenticated
export const isAuthenticated = (): boolean => !!getToken();
