import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { candidateColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import {  DownloadCloud, UploadCloud,  } from "lucide-react";

import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";

interface CandidateData {
  id: string;
  BatchId: string;
  CandidateId: string;
  CandidateName: string;
  FatherName: string;
  MotherName: string;
  DOB: string;
  Age: string;
  Gender: string;
  Action: unknown;
}

const Candidate: React.FC = () => {
  const [data, setData] = useState<CandidateData[]>([
    {
      id: "1",
      BatchId: "Scheme A",
      CandidateId: "Type 1",
      CandidateName: "S001",
      FatherName: "Fund X",
      MotherName: "Equity",
      DOB: "60%",
      Age: "O001",
      Gender: "2023-01-01",
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
        (selectedOption === "All" || candidate.BatchId === selectedOption) &&
        candidate.BatchId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.BatchId === option) &&
        candidate.BatchId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Candidates</p>
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
              templateType={5}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="candidate"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={5}
              modalTitle="Add Candidate"
              bulkName="Candidate"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={candidateColumns} data={data} pageSize={5} /> 
    </>
  );
};

export default Candidate;
