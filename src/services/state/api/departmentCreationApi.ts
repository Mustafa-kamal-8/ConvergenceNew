import axiosInstance from "../api-setup/axiosInstance";
import { ENDPOINTS } from "../../../api-endpoints/endpoints";

export const getCreatedDepartments = async (): Promise<any> => {
  const response = await axiosInstance.post(ENDPOINTS.getCreatedDepartments);
  return response.data.data;
};
