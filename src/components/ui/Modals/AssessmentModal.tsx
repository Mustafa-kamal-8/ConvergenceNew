import React from "react";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import Button from "../SubmitButton";

import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { assessmentValidationSchema } from "../../../utils/validation";
import { AssessmentFormData } from "../../../utils/formTypes";


const AssessmentModal: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AssessmentFormData>({
    resolver: joiResolver(assessmentValidationSchema),
    mode: "onChange", 
  });

  const onSubmit = (data: AssessmentFormData) => {
    console.log("Form submitted successfully", data);
    toast.success("Form submitted successfully!");
  };

  const resultType = ["Pass", "Fail"];

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Batch ID */}
        <div className="col-span-1">
          <Label text="Batch ID" />
          <Controller
            name="batchId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.batchId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.batchId && <p className="text-red-500">{errors.batchId.message}</p>}
        </div>
  
        {/* SDMS Batch ID */}
        <div className="col-span-1">
          <Label text="SDMS Batch ID" />
          <Controller
            name="sdmsBatchId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.sdmsBatchId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.sdmsBatchId && <p className="text-red-500">{errors.sdmsBatchId.message}</p>}
        </div>
  
        {/* Candidate ID */}
        <div className="col-span-1">
          <Label text="Candidate ID" />
          <Controller
            name="candidateId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.candidateId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.candidateId && <p className="text-red-500">{errors.candidateId.message}</p>}
        </div>
  
        {/* Assessed ID */}
        <div className="col-span-1">
          <Label text="Assessed ID" />
          <Controller
            name="assessedId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.assessedId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.assessedId && <p className="text-red-500">{errors.assessedId.message}</p>}
        </div>
  
        {/* Assessment Date */}
        <div className="col-span-1">
          <Label text="Assessment Date" />
          <Controller
            name="assessmentDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.assessmentDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.assessmentDate && <p className="text-red-500">{errors.assessmentDate.message}</p>}
        </div>
  
        {/* Agency */}
        <div className="col-span-1">
          <Label text="Agency" />
          <Controller
            name="agency"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agency ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agency && <p className="text-red-500">{errors.agency.message}</p>}
        </div>
  
        {/* Agency Mobile */}
        <div className="col-span-1">
          <Label text="Agency Mobile" />
          <Controller
            name="agencyMobile"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agencyMobile ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agencyMobile && <p className="text-red-500">{errors.agencyMobile.message}</p>}
        </div>
  
        {/* Agency Email */}
        <div className="col-span-1">
          <Label text="Agency Email" />
          <Controller
            name="agencyEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agencyEmail ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agencyEmail && <p className="text-red-500">{errors.agencyEmail.message}</p>}
        </div>
  
        {/* Result Type */}
        <div className="col-span-1">
          <Label text="Result Type" />
          <Controller
            name="result"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={resultType}
                placeholder="-- Select --"
                className="w-full"
              />
            )}
          />
          {errors.result && <p className="text-red-500">{errors.result.message}</p>}
        </div>
  
        {/* Result Date */}
        <div className="col-span-1">
          <Label text="Result Date" />
          <Controller
            name="resultDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.resultDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.resultDate && <p className="text-red-500">{errors.resultDate.message}</p>}
        </div>
  
        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
  
};

export default AssessmentModal;
