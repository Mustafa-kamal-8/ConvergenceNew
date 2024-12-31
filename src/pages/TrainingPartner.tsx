import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { trainingColumns as getTrainingColumns } from "../utils/tableColumns"; // Rename the import
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import { Plus, DownloadCloud, UploadCloud } from "lucide-react";
import Input from "../components/ui/Input";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { useNavigate } from "react-router-dom";

const TrainingPartner: React.FC = () => {
  const navigate = useNavigate();
  const trainingColumns = React.useMemo(() => getTrainingColumns(navigate), [navigate]); // Avoid duplicate name

  interface TrainingPartnerData {
    id: string;
    Centeres: string;
    PartnerId: string;
    Name: string;
    SPOCName: string;
    SmartId: string;
    Mobile: string;
    Email: string;
    Address: string;
    State: string;
    District: string;
    Block: string;
    Village: string;
    Action: unknown;
  }

  const [data, setData] = useState<TrainingPartnerData[]>([
    {
      id: "1",
      Centeres: "3",
      PartnerId: "S67",
      Name: "Training A",
      SPOCName: "Training B",
      SmartId: "9789ghg",
      Mobile: "87654564543",
      Email: "ghj@gmail.com",
      Address: "ghgh",
      State: "Assam",
      District: "Kamrup M",
      Block: "Dispur",
      Village: "Hengrabari",
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

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filteredData = data.filter(
      (candidate) =>
        (selectedOption === "All" || candidate.PartnerId === selectedOption) &&
        candidate.PartnerId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
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
        <p className="text-2xl font-bold mb-4">List Of Training Partners</p>
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
              templateType={3}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="trainingPartner"
              Icon={UploadCloud}
              id={''}
            />
            <ModalOpenButton
              modalType={3}
              modalTitle="Add Training Partner"
              bulkName="trainingPartner"
              Icon={Add}
              id= {''}
            />
         
          </div>
        </div>
      </div>

      <CentralizedTable columns={trainingColumns} data={data} pageSize={5} />
    </>
  );
};

export default TrainingPartner;
