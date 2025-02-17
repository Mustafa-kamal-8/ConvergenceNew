import React, { useEffect, useMemo, useState } from "react";

import ModalOpenButton from "../components/ui/ModelOpenButton";

import { DownloadCloud, UploadCloud } from "lucide-react";

import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import Loader from "../components/ui/Loader";
import { getTableData } from "../services/state/api/tableDataApi";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../services/state/useDebounce";
import { candidateColumns, CrossCandidateColumns } from "../utils/tableColumns";
import { useNavigate } from "react-router-dom";
import SearchInputBox from "../components/ui/SearchInputBox";
import SearchDropdown from "../components/ui/SearchDropdown";
import CentralizedTable from "../components/CentralizedTable";
import * as XLSX from "xlsx";

const Candidate: React.FC = () => {
  const navigate = useNavigate();

  const columns = useMemo(() => candidateColumns(navigate), [navigate]);

  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [selectedDuplicates, setSelectedDuplicates] = useState<{
    vsCandidateName: boolean;
    vsDOB: boolean;
    vsUUID: boolean;
    vsMobile: boolean;
  }>({
    vsCandidateName: true,
    vsDOB: true,
    vsUUID: true,
    vsMobile: true,
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
  const duplicateTablecolumns = useMemo(
    () => CrossCandidateColumns(navigate, duplicateQuery),
    [navigate, duplicateQuery]
  );


  const { data: fetchedData, isLoading, isSuccess } = useQuery({
    queryKey: ["candidateData", searchKey, debouncedSearchValue, ...duplicateQuery],
    queryFn: () => getTableData("candidate", searchKey, debouncedSearchValue, duplicateQuery),
  });

  useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        setTotalCount(fetchedData.data.total_count);
      } else {
        setFilteredData([]);
      }

      if (fetchedData?.data?.duplicate_candidate && fetchedData.data.duplicate_candidate.length > 0) {
        setDuplicateData(fetchedData.data.duplicate_candidate);
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
      vsCandidateName: "Candidate Name",
      vsDOB: "Date Of Birth",
      iAge: "Age",
      pklGenderId: "Gender",
      vsMobile: "Mobile",
      pklQualificationId: "Qualification",

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

    XLSX.writeFile(workbook, "CandidateData.xlsx");
  };


  const exportToExcelDuplicate = () => {
    if (!fetchedData?.data?.duplicate_candidate || fetchedData?.data?.duplicate_candidate.length === 0) {
      alert("No data available to export");
      return;
    }


    const headersMap = {
      vsCandidateName: "Candidate Name",
      vsDOB: "Date Of Birth",
      vsUUID: "UUID",
      vsMobile: "Mobile",
      vsDepartmentName: "Department Name",

    };


    const formattedData = fetchedData?.data?.duplicate_candidate.map((item: { [x: string]: unknown; }) => {
      return Object.keys(headersMap).reduce((acc, key) => {
        acc[headersMap[key as keyof typeof headersMap]] = item[key];
        return acc;
      }, {} as Record<string, unknown>);
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Schemes");

    XLSX.writeFile(workbook, "CandidateDuplicateData.xlsx");
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
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Candidates</p>
        <div className="bg-yellow-100 m-7 text-red-700 text-sm  flex items-center justify-start p-4 rounded-sm w-full  mx-auto">
          <span className="text-red-500 text-2xl mr-2">⚠️</span>
          Only the last four digits of the candidate's Aadhar number should be
          Insert.
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <SearchDropdown
              options={[
                { label: "All", value: "" },
                { label: "Candidate Name", value: "vsCandidateName" },
                { label: "Batch ID", value: "batchId" },
                { label: "Candidate ID", value: "candidateId" },
                { label: "Gender", value: "gender" },
                {
                  label: "Mobile Number",
                  value: "mobile",
                },
                {
                  label: "Qualification",
                  value: "qualification",
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
              templateType={8}
              templateTitle="Candidate Template"
              Icon={DownloadCloud}
            />

            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="candidate"
              Icon={UploadCloud}
            />
            <ModalOpenButton
              modalType={5}
              modalTitle="Add Candidate"
              bulkName="Candidate"
              Icon={Add}
            />
          </div>
        </div>
        <div className="py-2 text-lg text-green-600">
          Total Count: {totalCount}
        </div>
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
        Duplicate records are identified based on matching 'Candidate First
        Name', 'Date Of Birth', 'Phone No' and 'Aadhar Last 4 digit' across
        multiple logins, highlighting common entries found in different
        departments.
      </div>
      <div className="pt-10">
        <p className="text-2xl font-bold mb-4">
          Cross-Department Duplicate Candidates
        </p>
        <div className="mb-4 flex justify-between">
          <div>
            <label className="mr-6">
              <input
                type="checkbox"
                name="vsCandidateName"
                checked={selectedDuplicates.vsCandidateName}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Candidate Name
            </label>
            <label className="mr-6">
              <input
                type="checkbox"
                name="vsDOB"
                checked={selectedDuplicates.vsDOB}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              DOB
            </label>
            <label className="mr-6 ">
              <input
                type="checkbox"
                name="vsUUID"
                checked={selectedDuplicates.vsUUID}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              UUID
            </label>
            <label>
              <input
                type="checkbox"
                name="vsMobile"
                checked={selectedDuplicates.vsMobile}
                onChange={handleCheckboxChange}
                className="transform scale-150 mr-2"
              />
              Mobile
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
        <CentralizedTable
          columns={duplicateTablecolumns}
          data={duplicateData}
          pageSize={20}
        />
      </div>
    </>
  );
};

export default Candidate;
