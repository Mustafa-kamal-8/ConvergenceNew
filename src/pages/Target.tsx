import React, { useState, useEffect, useMemo } from "react";
import CentralizedTable from "../components/CentralizedTable";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import SearchInputBox from "../components/ui/SearchInputBox";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { DownloadCloud, Plus, UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTableData } from "../services/state/api/tableDataApi";
import { targetColumns } from "../utils/tableColumns";
import useDebounce from "../services/state/useDebounce";
import SearchDropdown from "../components/ui/SearchDropdown";
import Loader from "../components/ui/Loader";
import { Column } from "react-table";

const Target: React.FC = () => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");

  
    const columns = useMemo<Column<any>[]>(() => targetColumns(navigate) as Column<any>[], [navigate]);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const {
    data: fetchedData,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["targetData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("target", searchKey, debouncedSearchValue), // Fetch data using the ID
  });

 
     useEffect(() => {
        if (isSuccess && fetchedData?.data?.data) {
          setFilteredData(fetchedData.data.data); 
        }
      }, [fetchedData, isSuccess]);


  // Handle dropdown selection
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
        <p className="text-2xl font-bold mb-4">List Of Target</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "Scheme Name", value: "vsSchemeName" },
                { label: "Scheme Code", value: "vsSchemeCode" },
                { label: "Scheme Type", value: "vsSchemeType" },
                { label: "Fund Name", value: "vsFundName" },
                {
                  label: "Sanction Date (yyyy/mm/dd)",
                  value: "dtSanctionDate",
                },
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
                    setFilteredData(fetchedData?.data || []);
                  }}
                >
                  Clear
                </button>
              </>
            )}
          </div>
          <div className="flex gap-1">
            <TemplateDownloadButton
              templateType={1}
              templateTitle="Target Template"
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
              Icon={Plus}
            />
          </div>
        </div>
      </div>

      <CentralizedTable
        columns={columns}
        data={filteredData}
        pageSize={5}
      />
    </>
  );
};

export default Target;
