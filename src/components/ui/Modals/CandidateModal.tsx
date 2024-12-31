import React, { useState } from "react";
import Input from "../Input";
import Label from "../Label";
// import Dropdown from "../Dropdown";
import Select from "../Select";
// import Button from "../SubmitButton";
import DatePicker from "react-datepicker";
import Button from "../../ui/SubmitButton";

const CandidateModal = () => {
  const [selectedFundingType, setSelectedFundingType] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [idDisability, setIdDisability] = useState("");
  const [next , setNext] = useState(false);

  const handleClick = () => {
    setNext((prevState) => !prevState); // Toggle state between true and false
  }

  const handleFundingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFundingType(event.target.value);
  };

  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const handleDateChange = (
    dates: [Date | null, Date | null] | Date | null
  ) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start ?? undefined);
      setEndDate(end ?? undefined);
    } else {
      setStartDate(dates ?? undefined);
    }
  };
  const handleDisabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdDisability(event.target.value);
  };

  return (
  
    <div className="w-full ">
     
      <div className="w-full">
        
    { !next && (
        <div className="grid gap-4 grid-cols-1 py-4 px-8  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
         
     
          <div>
        
            <Label text="Batch ID" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="">
            <Label text="Candidate ID" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Candidate Name" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Father Name" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Mother Name" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="DOB" />
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange // Enables range selection
              dateFormat="dd-MM-yyyy"
              placeholderText="Select date range"
              className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
              showYearDropdown
              yearDropdownItemNumber={100}
              scrollableYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
              // Custom format to show in the input field
              value={
                startDate && endDate
                  ? `${startDate.toLocaleDateString(
                      "en-GB"
                    )} - ${endDate.toLocaleDateString("en-GB")}`
                  : ""
              }
            />
          </div>
          <div className="">
            <Label text="Age" />
            <Input type="text" />
          </div>
          <div>
            <Label text="Gender" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="ID Type" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="">
            <Label text="ID Number" />
            <Input type="text" />
          </div>
          <div>
            <Label text="Religion" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Category" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="">
            <Label text="Mobile" />
            <Input type="text" />
          </div>

          <div className="">
            <Label text="Email" />
            <Input type="text" />
          </div>
          <div>
            <Label text="Education Attained" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Disability" />
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="idDisability"
                  value="Yes"
                  checked={idDisability === "Yes"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="idDisability"
                  value="No"
                  checked={idDisability === "No"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <Label text="Tea Tribe" />
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="idDisability"
                  value="Yes"
                  checked={idDisability === "Yes"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="idDisability"
                  value="No"
                  checked={idDisability === "No"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <Label text="BPL Card Holder" />
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="idDisability"
                  value="Yes"
                  checked={idDisability === "Yes"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="idDisability"
                  value="No"
                  checked={idDisability === "No"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div>
            <Label text="Minority" />
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="idDisability"
                  value="Yes"
                  checked={idDisability === "Yes"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="idDisability"
                  value="No"
                  checked={idDisability === "No"}
                  onChange={handleDisabilityChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
      
          </div>
         
        </div>
     )}
      
      
      
          
  
          {next && (
              <div className="grid gap-4 grid-cols-1 py-4 px-8  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
  <div className="your-class-name">
    <Label text="Email" />
    <Input type="text" />
  </div>
  </div>
)}

        
        
      </div>
      <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
          
            <Button
        onClick={handleClick}
        text={next ? "Previous" : "Next"} // Change button text based on state
      />
        {next && <Button text="Submit" />}
          </div>
      </div>

  );
};

export default CandidateModal;
