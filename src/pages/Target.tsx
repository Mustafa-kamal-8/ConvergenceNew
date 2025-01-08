import React, { useState, useEffect } from "react";
import CentralizedTable from "../components/CentralizedTable";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModal";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import { DownloadCloud, UploadCloud } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTargetData } from "../services/state/api/tableDataApi";
import { targetColumns } from "../utils/tableColumns";

interface TargetData {
  id: string;
  SchemeCode: string;
  SanctionOrderNumber: string;
  DateOfSanction: string;
  TotalTarget: string;
  Action: unknown;
}

const Target: React.FC = () => {
  const { id } = useParams<{ id:string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<TargetData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const dropdownOptions = ["All", "Option1", "Option2"];

  const { data: fetchedData, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["targetData", id],
    queryFn: () => getTargetData(id!), // Fetch data using the ID
    enabled: !!id, // Fetch only if `id` exists
  });

  // Update the data when fetchedData changes
  useEffect(() => {
    if (isSuccess && fetchedData?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = fetchedData.data.map((item: any) => ({
        id: item.pklTargetId.toString(),
        SchemeCode: item.vsSchemeCode,
        SanctionOrderNumber: item.vsSanctionNo,
        DateOfSanction: new Date(item.dtSanctionDate).toLocaleDateString(),
        TotalTarget: item.iTotalTarget.toString(),
        Action: null, // Placeholder for action buttons
      }));
      setData(formattedData);
    }
  }, [fetchedData, isSuccess]);

  // Handle search functionality
  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filteredData = fetchedData?.data.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (target: any) =>
        (selectedOption === "All" || target.vsSchemeCode === selectedOption) &&
        target.vsSchemeCode.toLowerCase().includes(value.toLowerCase())
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedData = filteredData?.map((item: any) => ({
      id: item.pklTargetId,
      SchemeCode: item.vsSchemeCode,
      SanctionOrderNumber: item.vsSanctionNo,
      DateOfSanction: new Date(item.dtSanctionDate).toLocaleDateString(),
      TotalTarget: item.iTotalTarget.toString(),
      Action: null,
    }));
    setData(formattedData || []);
  };

  // Handle dropdown selection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDropdownSelect = (option: any) => {
    setSelectedOption(option);
    handleSearch(searchValue); // Reapply search after changing dropdown
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="">
        <p className="text-2xl font-bold mb-4">List Of Target</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <Dropdown
              options={dropdownOptions}
            
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
              templateType={1}
              templateTitle="Template"
              Icon={DownloadCloud}
            />
            <ModalOpenButton
              modalType={11}
              modalTitle="Bulk Upload"
              bulkName="target"
              Icon={UploadCloud}
              id={""}
              schemeId={id}
            />
          </div>
        </div>
      </div>

      <CentralizedTable
        columns={targetColumns(navigate)}
        data={data}
        pageSize={5}
      />
    </>
  );
};

export default Target;
