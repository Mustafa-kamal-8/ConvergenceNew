import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { centerColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import { Plus, DownloadCloud, UploadCloud } from "lucide-react";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";

interface TrainingCenterData {
  id: string;
  TpId: string;
  PartnerId: string;
  Name: string;
  CenterId: string;
  SmartId: string;
  spocName: string;
  Mobile: string;
  Email: string;
  Address: string;
  State: string;
  District: string;
  Block: string;
  Village: string;
  Constituency: string;
  Action: unknown;
}

const TrainingCenter: React.FC = () => {
  const [originalData] = useState<TrainingCenterData[]>([
    {
      id: "1",
      TpId: "3",
      PartnerId: "S67",
      Name: "Center A",
      CenterId: "9789ghg",
      SmartId: "gfg6565",
      spocName: "Mustafa",
      Mobile: "9878777667",
      Email: "mk@gmail.com",
      Address: "Hengrabari",
      State: "Assam",
      District: "Kamrup M",
      Block: "Dispur",
      Village: "Hengrabari",
      Constituency: "Dispur",
      Action: (
        <button className="py-1 px-3 text-white bg-blue-500 rounded">
          View
        </button>
      ),
    },
  ]);

  const [data, setData] = useState<TrainingCenterData[]>(originalData);
  const [dropdownOptions] = useState<string[]>(["All", "Active", "Inactive"]);
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filteredData = originalData.filter(
      (candidate) =>
        (selectedOption === "All" || candidate.PartnerId === selectedOption) &&
        candidate.PartnerId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = originalData.filter(
      (candidate) =>
        (option === "All" || candidate.PartnerId === option) &&
        candidate.PartnerId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Training Centeres</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <Dropdown options={dropdownOptions} onSelect={handleDropdownSelect} />
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
              templateType={3}
              templateTitle="Template"
              Icon={DownloadCloud}
            />
            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="trainingPartner"
              Icon={UploadCloud}
              id={""}
            />
          </div>
        </div>
      </div>
      <CentralizedTable columns={centerColumns} data={data} pageSize={5} />
    </>
  );
};

export default TrainingCenter;
