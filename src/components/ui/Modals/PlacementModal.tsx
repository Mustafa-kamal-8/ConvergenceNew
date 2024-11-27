import React, { useState } from "react";
import Label from "../Label";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker
import DatePicker from "react-datepicker"; // Import react-datepicker
import "../../../custom.css";
import Dropdown from "../Dropdown";
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";

const PlacementModal = () => {

    const [selectedFundingType, setSelectedFundingType] = useState("");
    const [candidatePaa, setCandidatePaa] = useState("");

    const handleFundingTypeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectedFundingType(event.target.value);
    };

    const fundingTypes = ["Option 1", "Option 2", "Option 3"];

    // Handle change for "Candidate Paa or not?"
    const handleCandidatePaaChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setCandidatePaa(event.target.value);
    };
  return (
    <div>
      <div>
        <div className="grid gap-4 grid-cols-3 py-4 px-8">
          <div>
            <Label text="Batch ID" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Candidate ID" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="py-4 px-8">
            <Label text="Is Candidate Placed?" />
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="candidatePaa"
                  value="yes"
                  checked={candidatePaa === "yes"}
                  onChange={handleCandidatePaaChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="candidatePaa"
                  value="no"
                  checked={candidatePaa === "no"}
                  onChange={handleCandidatePaaChange}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <Label text="Placement Type" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Employer Name" />
            <Input type="text" />
          </div>
          <div>
            <Label text="Employer Contact Number" />
            <Input type="text" />
          </div>
          <div>
            <Label text="Placement State" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Placement Districts" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Monthly Salary" />
            <Input type="text" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default PlacementModal;
