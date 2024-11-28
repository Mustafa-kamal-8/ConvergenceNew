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
import { invoiceColumns } from "../utils/tableColumns";

interface InvoiceData {
  id: string;
  BatchId: string;
  InvoiceType: string;
  InvoiceNumber: string;
  InvoiceDate: string;
  NoOfCandidates: string;
  Rate: string;
  Amount: string;
  Action: any;
}

const Invoice: React.FC = () => {
  const [data, setData] = useState<InvoiceData[]>([
    {
      id: "1",
      BatchId: "B001",
      InvoiceType: "Standard",
      InvoiceNumber: "INV001",
      InvoiceDate: "2023-02-15",
      NoOfCandidates: "30",
      Rate: "5000",
      Amount: "150000",
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
          candidate.InvoiceType === selectedOption) &&
        candidate.InvoiceType.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.InvoiceType === option) &&
        candidate.InvoiceType.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Invoices</p>
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
              templateType={10}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="invoice"
              Icon={UploadCloud}
            />
            <ModalOpenButton
              modalType={10}
              modalTitle="Add Invoice"
              bulkName="Invoice"
              Icon={Add}
            />
          </div>
        </div>
      </div>

     <CentralizedTable columns={invoiceColumns} data={data} pageSize={5} /> 
    </>
  );
};

export default Invoice;
