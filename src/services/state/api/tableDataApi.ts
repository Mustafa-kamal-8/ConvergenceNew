import axios from "axios";
import { getUserDetails } from "../../../utils/cookies";
import { getToken } from "../../../utils/cookies";

const API_BASE_URL = process.env.VITE_API_BASE_URL;
const userDetails = getUserDetails();
const authorization = getToken();
  
if (!userDetails || !userDetails.departmentId) {
  throw new Error("Department ID is missing in user details.");
}

export const getSchemeData = async () => {
    const requestData = {
      fklDepartmentId: userDetails.departmentId,
      queryType: "scheme",
    };
  
    const headers = {
      Authorization: `Bearer ${authorization}`, 
    };
  
    const response = await axios.post(`${API_BASE_URL}/get-department/`, requestData, {
      headers,
    });
    return response.data;
  };