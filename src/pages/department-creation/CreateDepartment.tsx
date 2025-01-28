import { useQuery } from "@tanstack/react-query";
import CentralizedTable from "../../components/CentralizedTable";
import { departmentListColumns } from "../../utils/tableColumns";
import { getCreatedDepartments } from "../../services/state/api/departmentCreationApi";
import ModalOpenButton from "../../components/ui/ModelOpenButton";
import { Add } from "@mui/icons-material";


const CreateDepartment = () => {
  const { data } = useQuery({
    queryKey: ["getCreatedDepartments"],
    queryFn: getCreatedDepartments,
  });

  return (
    <div>
      <ModalOpenButton
        modalType={ 13 }
        modalTitle="Add Login Creation"
        bulkName="LoginCreation"
        Icon={ Add }
     
      />
      <CentralizedTable
        columns={ departmentListColumns }
        data={ data }
        pageSize={ 5 }
      />
    </div>
  );
};

export default CreateDepartment;
