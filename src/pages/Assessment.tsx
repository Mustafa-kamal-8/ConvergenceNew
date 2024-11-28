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
import { assessmentColumns } from "../utils/tableColumns";

interface AssessmentData {
  id: string;
  BatchId: string;
  SDMSBatchId: string;
  CandidateId: string;
  AssessedId: string;
  AssesmentDate: string;
  Agency: string;
  AgencyMobile: string;
  AgencyEmail: string;
  AccessorId: string;
  AccessorName: string;
  Result: string;
  ResultDate: string;
  CertificationStatus: string;
  TotalMarks: string;
  ObtainedMarks: string;
  MarksheetURL: string;
  CertificateURL: string;
  Action: any;
}


const Assessment: React.FC = () => {
 const [data, setData] = useState<AssessmentData[]>([
   {
     id: "1",
     BatchId: "7678",
     SDMSBatchId: "Type6757fg",
     CandidateId: "S001",
     AssessedId: "787hujh",
     AssesmentDate: "01/02/2023",
     Agency: "agency1",
     AgencyMobile: "98765656545",
     AgencyEmail: "agency@gmail.com",
     AccessorId: "A123",
     AccessorName: "John Doe",
     Result: "Pass",
     ResultDate: "02/02/2023",
     CertificationStatus: "Certified",
     TotalMarks: "100",
     ObtainedMarks: "90",
     MarksheetURL: "http://example.com/marksheet",
     CertificateURL: "http://example.com/certificate",
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
          candidate.SDMSBatchId === selectedOption) &&
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
        <p className="text-2xl font-bold mb-4">List Of Assessment</p>
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
              templateType={8}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="assessment"
              Icon={UploadCloud}
            />
            <ModalOpenButton
              modalType={8}
              modalTitle="Add Assessment"
              bulkName="Assessment"
              Icon={Add}
            />
          </div>
        </div>
      </div>

     <CentralizedTable columns={assessmentColumns} data={data} pageSize={5} /> 
    </>
  );
};

export default Assessment;
