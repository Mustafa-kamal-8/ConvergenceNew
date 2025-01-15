import React from "react";
import Label from "../Label";
import Input from "../Input";
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
  const { control, handleSubmit, formState: { errors } } = useForm<BatchFormData>({
    resolver: joiResolver(batchSchema),
  });



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
            name="batchID"
            control={control}
            render={({ field }) => <Input {...field} type="text"  className={errors.batchID ? "border-red-500" : ""}/>} 
           
          />
          {errors.batchID && <p className="text-red-500">{errors.batchID.message}</p>}
        </div>
        <div>
          <Label text="SDMS Batch Id" />
          <Controller
            name="SDMSid"
            control={control}
            render={({ field }) => <Input {...field} type="text"  className={errors.SDMSid ? "border-red-500" : ""} />}
          
          />
          {errors.SDMSid && <p className="text-red-500">{errors.SDMSid.message}</p>}
        </div>

        <div className="col-span-1">
          <Label text="Batch Start Date" />
          <Controller
            name="dtStartDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.dtStartDate ? "border-red-500" : ""}
             
              />
            )}
          />
          {errors.dtStartDate && (
            <p className="text-red-500">{errors.dtStartDate.message}</p>
          )}
        </div>
        <div className="col-span-1">
          <Label text="Batch End Date" />
          <Controller
            name="dtEndDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.dtEndDate ? "border-red-500" : ""}
              
              />
            )}
          />
          {errors.dtEndDate && (
            <p className="text-red-500">{errors.dtEndDate.message}</p>
          )}
        </div>

        <div>
          <Label text="Training Partner" />
          <Controller
            name="fklTpId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.fklTpId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklTpId && <p className="text-red-500">{errors.fklTpId.message}</p>}
        </div>

        <div>
          <Label text="Training Center" />
          <Controller
            name="fklTcId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.fklTcId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklTcId && <p className="text-red-500">{errors.fklTcId.message}</p>}
        </div>

        <div>
          <Label text="Trainer" />
          <Controller
            name="fklTrainerId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.fklTrainerId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklTrainerId && <p className="text-red-500">{errors.fklTrainerId.message}</p>}
        </div>

        <div>
          <Label text="Sector" />
          <Controller
            name="fklSectorId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.fklSectorId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklSectorId && <p className="text-red-500">{errors.fklSectorId.message}</p>}
        </div>

        <div>
          <Label text="Course" />
          <Controller
            name="fklCourseId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.fklCourseId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklCourseId && <p className="text-red-500">{errors.fklCourseId.message}</p>}
        </div>

        <div>
          <Label text="QPNOS Code" />
          <Controller
            name="QPNOS"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.QPNOS ? "border-red-500" : ""}
              />
            )}
          />
          {errors.QPNOS && <p className="text-red-500">{errors.QPNOS.message}</p>}
        </div>

        <div className="flex items-center justify-end gap-2 bg-gray-100 p-4 rounded-xl col-span-full md:col-span-3">
          <Button text="Submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default BatchModel;
