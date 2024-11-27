import React from 'react'
import Input from '../Input'
import Label from '../Label'
import Dropdown from '../Dropdown'
import Select from '../Select'
import Button from '../SubmitButton'

const AssessorsModal = () => {
  return (
    <div>
      <div>
        <div className="grid gap-4 grid-cols-3 py-4 px-8">
          <div className="">
            <Label text="Assessor ID" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Assessor Name" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Email" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Mobile" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text=" Assesment Agency" />
            <Input type="text" />
          </div>
          <div className="">
            <Label text="Valid Up To" />
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

export default AssessorsModal