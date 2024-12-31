import React, { useState } from "react";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Select from "../Select";
import Input from "../Input";


type TrainingCenterModelProps = {
  id: string | null; 
};

const TrainingCenterModel: React.FC<TrainingCenterModelProps> = ({ id }) => {

  const [selectedFundingType, setSelectedFundingType] = useState("");

  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const handleFundingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFundingType(event.target.value);
  };
  return (
    <>
      {/* <div>
        {id ? (
          <p>Training Center ID: {id}</p>
        ) : (
          <p>No Training Center ID provided.</p>
        )}
      </div> */}
  
      <div className="">
        {/* Content */}
        <div>
          {/* First Row */}
          <div className="grid gap-4 grid-cols-4 py-4 px-8">
            <div>
              <Label text="TP ID" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
            <div>
              <Label text="Partner Code" />
              <Input type="text" />
            </div>
            <div>
              <Label text="Center Name" />
              <Input type="text" />
            </div>
            <div>
              <Label text="Smart ID" />
              <Input type="text" />
            </div>
          </div>
  
          {/* Second Row */}
          <div className="grid gap-4 grid-cols-4 py-4 px-8">
            <div>
              <Label text="Center Id" />
              <Input type="text" />
            </div>
            <div>
              <Label text="SPOC Name" />
              <Input type="text" />
            </div>
            <div>
              <Label text="SPOC Mobile" />
              <Input type="text" />
            </div>
            <div>
              <Label text="SPOC Email" />
              <Input type="email" />
            </div>
          </div>
  
          {/* Third Row */}
          <div className="grid gap-4 grid-cols-4 py-4 px-8">
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
          </div>
  
          {/* Fourth Row */}
          <div className="grid gap-4 grid-cols-4 py-4 px-8">
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
            <div>
              <Label text="Constituency" />
              <Select
                options={fundingTypes}
                onChange={handleFundingTypeChange}
                placeholder="-- Select --"
              />
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl">
            <Button text="Submit" />
          </div>
        </div>
      </div>
    </>
  );
  
};

export default TrainingCenterModel;
