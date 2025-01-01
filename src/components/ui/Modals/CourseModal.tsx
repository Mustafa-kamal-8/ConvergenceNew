import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { courseSchema } from "../../../utils/validation";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Input from "../Input";
import { CourseFormData } from "../../../utils/formTypes";
import { useMutation } from "@tanstack/react-query";
import { submitCourseForm } from "../../../services/state/api/FormApi";
import { toast } from "react-toastify";

const CourseModal: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: joiResolver(courseSchema),
  });

 

  const mutation = useMutation({
    mutationFn: submitCourseForm,
    onSuccess: (data) => {
        toast.success("Course submitted successfully!");
      console.log("Course submitted successfully", data);
    },
    onError: (error) => {
      toast.error("Error while submmiting courses")
      console.error("Error while submitting the form", error);
    },
  })

  const onSubmit: SubmitHandler<CourseFormData> = (data:CourseFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Sector Name */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Label text="Sector Name" />
          <Controller
            name="sectorName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.sectorName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.sectorName && (
            <p className="text-red-500">{errors.sectorName.message}</p>
          )}
        </div>

        {/* QPNOS Code */}
        <div className="col-span-1 sm:col-span-1">
          <Label text="QPNOS Code" />
          <Controller
            name="qpnosCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.qpnosCode ? "border-red-500" : ""}
              />
            )}
          />
          {errors.qpnosCode && (
            <p className="text-red-500">{errors.qpnosCode.message}</p>
          )}
        </div>

        {/* Job Role Name */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Label text="Job Role Name" />
          <Controller
            name="jobRoleName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.jobRoleName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.jobRoleName && (
            <p className="text-red-500">{errors.jobRoleName.message}</p>
          )}
        </div>

        {/* Total Theory and Practical Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <div>
            <Label text="Total Theory Hours" />
            <Controller
              name="totalTheoryHours"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.totalTheoryHours ? "border-red-500" : ""}
                />
              )}
            />
            {errors.totalTheoryHours && (
              <p className="text-red-500">{errors.totalTheoryHours.message}</p>
            )}
          </div>
          <div>
            <Label text="Total Practical Hours" />
            <Controller
              name="totalPracticalHours"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.totalPracticalHours ? "border-red-500" : ""}
                />
              )}
            />
            {errors.totalPracticalHours && (
              <p className="text-red-500">{errors.totalPracticalHours.message}</p>
            )}
          </div>
        </div>

        {/* Date Valid From and Date Valid Upto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <div>
            <Label text="Date Valid From" />
            <Controller
              name="dateValidFrom"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  className={errors.dateValidFrom ? "border-red-500" : ""}
                />
              )}
            />
            {errors.dateValidFrom && (
              <p className="text-red-500">{errors.dateValidFrom.message}</p>
            )}
          </div>
          <div>
            <Label text="Date Valid Upto" />
            <Controller
              name="dateValidUpto"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  className={errors.dateValidUpto ? "border-red-500" : ""}
                />
              )}
            />
            {errors.dateValidUpto && (
              <p className="text-red-500">{errors.dateValidUpto.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end gap-4 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CourseModal;
