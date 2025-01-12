import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CentralizedTable from "../components/CentralizedTable";
import { schemeColumns } from "../utils/tableColumns";
import { getTableData } from "../services/state/api/tableDataApi";
import Dropdown from "../components/ui/Dropdown";
import SearchInputBox from "../components/ui/SearchInputBox";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import { DownloadCloud, UploadCloud } from "lucide-react";
import { Add } from "@mui/icons-material";
import TemplateDownloadButton from "../components/ui/TemplateDownloadButton";
import CustomModal from "../components/ui/CustomModal";
import Loader from "../components/ui/Loader";

const Scheme: React.FC = () => {
  const navigate = useNavigate();


  const columns = useMemo(() => schemeColumns(navigate), [navigate]);

  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | number>("All");

  const [filteredData, setFilteredData] = useState([]);

  const { data: fetchedData, isLoading, isSuccess } = useQuery({
    queryKey: ["schemeData", "scheme"],
    queryFn: () => getTableData("scheme"),
  });

  useEffect(() => {
    if (isSuccess && fetchedData?.data?.data) {
      setFilteredData(fetchedData.data.data);
    }
  }, [fetchedData, isSuccess]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filtered = fetchedData?.data?.data?.filter((item: any) =>
      item.vsSchemeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered || []);
  };

  const handleDropdownSelect = (option: string | number ) => {
    setSelectedOption(option);
    const filtered = fetchedData?.data?.data?.filter(
      (item: any) => option === "All" || item.vsSchemeType === option
    );
    setFilteredData(filtered || []);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div>
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
      <CentralizedTable columns={columns} data={filteredData} pageSize={5} />
    </>
  );
};

export default Scheme;
