
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
import { targetColumns } from "../utils/tableColumns";

interface TargetData {
  id: string;
  SchemeCode: string;
  SanctionOrderNumber: string;
  DateOfSanction: string;
  TotalTarget: string;
  Action: any;
}
  
  const Target: React.FC = () => {
    const [data, setData] = useState<TargetData[]>([
      {
        id: "1",
        SchemeCode: "S78678",
        SanctionOrderNumber: "gb56756",
        DateOfSanction: "01/02/2022",
        TotalTarget: "89789",
  
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
    (target) =>
      (selectedOption === "All" || target.SchemeCode === selectedOption) &&
      target.SchemeCode.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

// Handle dropdown selection
const handleDropdownSelect = (option: string) => {
  setSelectedOption(option);
  const filteredData = data.filter(
    (target) =>
      (option === "All" || target.SchemeCode === option) &&
      target.SchemeCode.toLowerCase().includes(searchValue.toLowerCase())
  );
  setData(filteredData);
};

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Target</p>
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
              templateType={1}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="target"
              Icon={UploadCloud}
            />
            <ModalOpenButton
              modalType={1}
              modalTitle="Add Target"
              bulkName="target"
              Icon={Add}
            />
          </div>
        </div>
      </div>

      <CentralizedTable columns={targetColumns} data={data} pageSize={5} />
    </>
  );
}

export default Target
