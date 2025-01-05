import React from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Label from "../Label";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import { PlacementFormData } from "../../../utils/formTypes";
import { placementValidationSchema } from "../../../utils/validation";

const fundingTypes = ["Option 1", "Option 2", "Option 3"];
const placementStates = ["State 1", "State 2", "State 3"];
const placementDistricts = ["District 1", "District 2", "District 3"];

const PlacementModal: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PlacementFormData>({
    resolver: joiResolver(placementValidationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: PlacementFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
       className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Batch ID */}
        <div>
          <Label text="Batch ID" />
          <Controller
            name="batchId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={`w-full ${errors.batchId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.batchId && <p className="text-red-500">{errors.batchId.message}</p>}
        </div>

        {/* Candidate ID */}
        <div>
          <Label text="Candidate ID" />
          <Controller
            name="candidateId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={`w-full ${errors.candidateId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.candidateId && <p className="text-red-500">{errors.candidateId.message}</p>}
        </div>

        {/* Is Candidate Placed? */}
        <div>
          <Label text="Is Candidate Placed?" />
          <Controller
            name="isCandidatePlaced"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-4">
                <label>
                  <input
                    {...field}
                    type="radio"
                    value="yes"
                    checked={field.value === "yes"}
                    onChange={() => field.onChange("yes")}
                  />
                  Yes
                </label>
                <label>
                  <input
                    {...field}
                    type="radio"
                    value="no"
                    checked={field.value === "no"}
                    onChange={() => field.onChange("no")}
                  />
                  No
                </label>
              </div>
            )}
          />
          {errors.isCandidatePlaced && (
            <p className="text-red-500">{errors.isCandidatePlaced.message}</p>
          )}
        </div>

        {/* Placement Type */}
        <div>
          <Label text="Placement Type" />
          <Controller
            name="placementType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={`w-full ${errors.placementType ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.placementType && <p className="text-red-500">{errors.placementType.message}</p>}
        </div>

        {/* Employer Name */}
        <div>
          <Label text="Employer Name" />
          <Controller
            name="employerName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.employerName ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.employerName && <p className="text-red-500">{errors.employerName.message}</p>}
        </div>

        {/* Employer Contact Number */}
        <div>
          <Label text="Employer Contact Number" />
          <Controller
            name="employerContactNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.employerContactNumber ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.employerContactNumber && (
            <p className="text-red-500">{errors.employerContactNumber.message}</p>
          )}
        </div>

        {/* Placement State */}
        <div>
          <Label text="Placement State" />
          <Controller
            name="placementState"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={placementStates}
                placeholder="-- Select --"
                className={`w-full ${errors.placementState ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.placementState && (
            <p className="text-red-500">{errors.placementState.message}</p>
          )}
        </div>

        {/* Placement District */}
        <div>
          <Label text="Placement District" />
          <Controller
            name="placementDistrict"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={placementDistricts}
                placeholder="-- Select --"
                className={`w-full ${errors.placementDistrict ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.placementDistrict && (
            <p className="text-red-500">{errors.placementDistrict.message}</p>
          )}
        </div>

        {/* Monthly Salary */}
        <div>
          <Label text="Monthly Salary" />
          <Controller
            name="monthlySalary"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.monthlySalary ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.monthlySalary && (
            <p className="text-red-500">{errors.monthlySalary.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default PlacementModal;
