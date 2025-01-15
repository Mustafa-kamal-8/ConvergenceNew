
import useAuthStore from '../../../utils/cookies';
import axiosInstance from '../api-setup/axiosInstance';




export const getMasterData = async (queryType: string) => {
  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }
  const response = await axiosInstance.post(
    "/master/get",
    {
      fklDepartmentId: userDetails.departmentId,
      queryType, 
    },
   
  );

  return response.data;
};

export default { getMasterData };




export const getSchemeById = async (schemeId: string) => {

  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }
    const response = await axiosInstance.post("/get-department/getSchemeById",   {
      fklDepartmentId: userDetails.departmentId,
      schemeId, 
    },
  )
    return response.data;
  };
  