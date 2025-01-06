import React, { useState, useEffect } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { schemeColumns as getTrainingColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import { DownloadCloud, UploadCloud } from "lucide-react";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { useNavigate } from "react-router-dom";
import { getSchemeData } from "../services/state/api/tableDataApi";
import { useQuery } from "@tanstack/react-query";

interface SchemeData {
  id: string;
  Scheme: string;
  Targets: string;
  SchemeType: string;
  SchemeCode: string;
  FundName: string;
  FundType: string;
  FundRatio: string;
  OrderNumber: string;
  SantionDate: string;
  TotalTarget: string;
  Action: unknown;
}

const Scheme: React.FC = () => {
  const navigate = useNavigate();
  const candidateColumns = React.useMemo(() => getTrainingColumns(navigate), [navigate]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const [filteredData, setFilteredData] = useState<SchemeData[]>([]);

  const { data: fetchedData, isSuccess } = useQuery({
    queryKey: ["schemeData"],
    queryFn: getSchemeData,
  });

  // Transform API response to match `SchemeData` format
  useEffect(() => {
    if (isSuccess && fetchedData?.data) {
      const transformedData = fetchedData.data.map((item: { pklSchemeId: { toString: () => unknown; }; vsSchemeName: unknown; vsSchemeType: unknown; vsSchemeCode: unknown; vsFundName: unknown; vsSchemeFundingType: unknown; vsSchemeFUndingRatio: unknown; sanctionOrderNo: unknown; dtSanctionDate: string | number | Date; }) => ({
        id: item.pklSchemeId.toString(),
        Scheme: item.vsSchemeName,
        Targets: "N/A", // Adjust based on the actual API response
        SchemeType: item.vsSchemeType,
        SchemeCode: item.vsSchemeCode,
        FundName: item.vsFundName,
        FundType: item.vsSchemeFundingType,
        FundRatio: item.vsSchemeFUndingRatio,
        OrderNumber: item.sanctionOrderNo,
        SantionDate: new Date(item.dtSanctionDate).toLocaleDateString(),
        TotalTarget: "N/A", // Adjust if available in the API response
        Action: (
          <button className="py-1 px-3 text-white bg-blue-500 rounded">
            View
          </button>
        ),
      }));
      setFilteredData(transformedData);
    }
  }, [fetchedData, isSuccess]);

  // Handle search logic
  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filtered = fetchedData.data.filter(
      (candidate: { vsSchemeName: string; }) =>
        candidate.vsSchemeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    // Update filtered data based on selected option
    const filtered = fetchedData.data.filter(
      (candidate: { vsSchemeType: string; }) =>
        option === "All" || candidate.vsSchemeType === option
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Schemes</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <Dropdown
              options={["All", "Active", "Inactive"]}
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
              templateType={0}
              templateTitle="Template"
              Icon={DownloadCloud}
            />
            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="scheme"
              Icon={UploadCloud}
              id={""}
            />
            <ModalOpenButton
              modalType={0}
              modalTitle="Add scheme"
              bulkName="scheme"
              Icon={Add}
              id={""}
            />
          </div>
        </div>
      </div>
      <CentralizedTable columns={candidateColumns} data={filteredData} pageSize={5} />
    </>
  );
};

export default Scheme;
