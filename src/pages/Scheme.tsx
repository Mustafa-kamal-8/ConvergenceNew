import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CentralizedTable from "../components/CentralizedTable";
import { schemeColumns } from "../utils/tableColumns";
import { getTableData } from "../services/state/api/tableDataApi";
import SearchDropdown from "../components/ui/SearchDropdown";
import SearchInputBox from "../components/ui/SearchInputBox";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import { DownloadCloud, UploadCloud } from "lucide-react";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import Loader from "../components/ui/Loader";
import useDebounce from "../services/state/useDebounce";

const Scheme: React.FC = () => {
  const navigate = useNavigate();

  const columns = useMemo(() => schemeColumns(navigate), [navigate]);
  const duplicateTablecolumns = useMemo(() => [
    { Header: "Scheme Name", accessor: "vsSchemeName" },
    { Header: "Scheme Type", accessor: "vsSchemeType" },
    { Header: "Departments", accessor: "departmentNames" },
  ], []);

  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const { data: fetchedData, isLoading, isSuccess } = useQuery({
    queryKey: ["schemeData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("scheme", searchKey, debouncedSearchValue),
  });

  useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        setTotalCount(fetchedData.data.total_count);
      } else {
        setFilteredData([]);
      }

      if (fetchedData?.data?.duplicate_schemes && fetchedData.data.duplicate_schemes.length > 0) {
        setDuplicateData(fetchedData.data.duplicate_schemes);
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
      <div>
        <p className="text-2xl font-bold mb-4">List Of Schemes</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "Scheme Name", value: "vsSchemeName" },
                { label: "Scheme Code", value: "vsSchemeCode" },
                { label: "Scheme Type", value: "vsSchemeType" },
                { label: "Fund Name", value: "vsFundName" },
                { label: "Sanction Date (yyyy/mm/dd)", value: "dtSanctionDate" },
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
            <TemplateDownloadButton templateType={0} templateTitle="Scheme Template" Icon={DownloadCloud} />
            <ModalOpenButton modalType={11} modalTitle="Bulk Upload" bulkName="scheme" Icon={UploadCloud} />
            <ModalOpenButton modalType={0} modalTitle="Add scheme" bulkName="scheme" Icon={Add} />
          </div>
        </div>
        <div className="py-2 text-lg text-green-600">Total Count: {totalCount}</div>
      </div>
      <div className="pt-10">
        <p className="text-2xl font-bold mb-4">Unique Entries</p>
        <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
      </div>
      <div className="bg-yellow-100 mt-8 text-red-700 text-sm  flex items-center justify-center p-4 rounded-sm w-full  mx-auto">
        <span className="text-red-500 text-2xl mr-2">⚠️</span>
        Duplicate records are identified based on matching 'Scheme Name' and 'Scheme Code' across multiple logins, highlighting common entries found in different departments.
      </div>

      <div className="pt-10">
        <p className="text-2xl font-bold mb-4">Duplicate Entries</p>
        <CentralizedTable columns={duplicateTablecolumns} data={duplicateData} pageSize={5} />
      </div>
    </>
  );
};

export default Scheme;
