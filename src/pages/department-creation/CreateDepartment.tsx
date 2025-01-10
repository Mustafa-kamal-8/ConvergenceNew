import { useQuery } from "@tanstack/react-query";
import CentralizedTable from "../../components/CentralizedTable";
import { departmentListColumns } from "../../utils/tableColumns";
import { getCreatedDepartments } from "../../services/state/api/departmentCreationApi";

const CreateDepartment = () => {
  const { data } = useQuery({
    queryKey: ["getCreatedDepartments"],
    queryFn: getCreatedDepartments,
  });

  return (
    <div>
      <CentralizedTable
        columns={departmentListColumns}
        data={data}
        pageSize={5}
      />
    </div>
  );
};

export default CreateDepartment;
