import React, { useEffect, useMemo, useState } from "react";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { DownloadCloud, UploadCloud } from "lucide-react";
import Loader from "../components/ui/Loader";
import { getTableData } from "../services/state/api/tableDataApi";
import { useQuery } from "@tanstack/react-query";
import {  placementColumns, placementDuplicateColumns } from "../utils/tableColumns";
import { useNavigate } from "react-router-dom";
import SearchInputBox from "../components/ui/SearchInputBox";
import SearchDropdown from "../components/ui/SearchDropdown";
import CentralizedTable from "../components/CentralizedTable";
import useDebounce from "../services/state/useDebounce";



const Placement: React.FC = () => {
  const navigate = useNavigate();

  

  const columns = useMemo(() => placementColumns(navigate), [navigate]);
  const duplicateColumns = useMemo(() => placementDuplicateColumns(navigate), [navigate]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalCount , setTotalCount] = useState([]);
   const [duplicateData, setDuplicateData] = useState([]);
  

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const {
    data: fetchedData,
    isLoading,
    isSuccess,
   
  } = useQuery({
    queryKey: ["placementData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("placement", searchKey, debouncedSearchValue),
   
  });

 useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        setTotalCount(fetchedData.data.total_count);
      } else {
        setFilteredData([]);
      }

      if (fetchedData?.data?.duplicate_placements && fetchedData.data?.duplicate_placements.length > 0) {
        setDuplicateData(fetchedData.data?.duplicate_placements);
      } else {
        setDuplicateData([]);
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

  if (isLoading) {
    return <Loader />;
  }


  return (
    <>
   
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Placements</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
        <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "Scheme Name", value: "vsSchemeName" },
                { label: "Scheme Code", value: "vsSchemeCode" },
                { label: "Scheme Type", value: "vsSchemeType" },  
                { label: "Fund Name", value: "vsFundName" },
                { label: "Sanction Date (yyyy/mm/dd)", value: "dtSanctionDate" }
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
              templateType={10}
              templateTitle="Placement Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="placement"
              Icon={UploadCloud}
            
            />
            <ModalOpenButton
              modalType={9}
              modalTitle="Add Placement"
              bulkName="Placement"
              Icon={Add}
            
            />
          </div>
        </div>
        <div className="py-2 text-lg text-green-600">Total Count: {totalCount}</div>
      </div>

      <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
      <div className="bg-yellow-100 mt-8 text-red-700 text-sm  flex items-center justify-center p-4 rounded-sm w-full  mx-auto">
        <span className="text-red-500 text-2xl mr-2">⚠️</span>
        Duplicate records are checked using 'Candidate Name/ID' across multiple logins. These field is the minimum required to identify duplicates.
      </div>

      <div className="pt-10">
     
        <p className="text-2xl font-bold mb-4">Duplicate Entries of Placements</p>
        <CentralizedTable columns={duplicateColumns} data={duplicateData} pageSize={5} />
      </div>
    </>
  );
};

export default Placement;
