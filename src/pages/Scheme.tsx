import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { schemeColumns as getTrainingColumns} from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import {  DownloadCloud, UploadCloud } from "lucide-react";

import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { useNavigate } from "react-router-dom";

interface SchemeData {
  id: string;
  Scheme: string;
  Targets: string;
  SchemeType: string;
  SchemeCode: string;
  FundName: string;
  FundType: string;
  FundRatio: string;
  OrderNumber: string;
  SantionDate: string;
  TotalTarget: string;
  Action: unknown;
}

const Scheme: React.FC = () => {

  const navigate = useNavigate();
  const candidateColumns = React.useMemo(() => getTrainingColumns(navigate), [navigate]);


  const [data, setData] = useState<SchemeData[]>([
    {
      id: "1",
      Scheme: "Scheme A",
      Targets:"5",
      SchemeType: "Type 1",
      SchemeCode: "S001",
      FundName: "Fund X",
      FundType: "Equity",
      FundRatio: "60%",
      OrderNumber: "O001",
      SantionDate: "2023-01-01",
      TotalTarget:"34",
      Action: <button className="py-1 px-3 text-white bg-blue-500 rounded">View</button>,
    },
    {
      id: "2",
      Scheme: "Scheme B",
      Targets:"7",
      SchemeType: "Type 2",
      SchemeCode: "S002",
      FundName: "Fund Y",
      FundType: "Debt",
      FundRatio: "40%",
      OrderNumber: "O002",
      SantionDate: "2023-06-15",
      TotalTarget:"44",
      Action: <button className="py-1 px-3 text-white bg-blue-500 rounded">View</button>,
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
        <p className="text-2xl font-bold mb-4">List Of Schemes</p>
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
              templateType={0}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="scheme"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={0}
              modalTitle="Add scheme"
              bulkName="scheme"
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

export default Scheme;
