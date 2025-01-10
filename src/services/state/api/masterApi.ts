import axios from 'axios';
import { getUserDetails } from '../../../utils/cookies';
import { getToken } from "../../../utils/cookies";

const API_BASE_URL = process.env.VITE_API_BASE_URL;
const userDetails = getUserDetails();
const fklDepartmentId = userDetails?.departmentId
const authorization = getToken();
console.log("dpt id is",fklDepartmentId)


export const getMasterData = async (queryType: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/master/get`,
    {
      fklDepartmentId,
      queryType, // Dynamically added key
    },
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};


export default { getMasterData };




export const getSchemeById = async (schemeId: string) => {
    const response = await fetch(`${API_BASE_URL}/get-department/getSchemeById`, {
      method: "POST",
      headers: {  
        Authorization: `Bearer ${authorization}`,
        "Content-Type": "application/json",  
      },
    
      body: JSON.stringify({ schemeId, fklDepartmentId }),
    });
  
    if (!response.ok) {
      throw new Error("Error fetching scheme data");
    }
  
    const data = await response.json();
    console.log("Fetched scheme data:", data); 
    return data;
  };
  