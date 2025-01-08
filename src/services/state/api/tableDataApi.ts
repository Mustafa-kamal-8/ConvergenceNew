import axios from "axios";
import { getUserDetails } from "../../../utils/cookies";
import { getToken } from "../../../utils/cookies";


const API_BASE_URL = process.env.VITE_API_BASE_URL;
const userDetails = getUserDetails();
const authorization = getToken();


export const getSchemeData = async () => {
  const requestData = {
    fklDepartmentId: userDetails?.departmentId,
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


export const getTargetData = async (id: string) => {
  const requestData = {
    fklDepartmentId: userDetails?.departmentId,
    schemeId:id
  };
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  const response = await axios.post(`${API_BASE_URL}/get-department/viewTargetBySchemeId`, requestData, {
    headers,
  });
  return response.data;
};


