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
import { assessorsColumns } from "../utils/tableColumns";


interface AssessorsData {
  id: string;
  AssessorId: string;
  Name: string;
  Email: string;
  Mobile: string;
  AssessorAgency: string;
  ValidUpto: string;
  Action: any;
}

const Assessors: React.FC = () => {
  const [data, setData] = useState<AssessorsData[]>([
    {
      id: "1",
      AssessorId: "6",
      Name: "gvgg",
      Email: "sds@gmail.com",
      Mobile: "9876566545",
      AssessorAgency: "A agency",
      ValidUpto: "01/02.2020",
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
        (selectedOption === "All" || candidate.AssessorId === selectedOption) &&
        candidate.AssessorId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.AssessorId === option) &&
        candidate.AssessorId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Assessors</p>
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
              templateType={7}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="assessors"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={7}
              modalTitle="Add Assessors"
              bulkName="Assessors"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={assessorsColumns} data={data} pageSize={5} /> 
    </>
  );
};

export default Assessors;
