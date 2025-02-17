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
import { schemeDuplicateColumns } from "../utils/tableColumns";
import * as XLSX from "xlsx";

const Scheme: React.FC = () => {
  const navigate = useNavigate();

  const columns = useMemo(() => schemeColumns(navigate), [navigate]);


  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedDuplicates, setSelectedDuplicates] = useState<{
    vsSchemeName: boolean;
    vsFundName: boolean;
    vsSchemeFundingType: boolean;
    vsSchemeType: boolean
  }>({
    vsSchemeName: true,
    vsFundName: true,
    vsSchemeFundingType: false,
    vsSchemeType: false
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setSelectedDuplicates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };


  const duplicateQuery = Object.keys(selectedDuplicates)
    .filter((key) => selectedDuplicates[key as keyof typeof selectedDuplicates])
    .map((key) => key as string);

  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const duplicateTablecolumns = useMemo(() => schemeDuplicateColumns(navigate, duplicateQuery), [navigate, duplicateQuery]);

  const { data: fetchedData, isLoading, isSuccess } = useQuery({
    queryKey: ["schemeData", searchKey, debouncedSearchValue, ...duplicateQuery],
    queryFn: () => getTableData("scheme", searchKey, debouncedSearchValue, duplicateQuery),
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

  const exportToExcel = () => {
    if (!filteredData || filteredData.length === 0) {
      alert("No data available to export");
      return;
    }


    const headersMap = {
      vsSchemeName: "Scheme Name",
      vsSchemeType: "Scheme Type",
      vsSchemeCode: "Scheme Code",
      vsFundName: "Fund Name",
      vsSchemeFundingType: "Funding Type",
      vsSchemeFUndingRatio: "Funding Ratio",
      sanctionOrderNo: "Sanction Order No",
      dtSanctionDate: "Sanction Date",
    };


    const formattedData = filteredData.map((item) => {
      return Object.keys(headersMap).reduce((acc, key) => {
        acc[headersMap[key as keyof typeof headersMap]] = item[key];
        return acc;
      }, {} as Record<string, unknown>);
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Schemes");

    XLSX.writeFile(workbook, "SchemesData.xlsx");
  };


  const exportToExcelDuplicate = () => {
    if (!duplicateData || duplicateData.length === 0) {
      alert("No data available to export");
      return;
    }


    const headersMap = {
      vsSchemeName: "Scheme Name",
      vsSchemeType: "Scheme Type",
      vsFundName: "Fund Name",
      vsFundingType: "Funding Type",
      vsDepartmentName: "Department Name",

    };


    const formattedData = duplicateData.map((item) => {
      return Object.keys(headersMap).reduce((acc, key) => {
        acc[headersMap[key as keyof typeof headersMap]] = item[key];
        return acc;
      }, {} as Record<string, unknown>);
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Schemes");

    XLSX.writeFile(workbook, "SchemesDuplicateData.xlsx");
  };

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
                  className="p-2 px-4 bg-red-500 text-white rounded hover:bg-red-800"
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

        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">Unique Entries</p>
          <button
            className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center gap-2"
            onClick={exportToExcel}
          >
            <DownloadCloud size={18} />
            Download Report
          </button>
        </div>

        {/* Table Component */}
        <CentralizedTable columns={columns} data={filteredData} pageSize={20} />
      </div>

      <div className="bg-yellow-100 mt-8 text-red-700 text-sm  flex items-center justify-center p-4 rounded-sm w-full  mx-auto">
        <span className="text-red-500 text-2xl mr-2">⚠️</span>
        Duplicate records are identified based on matching 'Scheme Name' and 'Scheme Code' across multiple logins, highlighting common entries found in different departments.
      </div>

      <div className="pt-10">
        <p className="text-2xl font-bold mb-4">Duplicate Check By </p>
        <div className="mb-4 flex justify-between">
          <div>
            <label className="mr-6">
              <input
                type="checkbox"
                name="vsSchemeName"
                checked={selectedDuplicates.vsSchemeName}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Scheme Name
            </label>
            <label className="mr-6">
              <input
                type="checkbox"
                name="vsSchemeType"
                checked={selectedDuplicates.vsSchemeType}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Scheme Type
            </label>
            <label className="mr-6 ">
              <input
                type="checkbox"
                name="vsFundName"
                checked={selectedDuplicates.vsFundName}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Fund Name
            </label>
            <label>
              <input
                type="checkbox"
                name="vsSchemeFundingType"
                checked={selectedDuplicates.vsSchemeFundingType}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Funding Type
            </label>
          </div>
          <div>
            <button
              className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center gap-2"
              onClick={exportToExcelDuplicate}
            >
              <DownloadCloud size={18} />
              Download Report
            </button>
          </div>
        </div>
        <CentralizedTable columns={duplicateTablecolumns} data={duplicateData} pageSize={20} />
      </div>
    </>
  );
};

export default Scheme;
