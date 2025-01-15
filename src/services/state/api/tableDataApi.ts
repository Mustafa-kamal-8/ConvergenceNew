
import useAuthStore from "../../../utils/cookies";
import axiosInstance from "../api-setup/axiosInstance";







export const getTableData = async (
  queryType: string,
  searchKey?: string,
  searchValue?: string
) => {
  // Properly get state here
  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }

  const requestData: any = {
    fklDepartmentId: userDetails.departmentId, // Access departmentId
    queryType,
  };

  if (searchKey && searchValue) {
    requestData[searchKey] = searchValue;
  }

  const response = await axiosInstance.post("/get-department/", requestData);
  return response.data;
};

export const getTargetData = async (id: string) => {

  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }
  const requestData = {
    fklDepartmentId: userDetails?.departmentId,
    schemeId:id
  };
  
  const response = await axiosInstance.post("/get-department/viewTargetBySchemeId", requestData, {
    
  });
  return response.data;
};


