import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker

import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import DatePicker from "react-datepicker"; // Import react-datepicker

const SchemeModalContent: React.FC = () => {
  const [selectedSchemeType, setSelectedSchemeType] = useState("");
  const [selectedFundingType, setSelectedFundingType] = useState("");
  const [selectedScheme, setSelectedScheme] = useState<string>("new");
  const [dateOfSanction, setDateOfSanction] = useState<Date | null>(null); // State to store the selected date

  const handleDateChange = (date: Date | null) => {
    setDateOfSanction(date); // Update state with the selected date
  };

  const handleSchemeTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSchemeType(event.target.value);
  };

  const handleFundingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFundingType(event.target.value);
  };

  const handleSchemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedScheme(event.target.value); // Update state when a radio button is selected
  };

  const schemeTypes = ["Type 1", "Type 2", "Type 3"];
  const fundingTypes = ["Type A", "Type B", "Type C"];

  return (
    <div className="">
      {/* Content */}
      <div>
        <div className="grid gap-4 grid-cols-2 py-4 px-8">
          <div className="col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 flex-grow">
                <input
                  type="radio"
                  name="scheme"
                  value="new"
                  checked={selectedScheme === "new"}
                  onChange={handleSchemeChange}
                  className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <Label text="New Scheme" />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <input
                  type="radio"
                  name="scheme"
                  value="existing"
                  checked={selectedScheme === "existing"}
                  onChange={handleSchemeChange}
                  className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <Label text="Existing Scheme" />
              </div>
            </div>
          </div>

          {selectedScheme === "new" ? (
            <div>
              <Label text="Scheme Name" />
              <Input type="text" />
            </div>
          ) : selectedScheme === "existing" ? (
            <div>
              <Label text="Select Scheme" />
              <Select
                options={schemeTypes}
                onChange={handleSchemeTypeChange}
                placeholder="-- Select --"
              />
            </div>
          ) : null}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label text="Scheme Type" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="Scheme Code" />
              <Input type="text" />
            </div>
          </div>

          <div>
            <Label text="Fund Name" />
            <Input type="text" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label text="Scheme Funding Type" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="Scheme Funding Ratio" />
              <Input type="text" />
            </div>
          </div>

          <div>
            <Label text="Scheme Order Number" />
            <Input type="text" />
          </div>

          <div>
            <Label text="Date Of Sanction" />
            <DatePicker
              selected={dateOfSanction}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd" // Date format you prefer
              className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default SchemeModalContent;
