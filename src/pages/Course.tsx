
import React, { useEffect, useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import {  DownloadCloud, UploadCloud } from "lucide-react";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { courseColumns } from "../utils/tableColumns";
import { getTableData } from "../services/state/api/tableDataApi";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


  const Course: React.FC = () => {

const [dropdownOptions] = useState<string[]>(["All", "Active", "Inactive"]);
const [selectedOption, setSelectedOption] = useState<string>("All");
const [searchValue, setSearchValue] = useState<string>("");
 const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

const { data: fetchedData, isSuccess } = useQuery({
  queryKey: ["courseData" , "course"],
  queryFn: () => getTableData("course"),
});

 useEffect(() => {
    if (isSuccess && fetchedData?.data?.data) {
      setFilteredData(fetchedData.data.data); 
    }
  }, [fetchedData, isSuccess]);

// Handle search logic
const handleSearch = (value: string) => {
  setSearchValue(value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filtered = fetchedData.data.filter((item: any) =>
    item.vsSchemeName.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredData(filtered);
};


 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const handleDropdownSelect = (option:any) => {
  setSelectedOption(option);
  const filtered = fetchedData.data.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => option === "All" || item.vsSchemeType === option
  );
  setFilteredData(filtered);
};

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Course</p>
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
              templateType={2}
              templateTitle="Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="course"
              Icon={UploadCloud}
              id= {''}
            />
            <ModalOpenButton
              modalType={2}
              modalTitle="Add Course"
              bulkName="course"
              Icon={Add}
              id= {''}
            />
          </div>
        </div>
      </div>

       <CentralizedTable columns={courseColumns(navigate)} data={filteredData} pageSize={5} /> 
    </>
  );
}

export default Course

