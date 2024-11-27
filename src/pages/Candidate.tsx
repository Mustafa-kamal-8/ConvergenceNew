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

interface SchemeData {
  id: string;
  Scheme: string;
  SchemeType: string;
  SchemeCode: string;
  FundName: string;
  FundType: string;
  FundRatio: string;
  OrderNumber: string;
  SantionDate: string;
  Action: any;
}

const Candidate: React.FC = () => {
  const [data, setData] = useState<SchemeData[]>([
    {
      id: "1",
      Scheme: "Scheme A",
      SchemeType: "Type 1",
      SchemeCode: "S001",
      FundName: "Fund X",
      FundType: "Equity",
      FundRatio: "60%",
      OrderNumber: "O001",
      SantionDate: "2023-01-01",
      Action: (
        <button className="py-1 px-3 text-white bg-blue-500 rounded">
          View
        </button>
      ),
    },
    {
      id: "2",
      Scheme: "Scheme B",
      SchemeType: "Type 2",
      SchemeCode: "S002",
      FundName: "Fund Y",
      FundType: "Debt",
      FundRatio: "40%",
      OrderNumber: "O002",
      SantionDate: "2023-06-15",
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
        (selectedOption === "All" || candidate.Scheme === selectedOption) &&
        candidate.SchemeCode.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.Scheme === option) &&
        candidate.SchemeCode.toLowerCase().includes(searchValue.toLowerCase())
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
            />
            <ModalOpenButton
              modalType={5}
              modalTitle="Add Candidate"
              bulkName="Candidate"
              Icon={Add}
            />
          </div>
        </div>
      </div>

      {/* <CentralizedTable columns={candidateColumns} data={data} pageSize={5} /> */}
    </>
  );
};

export default Candidate;
