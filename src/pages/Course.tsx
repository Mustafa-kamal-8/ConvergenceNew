
import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { candidateColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import { Plus, DownloadCloud, UploadCloud, X } from "lucide-react";
import Input from "../components/ui/Input";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { courseColumns } from "../utils/tableColumns";

interface CourseData {
  id: string;
  SectorName: string;
  QPNOSCode: string;
  JobRoleName: string;
  TotalTheoryHours: string;
  TotalPracticalHours: string;
  DateValidUpto: string;
  Action: any;
}
  
  const Course: React.FC = () => {
    const [data, setData] = useState<CourseData[]>([
      {
        id: "1",
        SectorName: "Sector A",
        QPNOSCode: "T1y66",
        JobRoleName: "Developer",
        TotalTheoryHours: "Equity",
        TotalPracticalHours: "11",
        DateValidUpto: "01/02/2024",
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
      (selectedOption === "All" || candidate.SectorName === selectedOption) &&
      candidate.SectorName.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

// Handle dropdown selection
const handleDropdownSelect = (option: string) => {
  setSelectedOption(option);
  const filteredData = data.filter(
    (candidate) =>
      (option === "All" || candidate.SectorName === option) &&
      candidate.SectorName.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Course</p>
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
              templateType={2}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="course"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={2}
              modalTitle="Add Course"
              bulkName="course"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={courseColumns} data={data} pageSize={5} /> 
    </>
  );
}

export default Course

