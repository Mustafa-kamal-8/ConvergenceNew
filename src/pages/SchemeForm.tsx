import React, { useState } from "react";
import CentralizedTable from "../components/CentralizedTable";
import { candidateColumns } from "../utils/tableColumns";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import CustomModal from "../components/ui/CustomModel";
import SearchInputBox from "../components/ui/SearchInputBox";
import Dropdown from "../components/ui/Dropdown";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  dateJoined: string;
  role: string;
  department: string;
  gender: string;
  dob: string;
}

const Scheme: React.FC = () => {
  const [data, setData] = useState<Candidate[]>([
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
      status: "Active",
      dateJoined: "2020-01-01",
      role: "Manager",
      department: "HR",
      gender: "Female",
      dob: "1990-05-12",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "234-567-8901",
      address: "456 Elm St",
      status: "Inactive",
      dateJoined: "2019-03-15",
      role: "Developer",
      department: "IT",
      gender: "Male",
      dob: "1988-07-19",
    },
    {
      id: "3",
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "345-678-9012",
      address: "789 Oak St",
      status: "Active",
      dateJoined: "2021-02-20",
      role: "Designer",
      department: "Marketing",
      gender: "Male",
      dob: "1992-11-30",
    },
    {
      id: "4",
      name: "Diana Prince",
      email: "diana@example.com",
      phone: "456-789-0123",
      address: "123 Maple St",
      status: "Active",
      dateJoined: "2018-08-25",
      role: "Analyst",
      department: "Finance",
      gender: "Female",
      dob: "1995-03-01",
    },
    {
      id: "5",
      name: "Ethan Hunt",
      email: "ethan@example.com",
      phone: "567-890-1234",
      address: "321 Pine St",
      status: "Inactive",
      dateJoined: "2017-06-12",
      role: "Manager",
      department: "Operations",
      gender: "Male",
      dob: "1985-12-11",
    },
    // more candidates...
  ]);

  const [dropdownOptions] = useState<string[]>(["All", "Active", "Inactive"]);
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");

  // Handle search logic
  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filteredData = data.filter(
      (candidate) =>
        (selectedOption === "All" || candidate.status === selectedOption) &&
        candidate.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    const filteredData = data.filter(
      (candidate) =>
        (option === "All" || candidate.status === option) &&
        candidate.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
        <CustomModal />
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg">
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

          <ModalOpenButton modalType="scheme" />
        </div>

        <CentralizedTable columns={candidateColumns} data={data} pageSize={5} />
      </div>
    </>
  );
};

export default Scheme;
