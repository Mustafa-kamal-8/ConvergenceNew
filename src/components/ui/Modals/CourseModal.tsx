import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { courseSchema } from "../../../utils/validation";
import Button from "../../ui/SubmitButton";
import Label from "../Label";
import Input from "../Input";
import { CourseFormData } from "../../../utils/formTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { submitCourseForm } from "../../../services/state/api/FormApi";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown";
import { getMasterData } from "../../../services/state/api/masterApi";

const CourseModal: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<CourseFormData>({
    resolver: joiResolver(courseSchema),
  });

  const { data: masterData } = useQuery({
    queryKey: ["masterData", "sector"],
    queryFn: () => getMasterData("sector"),
  });

  useEffect(() => {
    if (masterData) {
      console.log("Fetched master data:", masterData);
    }
  }, [masterData]);

  const mutation = useMutation({
    mutationFn: submitCourseForm,
    onSuccess: (data) => {
      toast.success("Course submitted successfully!");
      console.log("Course submitted successfully", data);
    },
    onError: (error) => {
      toast.error("Error while submmiting courses");
      console.error("Error while submitting the form", error);
    },
  });

  const onSubmit: SubmitHandler<CourseFormData> = (data: CourseFormData) => {
    mutation.mutate(data);
  };

  const sectorOptions =
    masterData?.data?.result?.sectors?.map(
      (sector: { sectorID: number; sectorName: string }) => ({
        label: sector.sectorName,
        value: sector.sectorID,
      })
    ) || [];

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Sector Name */}
        <div className="col-span-1">
          <Label text="Sector Name" />
          <Controller
            name="fklSectorId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={sectorOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value);
                  setValue("fklSectorId", selectedOption.value.toString());
                }}
                className={errors.fklSectorId ? "border-red-500" : ""}
                placeholder="-- Select Sector --"
              />
            )}
          />
          {errors.fklSectorId && (
            <p className="text-red-500">{errors.fklSectorId.message}</p>
          )}
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Label text="Job Role Name" />
          <Controller
            name="vsCourseName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsCourseName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsCourseName && (
            <p className="text-red-500">{errors.vsCourseName.message}</p>
          )}
        </div>
        {/* QPNOS Code */}
        <div className="col-span-1 sm:col-span-1">
          <Label text="QPNOS Code" />
          <Controller
            name="vsCourseCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsCourseCode ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsCourseCode && (
            <p className="text-red-500">{errors.vsCourseCode.message}</p>
          )}
        </div>

        {/* Total Theory and Practical Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <div>
            <Label text="Total Theory Hours" />
            <Controller
              name="iTheoryDurationInHours"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={
                    errors.iTheoryDurationInHours ? "border-red-500" : ""
                  }
                />
              )}
            />
            {errors.iTheoryDurationInHours && (
              <p className="text-red-500">
                {errors.iTheoryDurationInHours.message}
              </p>
            )}
          </div>
          <div>
            <Label text="Total Practical Hours" />
            <Controller
              name="iPracticalDurationInHours"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={
                    errors.iPracticalDurationInHours ? "border-red-500" : ""
                  }
                />
              )}
            />
            {errors.iPracticalDurationInHours && (
              <p className="text-red-500">
                {errors.iPracticalDurationInHours.message}
              </p>
            )}
          </div>
        </div>

        {/* Date Valid From and Date Valid Upto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <div>
            <Label text="Date Valid From" />
            <Controller
              name="dtFromDate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  className={errors.dtFromDate ? "border-red-500" : ""}
                />
              )}
            />
            {errors.dtFromDate && (
              <p className="text-red-500">{errors.dtFromDate.message}</p>
            )}
          </div>
          <div>
            <Label text="Date Valid Upto" />
            <Controller
              name="dtToDate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  className={errors.dtToDate ? "border-red-500" : ""}
                />
              )}
            />
            {errors.dtToDate && (
              <p className="text-red-500">{errors.dtToDate.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end bg-gray-100 p-4 rounded-xl">
          <Button
            text="Submit"
            loadingText="Submitting..."
            loading={mutation.isPending}
            disabled={false}
          />
        </div>
      </form>
    </div>
  );
};

export default CourseModal;
