import React, { useEffect, useMemo, useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { centerColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import SearchInputBox from "../components/ui/SearchInputBox";
import { DownloadCloud, Plus, UploadCloud } from "lucide-react";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getTableData } from "../services/state/api/tableDataApi";
import useDebounce from "../services/state/useDebounce";
import SearchDropdown from "../components/ui/SearchDropdown";
import Loader from "../components/ui/Loader";
import { centerDuplicateColumns } from "../utils/tableColumns";

const TrainingCenter: React.FC = () => {
  const navigate = useNavigate();
  const columns = useMemo(() => centerColumns(navigate), [navigate]);
  const duplicateColumns = useMemo(() => centerDuplicateColumns(navigate), [navigate]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchKeyLabel, setSearchKeyLabel] = useState<string>("");
  const [duplicateData, setDuplicateData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const {
    data: fetchedData,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["tcData", searchKey, debouncedSearchValue],
    queryFn: () => getTableData("TC", searchKey, debouncedSearchValue),
  });

  useEffect(() => {
    if (isSuccess) {
      if (fetchedData?.data?.data && fetchedData.data.data.length > 0) {
        setFilteredData(fetchedData.data.data);
        setTotalCount(fetchedData.data.total_count);
      } else {
        setFilteredData([]);
      }

      if (fetchedData?.data?.duplicate_tc && fetchedData.data?.duplicate_tc.length > 0) {
        setDuplicateData(fetchedData.data?.duplicate_tc);
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
        <p className="text-2xl font-bold mb-4">List Of Training Centeres</p>
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
              templateType={4}
              templateTitle="TC Template"
              Icon={DownloadCloud}
            />
            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="TC"
              Icon={UploadCloud}
            />
            <ModalOpenButton
              modalType={12}
              modalTitle="Add Centers"
              bulkName="TC"
              Icon={Plus}
            />
          </div>
        </div>
        <div className="py-2 text-lg text-green-600">Total Count: {totalCount}</div>
      </div>
      <div>
        <p className="text-2xl font-bold mb-4">List Of Training Centeres</p>
        <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
      </div>
      <div className="pt-10">
        <p className="text-2xl font-bold mb-4">Cross-Department Duplicate Training Centeres</p>
        <CentralizedTable columns={duplicateColumns} data={duplicateData} pageSize={5} />
      </div>
    </>
  );
};

export default TrainingCenter;
