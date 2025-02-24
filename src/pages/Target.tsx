import React, { useState, useEffect, useMemo } from "react";
import CentralizedTable from "../components/CentralizedTable";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import SearchInputBox from "../components/ui/SearchInputBox";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { AlertCircle, CheckCircle, DownloadCloud, Plus, UploadCloud, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTableData } from "../services/state/api/tableDataApi";
import { targetColumns } from "../utils/tableColumns";
import useDebounce from "../services/state/useDebounce";
import SearchDropdown from "../components/ui/SearchDropdown";
import Loader from "../components/ui/Loader";
import { Column } from "react-table";
import * as XLSX from "xlsx";
import { useErrorStore } from "../services/useErrorStore";

const Target: React.FC = () => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const errorMessage = useErrorStore((state) => state.errorMessage);
  const successMessage = useErrorStore((state) => state.successMessage);
  const { bulkName } = useErrorStore();
  const clearErrorMessage = useErrorStore((state) => state.clearErrorMessage);
  const clearSuccessMessage = useErrorStore((state) => state.clearSuccessMessage);


  const columns = useMemo<Column<any>[]>(() => targetColumns(navigate) as Column<any>[], [navigate]);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const {
    data: fetchedData,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["targetData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("target", searchKey, debouncedSearchValue),
  });


  useEffect(() => {
    if (isSuccess) {
      setFilteredData(fetchedData?.data?.data?.length ? fetchedData.data.data : []);
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

  const exportToExcel = () => {
    if (!filteredData || filteredData.length === 0) {
      alert("No data available to export");
      return;
    }

    const headersMap = {
      vsTargetNo: "Target No",
      vsSchemeCode: "Scheme Code",
      iTotalTarget: "Total Target",
      dtTargetDate: "Target Date",
      vsTargetType: "Target Type",
      vsDepartmentName: "Department Name",
    };

    const formattedData = filteredData.map((item) => {
      return Object.keys(headersMap).reduce<Record<string, any>>((acc, key) => {
        let value: any = item[key]; // Ensure value is of type any



        acc[headersMap[key as keyof typeof headersMap]] = value;
        return acc;
      }, {}); // Define an empty object as the initial value
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Schemes");

    XLSX.writeFile(workbook, "TargetData.xlsx");
  };


  if (isLoading) {
    return <Loader />;
  }
  return (
    <>

      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Target</p>
        {bulkName === "target" && (
          <>
            <div>
              {successMessage && (
                <div className="bg-green-100 m-7 text-green-700 text-sm flex items-center justify-between p-4 rounded-sm w-full mx-auto relative">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-700 mr-2" />
                    <p>{successMessage}</p>
                  </div>
                  <button
                    onClick={clearSuccessMessage}
                    className="absolute right-4 top-2"
                  >
                    <X className="w-5 h-5 text-green-700 cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
            <div>
              {errorMessage && (
                <div className="bg-red-100 m-7 text-red-700 text-sm flex items-center justify-between p-4 rounded-sm w-full mx-auto relative">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-700 mr-2" />
                    <p
                      style={{ color: "red" }}
                      dangerouslySetInnerHTML={{
                        __html: errorMessage.replace(/\n/g, "<br />"),
                      }}
                    ></p>
                  </div>
                  <button
                    onClick={clearErrorMessage}
                    className="absolute right-4 top-2"
                  >
                    <X className="w-5 h-5 text-red-700 cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "Scheme Code", value: "vsSchemeCode" },
                { label: "Target Order No", value: "vsTargetNo" },
                { label: "Target Date (yyyy/mm/dd)", value: "dtTargetDate" },
              ]}
              onSelect={handleDropdownSelect}
              selected={searchKey}
            />

            {searchKey && (
              <>
                <SearchInputBox
                  type={searchKey === "dtTargetDate" ? "date" : "text"} // Show calendar for date fields
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
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">Department Entries</p>
          <button
            className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center gap-2"
            onClick={exportToExcel}
          >
            <DownloadCloud size={18} />
            Download Report
          </button>
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
