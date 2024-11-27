import React, { useState } from 'react'
import Input from '../Input'
import Label from '../Label'
import Dropdown from '../Dropdown'
import Select from '../Select'
import Button from '../SubmitButton'
import DatePicker from "react-datepicker"; // Import react-datepicker

const AssessmentModal = () => {

   const [selectedFundingType, setSelectedFundingType] = useState("");
    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(new Date()); 

    const handleFundingTypeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectedFundingType(event.target.value);
    };

     const fundingTypes = ["Option 1", "Option 2", "Option 3"];
        const resultType = ["Pass", "Fail"];

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


  return (
    <div className="w-full">
      <div className="w-full">
        <div className="grid gap-4 grid-cols-1 py-4 px-8  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <div>
            <Label text="Batch ID" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="SDMS Batch ID" />
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
          <div className="">
            <Label text="Assessed ID" />
            <Input type="text" />
          </div>

          <div className="">
            <Label text="Assesment Date" />
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
            <Label text="Agency" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Agency Mobile" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Agency Email" />
            <Input type="text" />
          </div>
          <div>
            <Label text=" Accessor ID" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text=" Accessor Name" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div>
            <Label text="Result" />
            <Select
              options={resultType}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="">
            <Label text="Result Date" />
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

          <div className="lg:w-[15rem] ">
            <Label text="Certification Status" />
            <Input type="text" />
          </div>
          <div className="lg:w-[15rem]">
            <Label text="Total Marks" />
            <Input type="text" />
          </div>
          <div className="lg:w-[15rem]">
            <Label text="Obtained Marks" />
            <Input type="text" />
          </div>
          <br></br>
          <div className="lg:w-[15rem]">
            <Label text="Marksheet URL" />
            <Input type="text" />
          </div>
          <div className="lg:w-[15rem]">
            <Label text="Certificate URL" />
            <Input type="text" />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
}

export default AssessmentModal