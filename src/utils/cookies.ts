// /* eslint-disable @typescript-eslint/no-unused-vars */
// import Cookies from "js-cookie";


// interface UserDetails {
//     username: string;
//     departmentId: string;
//     adminLoginId: string;
//     isDept: string;
// }

// // Set token and user details in cookies
// export const setAuthCookies = (
// token: string, userDetails: UserDetails, _p0?: number,

// ): void => {
//     const expiryDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
//     Cookies.set('token', token, { expires: expiryDate });
//     Cookies.set('userDetails', JSON.stringify(userDetails), { expires: expiryDate });
// };

// // Get token from cookies
// export const getToken = (): string | undefined => Cookies.get('token');

// // Get user details from cookies
// export const getUserDetails = (): UserDetails | null => {
//     const details = Cookies.get('userDetails');
//     return details ? (JSON.parse(details) as UserDetails) : null;
//   };
  




// // Remove all auth-related cookies
// export const clearAuthCookies = (): void => {
//     Cookies.remove('token');
//     Cookies.remove('userDetails');
// };

// store/authStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Cookies from 'js-cookie';

// Define the user details interface
interface UserDetails {
  username: string;
  departmentId: string;
  adminLoginId: string;
  isDept: string;
}

// Define the Zustand store interface
interface AuthStore {
  token: string | null;
  userDetails: UserDetails | null;
  isAuthenticated: boolean;
  setAuth: (token: string, userDetails: UserDetails) => void;
  clearAuth: () => void;
  initializeAuth: () => void;
}

// Create the Zustand store
const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    token: null,
    userDetails: null,

    // Check if the user is authenticated
    isAuthenticated: false,

    // Set token and user details in store and cookies
    setAuth: (token: string, userDetails: UserDetails) => {
      const expiryDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day expiration
      Cookies.set('token', token, { expires: expiryDate });
      Cookies.set('userDetails', JSON.stringify(userDetails), { expires: expiryDate });

      set({ token, userDetails, isAuthenticated: !!token });
    },

    // Clear token and user details from store and cookies
    clearAuth: () => {
      Cookies.remove('token');
      Cookies.remove('userDetails');
      set({ token: null, userDetails: null, isAuthenticated: false });
    },

    // Initialize auth from cookies
    initializeAuth: () => {
      const token = Cookies.get('token');
      const userDetails = Cookies.get('userDetails');

      if (token && userDetails) {
        set({ token, userDetails: JSON.parse(userDetails) as UserDetails, isAuthenticated: true });
      } else {
        set({ isAuthenticated: false });
      }
    },
  }))
);

export default useAuthStore;


