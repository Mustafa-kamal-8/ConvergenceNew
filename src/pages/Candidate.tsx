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

const Candidate: React.FC = () => {
  const navigate = useNavigate();

  const columns = useMemo(() => candidateColumns(navigate), [navigate]);

  const [searchKey, setSearchKey] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
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
      [name]: checked, // Update selectedDuplicates with the name of the checkbox as the key
    }));
  };

  const duplicateQuery = Object.keys(selectedDuplicates)
    .filter((key) => selectedDuplicates[key as keyof typeof selectedDuplicates])
    .map((key) => key as string); // Declare duplicateQuery here

  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const duplicateTablecolumns = useMemo(
    () => CrossCandidateColumns(navigate, duplicateQuery),
    [navigate, duplicateQuery]
  );


  const {
    data: fetchedData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [
      "candidateData",
      searchKey,
      debouncedSearchValue,
      ...duplicateQuery,
    ],
    queryFn: () =>
      getTableData(
        "candidate",
        searchKey,
        debouncedSearchValue,
        duplicateQuery
      ),
  });

  useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        setTotalCount(fetchedData.data.total_count);
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
      <div className="">
        <p className="text-2xl font-bold mb-4">Unique Candidates</p>
        <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
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
        <div className="mb-4 flex justify-start">
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
        <CentralizedTable
          columns={duplicateTablecolumns}
          data={fetchedData?.data?.duplicate_candidate}
          pageSize={5}
        />
      </div>
    </>
  );
};

export default Candidate;
