import axios from "axios";
import { SchemeFormData } from "../../../utils/formTypes";
import { CourseFormData } from "../../../utils/formTypes";
import { getUserDetails } from "../../../utils/cookies";

const API_BASE_URL = process.env.VITE_API_BASE_URL;
const userDetails = getUserDetails();
 
  
if (!userDetails || !userDetails.departmentId) {
  throw new Error("Department ID is missing in user details.");
}

export const submitSchemeForm = async (data: SchemeFormData) => {
 const requestData = {
    ...data,
    fklDepartmentId: userDetails.departmentId,
    queryType: "scheme"
  };
  const response = await axios.post(`${API_BASE_URL}/manual-file-upload/`, requestData);
  return response.data;
};


export const submitCourseForm = async (data:CourseFormData) =>{
  const response = await axios.post(`${API_BASE_URL}/submit-course-form`,data);
  return response.data

}