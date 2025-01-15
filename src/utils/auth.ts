import useAuthStore from "./cookies";

// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return isAuthenticated;
  };
