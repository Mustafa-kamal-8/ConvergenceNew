// src/components/modals/TrainerModalContent.tsx

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import Input from "../Input";
import Label from "../Label"; 
import Button from "../SubmitButton"; 
import { TrainerFormData } from "../../../utils/formTypes"; 
import { trainerSchema } from"../../../utils/validation"; 

const TrainerModalContent: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TrainerFormData>({
    resolver: joiResolver(trainerSchema),
  });

  const onSubmit: SubmitHandler<TrainerFormData> = (data) => {
    console.log("Form submitted successfully", data);
    toast.success("Training Partner details submitted successfully!");
  };

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
     
          {/* Trainer ID */}
          <div className="col-span-1">
            <Label text="Trainer ID" />
            <Controller
              name="trainerId"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.trainerId ? "border-red-500" : ""}
                />
              )}
            />
            {errors.trainerId && (
              <p className="text-red-500">{errors.trainerId.message}</p>
            )}
          </div>

          {/* Trainer Name */}
          <div className="col-span-1">
            <Label text="Trainer Name" />
            <Controller
              name="vsTrainerName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.vsTrainerName ? "border-red-500" : ""}
                />
              )}
            />
            {errors.vsTrainerName && (
              <p className="text-red-500">{errors.vsTrainerName.message}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="col-span-1">
            <Label text="Mobile" />
            <Controller
              name="vsMobile"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.vsMobile ? "border-red-500" : ""}
                />
              )}
            />
            {errors.vsMobile && <p className="text-red-500">{errors.vsMobile.message}</p>}
          </div>

          {/* Trainer Email */}
          <div className="col-span-1">
            <Label text="Trainer Email" />
            <Controller
              name="vsEmail"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.vsEmail ? "border-red-500" : ""}
                />
              )}
            />
            {errors.vsEmail && (
              <p className="text-red-500">{errors.vsEmail.message}</p>
            )}
          </div>

          {/* ID Card (PAN/Voter) */}
          <div className="col-span-1">
            <Label text="ID Card (PAN/Voter)" />
            <Controller
              name="vsPAN"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.vsPAN ? "border-red-500" : ""}
                />
              )}
            />
            {errors.vsPAN && <p className="text-red-500">{errors.vsPAN.message}</p>}
          </div>
    

        {/* Submit Button */}
        <div className="col-span-full flex justify-end gap-4 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default TrainerModalContent;
