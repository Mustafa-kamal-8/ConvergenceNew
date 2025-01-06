/* eslint-disable @typescript-eslint/no-unused-vars */
import Cookies from "js-cookie";


interface UserDetails {
    username: string;
    departmentId: string;
    adminLoginId: string;
    isDept: string;
}

// Set token and user details in cookies
export const setAuthCookies = (
token: string, userDetails: UserDetails, _p0?: number,

): void => {
    const expiryDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
    Cookies.set('token', token, { expires: expiryDate });
    Cookies.set('userDetails', JSON.stringify(userDetails), { expires: expiryDate });
};

// Get token from cookies
export const getToken = (): string | undefined => Cookies.get('token');

// Get user details from cookies
export const getUserDetails = (): UserDetails | null => {
    const details = Cookies.get('userDetails');
    return details ? JSON.parse(details) as UserDetails : null;
  
};




// Remove all auth-related cookies
export const clearAuthCookies = (): void => {
    Cookies.remove('token');
    Cookies.remove('userDetails');
};
