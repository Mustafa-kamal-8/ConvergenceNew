
import useAuthStore from "../../../utils/cookies";
import axiosInstance from "../api-setup/axiosInstance";



export const getTableData = async (
  queryType: string,
  searchKey?: string,
  searchValue?: string,
  duplicateQuery?: string[],
  currentPage: number = 1,
  pageSize: number = 25
) => {
  // Properly get state here
  const { userDetails } = useAuthStore.getState();

  if (!userDetails) {
    throw new Error("User details are not available in the store.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const requestData: any = {
    fklDepartmentId: userDetails.departmentId, // Access departmentId
    queryType,
    skip: currentPage - 1, // Adjusted skip logic
    take: pageSize, // Backend expects `take`
  };

  if (duplicateQuery && duplicateQuery.length > 0) {
    requestData.duplicateQuery = duplicateQuery; // Array of selected filter criteria
  }

  if (searchKey && searchValue) {
    requestData[searchKey] = searchValue;
  }

  const response = await axiosInstance.post("/get-department/", requestData);
  return response.data;
};










