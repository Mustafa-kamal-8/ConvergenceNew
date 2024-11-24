import React, { useState } from "react";
import Button from "../../ui/SubmitButton";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Select from "../../ui/Select";
import DatePicker from "react-datepicker";

const TargetModal = () => {
  const [scheme, setScheme] = useState<string[]>([]); // Update to an array of strings
  const [SanctionOrder, setSanctionOrder] = useState<string[]>([]); // Update to an array of strings
  const [dateOfSanction, setDateOfSanction] = useState<Date | null>(null); 

  const handleScheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setScheme((prev) => [...prev, value]); // Example logic to add to the array
  };

  const handleSanctionOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSanctionOrder((prev) => [...prev, value]); // Example logic to add to the array
  };
  const handleDateChange = (date: Date | null) => {
    setDateOfSanction(date); // Update state with the selected date
  };

  return (
    <>
      <div className="">
        {/* Content */}
        <div>
          <div className="grid gap-4 grid-cols-2 py-4 px-8">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label text="Scheme Code" />
                <Select
                  options={scheme} // Pass the array here
                  onChange={handleScheme}
                  placeholder="-- Select --"
                />
              </div>
              <div>
                <Label text="Sanction Order No" />
                <Select
                  options={SanctionOrder} // Pass the array here
                  onChange={handleSanctionOrder}
                  placeholder="-- Select --"
                />
              </div>
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
          <div>
            <Label text="Total Target" />
            <Input type="text" />
          </div>
          </div>

          <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
            <Button text="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetModal;
