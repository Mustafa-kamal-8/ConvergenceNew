import React, { useState } from "react";
import Label from "../Label";
import Input from "../Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { BatchFormData } from "../../../utils/formTypes"; // Import form data type
import { batchSchema } from "../../../utils/validation"; // Import validation schema
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const BatchModel : React.FC = () => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<BatchFormData>({
    resolver: joiResolver(batchSchema),
  });

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());


  const handleDateChange = (dates: [Date | null, Date | null] | Date | null) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start ?? undefined);
      setEndDate(end ?? undefined);
      setValue("batchDuration", [start ?? null, end ?? null]); // Update form value
    } else {
      setStartDate(dates ?? undefined);
      setValue("batchDuration", [dates ?? null, null]); // Update form value
    }
  };

  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

 
    const mutation = useMutation({
      mutationFn: (formData: BatchFormData) => {
        return new Promise<void>((resolve, reject) => {
          try {
          
            console.log("Form Data Submitted:", formData);
            toast.success("Batch submitted successfully!");
            resolve(); 
          } catch (error) {
            toast.error("Error submitting the form!");
            reject(error); 
          }
        });
      },
      onError: () => {
        toast.error("Error submitting the form!");
      },
    });
    
  const onSubmit = (data: BatchFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
        <div>
          <Label text="Batch ID" />
          <Controller
            name="batchId"
            control={control}
            render={({ field }) => <Input {...field} type="text" />} 
          />
          {errors.batchId && <p className="text-red-500">{errors.batchId.message}</p>}
        </div>
        <div>
          <Label text="SDMS Batch Id" />
          <Controller
            name="sdmsBatchId"
            control={control}
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.sdmsBatchId && <p className="text-red-500">{errors.sdmsBatchId.message}</p>}
        </div>

        <div>
          <Label text="Batch Duration" />
          <Controller
            name="batchDuration"
            control={control}
            render={() => (
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="dd-MM-yyyy"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                showYearDropdown
                scrollableYearDropdown
                showMonthDropdown
                value={
                  startDate && endDate
                    ? `${startDate.toLocaleDateString("en-GB")} - ${endDate.toLocaleDateString("en-GB")}`
                    : ""
                }
              />
            )}
          />
          {errors.batchDuration && <p className="text-red-500">{errors.batchDuration.message}</p>}
        </div>

        <div>
          <Label text="Training Partner" />
          <Controller
            name="trainingPartner"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.trainingPartner && <p className="text-red-500">{errors.trainingPartner.message}</p>}
        </div>

        <div>
          <Label text="Training Center" />
          <Controller
            name="trainingCenter"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.trainingCenter && <p className="text-red-500">{errors.trainingCenter.message}</p>}
        </div>

        <div>
          <Label text="Trainer" />
          <Controller
            name="trainer"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.trainer && <p className="text-red-500">{errors.trainer.message}</p>}
        </div>

        <div>
          <Label text="Sector" />
          <Controller
            name="sector"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.sector && <p className="text-red-500">{errors.sector.message}</p>}
        </div>

        <div>
          <Label text="Job Role" />
          <Controller
            name="jobRole"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.jobRole && <p className="text-red-500">{errors.jobRole.message}</p>}
        </div>

        <div>
          <Label text="QPNOS Code" />
          <Controller
            name="qpnosCode"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
              />
            )}
          />
          {errors.qpnosCode && <p className="text-red-500">{errors.qpnosCode.message}</p>}
        </div>

        <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl col-span-full md:col-span-3">
          <Button text="Submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default BatchModel;
