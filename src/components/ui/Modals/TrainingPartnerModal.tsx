import React from "react";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Input from "../Input";

const TrainingPartnerModal = () => {
  return (
    <>
      <div className="">
        {/* Content */}
        <div>
          <div className="grid gap-4 grid-cols-2 py-4 px-8">
          <div className="grid grid-cols-2 gap-2">
          <div>
            <Label text="TP ID" />
            <Input type="text" />
          </div>
          <div>
            <Label text="TP Name" />
            <Input type="text" />
          </div>
          
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
