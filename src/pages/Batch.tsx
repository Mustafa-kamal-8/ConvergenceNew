
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
import { batchColumns } from "../utils/tableColumns";

interface BatchData {
  id: string;
  BatchId: string;
  SDMSBatchId: string;
  BatchDuration: string;
  TrainingPartner: string;
  TrainingCenter: string;
  Trainer: string;
 
  Sector: string;
  JobRole: string;
  QPNOSCode: string;
 
  Action: any;
}
  
  const Batch: React.FC = () => {
    const [data, setData] = useState<BatchData[]>([
      {
        id: "1",
        BatchId: "1",
        SDMSBatchId: "12",
        BatchDuration: "8",
        TrainingPartner: "guio",
        TrainingCenter: "hghg",
        Trainer: "jhgjhg",
      
        Sector: "huighui",
        JobRole: "huighui",
        QPNOSCode: "554gefg565",
       
      
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
      (selectedOption === "All" || candidate.SDMSBatchId === selectedOption) &&
      candidate.SDMSBatchId.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

// Handle dropdown selection
const handleDropdownSelect = (option: string) => {
  setSelectedOption(option);
  const filteredData = data.filter(
    (candidate) =>
      (option === "All" || candidate.SDMSBatchId === option) &&
      candidate.SDMSBatchId.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Batches</p>
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
              templateType={4}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="batch"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={4}
              modalTitle="Add Batch"
              bulkName="Batch"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={batchColumns} data={data} pageSize={5} /> 
    </>
  );
}

export default Batch


