import axios from "axios";
import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors";

const API_BASE_URL = process.env.VITE_API_BASE_URL as string; // Type assertion

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Optional timeout
});

// Attach interceptors
axiosInstance.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor
);
axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default axiosInstance;
