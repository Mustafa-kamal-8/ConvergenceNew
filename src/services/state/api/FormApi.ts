import axios from "axios";
import { SchemeFormData } from "../../../utils/formTypes";

const API_BASE_URL = process.env.VITE_API_BASE_URL;

export const submitSchemeForm = async (data: SchemeFormData) => {
  const response = await axios.post(`${API_BASE_URL}/submit-scheme-form`, data);
  return response.data; 
};
