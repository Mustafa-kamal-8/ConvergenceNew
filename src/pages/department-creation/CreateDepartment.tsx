import { useQuery } from "@tanstack/react-query";
import CentralizedTable from "../../components/CentralizedTable";
import { departmentListColumns } from "../../utils/tableColumns";
import { getCreatedDepartments } from "../../services/state/api/departmentCreationApi";
import ModalOpenButton from "../../components/ui/ModelOpenButton";
import { Add } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";

interface Department {
  pklDepartmentId: number;
  vsDepartmentName: string;
}

const CreateDepartment = () => {
  const { data } = useQuery({
    queryKey: ["getCreatedDepartments"],
    queryFn: getCreatedDepartments,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Autocomplete
          disablePortal
          getOptionLabel={(option: Department) =>
            option?.vsDepartmentName?.charAt(0)?.toUpperCase() +
            option?.vsDepartmentName?.slice(1)
          }
          options={data?.departmentNameList}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              className="capitalize"
              label="Select Department"
            />
          )}
        />
        <ModalOpenButton
          modalType={13}
          modalTitle="Add Login Creation"
          bulkName="LoginCreation"
          Icon={Add}
        />
      </div>
      <div className="w-full">
        <CentralizedTable
          columns={departmentListColumns}
          data={data?.departmentData}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default CreateDepartment;
