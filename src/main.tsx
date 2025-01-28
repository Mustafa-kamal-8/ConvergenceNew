// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import './custom.css';
// import App from './App.tsx';
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  // Import QueryClient and QueryClientProvider

// // Create a new QueryClient instance
// const queryClient = new QueryClient();

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>  {/* Wrap your app with QueryClientProvider */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </QueryClientProvider>
//   </StrictMode>,
// );


import { createRoot } from "react-dom/client";
import "./index.css";
import "./custom.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider
import useAuthStore from "./utils/cookies.ts";
import CustomModal from "./components/ui/CustomModal.tsx";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const initializeAuth = useAuthStore.getState().initializeAuth;

initializeAuth(); // Ensure state is loaded from cookies

createRoot(document.getElementById("root")!).render(

  <QueryClientProvider client={ queryClient }> {/* Wrap with QueryClientProvider */ }
    <BrowserRouter>
      <CustomModal />
      <App />
      {/* ToastContainer placed here to ensure it works globally */ }
      <ToastContainer
        position="top-center"
        autoClose={ 3000 }
        hideProgressBar={ false }
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  </QueryClientProvider>

);

