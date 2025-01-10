import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { candidateColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { placementColumns } from "../utils/tableColumns";
import { DownloadCloud, UploadCloud } from "lucide-react";

interface PlacementData {
  id: string;
  BatchId: string;
  CandidateId: string;
  IsPlaced: string;
  PlacementType: string;
  EmployerName: string;
  EmployerContact: string;
  PlacementState: string;
  PlacementDistrict: string;
  MonthlySalary: string;
  Action: any;
}

const Placement: React.FC = () => {
  const [data, setData] = useState<PlacementData[]>([
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
  ]);

  const [dropdownOptions] = useState<string[]>(["All", "Active", "Inactive"]);
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");

  // Handle search logic
  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filteredData = data.filter(
      (candidate) =>
        (selectedOption === "All" ||
          candidate.PlacementType === selectedOption) &&
        candidate.PlacementType.toLowerCase().includes(
          searchValue.toLowerCase()
        )
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.PlacementType === option) &&
        candidate.PlacementType.toLowerCase().includes(
          searchValue.toLowerCase()
        )
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Placements</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <Dropdown
              options={dropdownOptions}
              onSelect={handleDropdownSelect}
            />
            {selectedOption && (
              <SearchInputBox
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by name..."
              />
            )}
          </div>
          <div className="flex gap-1">
            <TemplateDownloadButton
              templateType={9}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="placement"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={9}
              modalTitle="Add Placement"
              bulkName="Placement"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={placementColumns} data={data} pageSize={5} /> 
    </>
  );
};

export default Placement;
