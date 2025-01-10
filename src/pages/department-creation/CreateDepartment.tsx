import CentralizedTable from "../../components/CentralizedTable";
import { departmentListColumns } from "../../utils/tableColumns";

const CreateDepartment = () => {
  const data = [
    {
      id: "1",
      BatchId: "B001",
      CandidateId: "C001",
      IsPlaced: "Yes",
      PlacementType: "Full-time",
      EmployerName: "Company A",
      EmployerContact: "9876543210",
      PlacementState: "Assam",
      PlacementDistrict: "Kamrup",
      MonthlySalary: "₹50,000",
      Action: (
        <button className="py-1 px-3 text-white bg-blue-500 rounded">
          View
        </button>
      ),
    },
  ];
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
