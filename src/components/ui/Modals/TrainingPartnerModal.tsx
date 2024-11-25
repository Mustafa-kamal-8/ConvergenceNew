import React, { useState } from "react";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Select from "../Select";
import Input from "../Input";

const TrainingPartnerModal = () => {
  const [selectedFundingType, setSelectedFundingType] = useState("");

  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const handleFundingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFundingType(event.target.value);
  };
  return (
    <>
      <div className="">
        {/* Content */}
        <div>
          <div className="grid gap-4 grid-cols-3 py-4 px-8">
            <div className="">
              <Label text="Partner ID" />
              <Input type="text" />
            </div>
            <div className="col-span-2">
              <Label text="Name" />
              <Input type="text" />
            </div>
            <div className="col-span-2">
              <Label text="SPOC Name" />
              <Input type="text" />
            </div>
            <div className="">
              <Label text="Smart ID" />
              <Input type="text" />
            </div>
            <div className="">
              <Label text="Mobile" />
              <Input type="tel" />
            </div>
            <div className="">
              <Label text="Email" />
              <Input type="email" />
            </div>
            <div className="col-span-2">
              <Label text="Address" />
              <Input type="text" />
            </div>


            <div>
              <Label text="State" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="District" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="Block/ULB" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="Village/City" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
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

export default TrainingPartnerModal;
