import axios from "axios";
import { SchemeFormData, targetFormData } from "../../../utils/formTypes";
import { CourseFormData } from "../../../utils/formTypes";
import { getUserDetails } from "../../../utils/cookies";

const API_BASE_URL = process.env.VITE_API_BASE_URL;
const userDetails = getUserDetails();


export const submitSchemeForm = async (data: SchemeFormData) => {
 const requestData = {
    ...data,
    fklDepartmentId: userDetails?.departmentId,
    queryType: "scheme"
  };
  const response = await axios.post(`${API_BASE_URL}/manual-file-upload/`, requestData);
  return response.data;
};



export const submitTargetForm = async (data: targetFormData & { fklSchemeId: string }) => {
  const { sanctionOrderNo, ...restData } = data; 

  const requestData = {
    ...restData,
    vsSanctionNo: sanctionOrderNo, 
    fklDepartmentId: userDetails?.departmentId,
    queryType: "target",
  };

  const response = await axios.post(`${API_BASE_URL}/manual-file-upload/`, requestData);
  return response.data;
};




export const submitCourseForm =async(data: CourseFormData) =>{
  const requestData={
    ...data,
      fklDepartmentId: userDetails?.departmentId,
    queryType: "course"
  }
    const response = await axios.post(`${API_BASE_URL}/manual-file-upload`,requestData);
    return response.data
  }


