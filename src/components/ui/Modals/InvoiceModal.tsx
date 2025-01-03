import React, { useState } from "react";
import Label from "../Label";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker
import DatePicker from "react-datepicker"; // Import react-datepicker
import "../../../custom.css";
import Dropdown from "../Dropdown";
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";

const InvoiceModal = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [selectedFundingType, setSelectedFundingType] = useState("");

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
  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const handleFundingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFundingType(event.target.value);
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
            <Label text="Invoice Type" />
            <Select
              options={fundingTypes}
              onChange={handleFundingTypeChange}
              placeholder="-- Select --"
            />
          </div>
          <div className="">
            <Label text="Invoice Tranche" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Invoice Number" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Invoice Date" />
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
            <Label text="No of Candidates" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Rate" />
            <Input type="text" />
          </div>{" "}
          <div className="">
            <Label text="Amount" />
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

export default InvoiceModal;
