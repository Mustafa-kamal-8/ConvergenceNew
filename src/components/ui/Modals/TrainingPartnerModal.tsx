import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Select from "../Select";
import Input from "../Input";
import { toast } from "react-toastify";
import { TrainingPartnerFormData } from "../../../utils/formTypes";
import { trainingPartnerSchema } from "../../../utils/validation";
import { useQuery } from "@tanstack/react-query";
import { getMasterData } from "../../../services/state/api/masterApi";

const TrainingPartnerModal: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TrainingPartnerFormData>({
    resolver: joiResolver(trainingPartnerSchema),
  });

  const { data: masterData } = useQuery({
    queryKey: ["masterData", "state"], 
    queryFn: () => getMasterData("state"), 
  });
  
   useEffect(() => {
     if (masterData) {
      console.log("Fetched master data:", masterData);
     }
   }, [masterData]);


  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const onSubmit: SubmitHandler<TrainingPartnerFormData> = (data) => {
    // Mock API call or mutation
    console.log("Form submitted successfully", data);
    toast.success("Training Partner details submitted successfully!");
  };

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Partner ID */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Label text="Partner ID" />
          <Controller
            name="vsTpCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsTpCode ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsTpCode && (
            <p className="text-red-500">{errors.vsTpCode.message}</p>
          )}
        </div>

        {/* Name */}
        <div className="col-span-2">
          <Label text="Name" />
          <Controller
            name="vsTpName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsTpName ? "border-red-500" : ""}
              />
            )}
          />
           {errors.vsTpName && (
            <p className="text-red-500">{errors.vsTpName.message}</p>
          )}
        </div>

        {/* SPOC Name */}
        <div className="col-span-2">
          <Label text="SPOC Name" />
          <Controller
            name="vsSpocName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsSpocName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsSpocName && (
            <p className="text-red-500">{errors.vsSpocName.message}</p>
          )}
        </div>

        {/* Smart ID */}
        <div className="col-span-1">
          <Label text="Smart ID" />
          <Controller
            name="vsSmartId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsSmartId ? "border-red-500" : ""}
              />
            )}
          />
             {errors.vsSmartId && (
            <p className="text-red-500">{errors.vsSmartId.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="col-span-1">
          <Label text="Mobile" />
          <Controller
            name="iSpocContactNum"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                className={errors.iSpocContactNum ? "border-red-500" : ""}
              />
            )}
          />
           {errors.iSpocContactNum && (
            <p className="text-red-500">{errors.iSpocContactNum.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-1">
          <Label text="Email" />
          <Controller
            name="vsSpocEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                className={errors.vsSpocEmail ? "border-red-500" : ""}
              />
            )}
          />
        {errors.vsSpocEmail && (
            <p className="text-red-500">{errors.vsSpocEmail.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="col-span-2">
          <Label text="Address" />
          <Controller
            name="vsAddress"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsAddress ? "border-red-500" : ""}
              />
            )}
          />
            {errors.vsAddress && (
            <p className="text-red-500">{errors.vsAddress.message}</p>
          )}
        </div>

        {/* State */}
        <div className="col-span-1">
          <Label text="State" />
          <Controller
            name="vsState"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select State --"
                className={errors.vsState ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsState && (
            <p className="text-red-500">{errors.vsState.message}</p>
          )}
        </div>

        {/* District */}
        <div className="col-span-1">
          <Label text="District" />
          <Controller
            name="vsDistrict"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select District --"
                className={errors.vsDistrict ? "border-red-500" : ""}
              />
            )}
          />
        {errors.vsDistrict && (
            <p className="text-red-500">{errors.vsDistrict.message}</p>
          )}
        </div>

        {/* Block/ULB */}
        <div className="col-span-1">
          <Label text="Block/ULB" />
          <Controller
            name="vsBlock"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select Block/ULB --"
                className={errors.vsBlock ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsBlock && (
            <p className="text-red-500">{errors.vsBlock.message}</p>
          )}
        </div>

        {/* Village/City */}
        <div className="col-span-1">
          <Label text="Village/City" />
          <Controller
            name="vsVillage"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select Village/City --"
                className={errors.vsVillage ? "border-red-500" : ""}
              />
            )}
          />
         {errors.vsVillage && (
            <p className="text-red-500">{errors.vsVillage.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end gap-4 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default TrainingPartnerModal;
