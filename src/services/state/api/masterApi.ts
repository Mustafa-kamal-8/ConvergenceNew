
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



export const getDistrictByState = async (stateId: number|null, queryType: string) => {
  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }

  const response = await axiosInstance.post("/master/get", {
    fklDepartmentId: userDetails.departmentId,
    stateId, 
    queryType
  });

  return response.data;
};

//getULBblockByDistrict

export const getULBblockByDistrict = async (districtId: number|null, queryType: string) => {
  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }

  const response = await axiosInstance.post("/master/get", {
    fklDepartmentId: userDetails.departmentId,
    districtId, 
    queryType
  });

  return response.data;
};

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

  export const getPartnerById = async (tpId: string) => {

    const { userDetails } = useAuthStore.getState();
  
    if (!userDetails) {
      throw new Error("User details are not available in the store.");
    }
      const response = await axiosInstance.post("/get-department/getTp/id",   {
        fklDepartmentId: userDetails.departmentId,
        tpId, 
      },
    )
      return response.data;
    };
  