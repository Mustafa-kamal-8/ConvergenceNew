import React from "react";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Input from "../Input";

const CourseModal = () => {
  return (
    <>
      <div className="">
        {/* Content */}
        <div>
          <div className="grid gap-4 grid-cols-2 py-4 px-8">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <Label text="Sector Name" />
                <Input type="text" />
              </div>
            </div>
              <div>
                <Label text="QPNOS Code" />
                <Input type="text" />
              </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <Label text="Job Role Name" />
                <Input type="text" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label text="Total Theory Hours" />
                <Input type="text" />
              </div>
              <div>
                <Label text="Total Practical Hours" />
                <Input type="text" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label text="Date Valid From" />
                <Input type="text" />
              </div>
              <div>
                <Label text="Date Valid Upto" />
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

export default CourseModal;
