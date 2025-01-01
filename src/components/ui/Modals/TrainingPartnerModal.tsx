import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Select from "../Select";
import Input from "../Input";
import { toast } from "react-toastify";
import { TrainingPartnerFormData } from "../../../utils/formTypes";
import { trainingPartnerSchema } from "../../../utils/validation";

const TrainingPartnerModal: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TrainingPartnerFormData>({
    resolver: joiResolver(trainingPartnerSchema),
  });

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
            name="partnerID"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.partnerID ? "border-red-500" : ""}
              />
            )}
          />
          {errors.partnerID && (
            <p className="text-red-500">{errors.partnerID.message}</p>
          )}
        </div>

        {/* Name */}
        <div className="col-span-2">
          <Label text="Name" />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.name ? "border-red-500" : ""}
              />
            )}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>

        {/* SPOC Name */}
        <div className="col-span-2">
          <Label text="SPOC Name" />
          <Controller
            name="spocName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.spocName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.spocName && <p className="text-red-500">SPOC Name is required</p>}
        </div>

        {/* Smart ID */}
        <div className="col-span-1">
          <Label text="Smart ID" />
          <Controller
            name="smartID"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.smartID ? "border-red-500" : ""}
              />
            )}
          />
          {errors.smartID && <p className="text-red-500">Smart ID is required</p>}
        </div>

        {/* Mobile */}
        <div className="col-span-1">
          <Label text="Mobile" />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                className={errors.mobile ? "border-red-500" : ""}
              />
            )}
          />
          {errors.mobile && <p className="text-red-500">Mobile is required</p>}
        </div>

        {/* Email */}
        <div className="col-span-1">
          <Label text="Email" />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                className={errors.email ? "border-red-500" : ""}
              />
            )}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>

        {/* Address */}
        <div className="col-span-2">
          <Label text="Address" />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.address ? "border-red-500" : ""}
              />
            )}
          />
          {errors.address && <p className="text-red-500">Address is required</p>}
        </div>

        {/* State */}
        <div className="col-span-1">
          <Label text="State" />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select State --"
                className={errors.state ? "border-red-500" : ""}
              />
            )}
          />
          {errors.state && <p className="text-red-500">State is required</p>}
        </div>

        {/* District */}
        <div className="col-span-1">
          <Label text="District" />
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select District --"
                className={errors.district ? "border-red-500" : ""}
              />
            )}
          />
          {errors.district && <p className="text-red-500">District is required</p>}
        </div>

        {/* Block/ULB */}
        <div className="col-span-1">
          <Label text="Block/ULB" />
          <Controller
            name="blockULB"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select Block/ULB --"
                className={errors.blockULB ? "border-red-500" : ""}
              />
            )}
          />
          {errors.blockULB && <p className="text-red-500">Block/ULB is required</p>}
        </div>

        {/* Village/City */}
        <div className="col-span-1">
          <Label text="Village/City" />
          <Controller
            name="villageCity"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select Village/City --"
                className={errors.villageCity ? "border-red-500" : ""}
              />
            )}
          />
          {errors.villageCity && <p className="text-red-500">Village/City is required</p>}
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
