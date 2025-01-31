import React, { useEffect, useMemo, useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { trainingColumns as getTrainingColumns } from "../utils/tableColumns"; // Rename the import
import ModalOpenButton from "../components/ui/ModelOpenButton";
import SearchInputBox from "../components/ui/SearchInputBox";
import {  DownloadCloud,  UploadCloud } from "lucide-react";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { useNavigate } from "react-router-dom";
import useDebounce from "../services/state/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getTableData } from "../services/state/api/tableDataApi";
import SearchDropdown from "../components/ui/SearchDropdown";
import Loader from "../components/ui/Loader";

const TrainingPartner: React.FC = () => {
  const navigate = useNavigate();
  const columns = useMemo(() => getTrainingColumns(navigate), [navigate]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const {
    data: fetchedData,
    isLoading,
    isSuccess,
   
  } = useQuery({
    queryKey: ["tpData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("TP", searchKey, debouncedSearchValue),
   
  });

  useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        // setTotalCount(fetchedData.data.total_count)
      } else {
        setFilteredData([]);
      }
    }
  }, [fetchedData, isSuccess]);


  const handleDropdownSelect = (option: { label: string; value: string }) => {
    setSearchKey(option.value);
    setSearchKeyLabel(option.label);
    setSearchValue(""); 
  };
  

  const handleSearch = (value: string) => {
    setSearchValue(value);
   
  };

if(isLoading){
  return <Loader/>
}
  


  return (
    <>
    
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Training Partners</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
        <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "TP name", value: "vsTpName" },
                { label: "Mobile", value: "iSpocContactNum" },  
                { label: "SPOC Name", value: "vsSpocName" },
                { label: "Smart ID", value: "vsSmartId" },
                { label: "District", value: "vsDistrict" },
                { label: "State", value: "vsState" },
                { label: "Block", value: "vsBlock" },
                { label: "ULB", value: "vsULB" }
              ]}
              onSelect={handleDropdownSelect}
              selected={searchKey}
            />
            {searchKey && (
              <>
                <SearchInputBox
                  value={searchValue}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={`Enter ${searchKeyLabel}`}
                />
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-800"
                  onClick={() => {
                    setSearchValue("");
                    setSearchKey("");
                    setSearchKeyLabel("");
                    setFilteredData(fetchedData?.data?.data || []);
                  }}
                >
                  Clear
                </button>
              </>
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
              bulkName="TP"
              Icon={UploadCloud}
            
            />
            <ModalOpenButton
              modalType={3}
              modalTitle="Add Training Partner"
              bulkName="TP"
              Icon={Add}
            
            />
         
          </div>
        </div>
      </div>

      <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
    </>
  );
};

export default TrainingPartner;
