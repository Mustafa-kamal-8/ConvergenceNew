import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "../Input";
import Label from "../Label";
import Button from "../SubmitButton";
import { toast } from "react-toastify";
import { assessorSchema } from "../../../utils/validation"; 
import { AssessorFormData } from "../../../utils/formTypes";
import { submitAssessorForm } from "../../../services/state/api/FormApi";
import { useMutation } from "@tanstack/react-query";

const AssessorsModal: React.FC = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AssessorFormData>({
    resolver: joiResolver(assessorSchema),
  });

 const mutation = useMutation({
    mutationFn: submitAssessorForm,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(
          data.message || "Training Partner submitted successfully!"
        );
      } else {
        toast.error(
          data.message || "An error occurred while submitting the Training Partner."
        );
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "An unknown error occurred.";
      toast.error(errorMessage); 
    },
  });
  

   const onSubmit: SubmitHandler<AssessorFormData> = (data:AssessorFormData) => {
      mutation.mutate(data);
    };
  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Assessor ID */}
        {/* <div className="col-span-1">
          <Label text="Assessor ID" />
          <Controller
            name="assosserId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.assosserId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.assosserId && (
            <p className="text-red-500">{errors.assosserId.message}</p>
          )}
        </div> */}

        {/* Assessor Name */}
        <div className="col-span-1">
          <Label text="Assessor Name" />
          <Controller
            name="vsAssosserName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsAssosserName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsAssosserName && (
            <p className="text-red-500">{errors.vsAssosserName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-1">
          <Label text="Email" />
          <Controller
            name="vsEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                className={errors.vsEmail ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsEmail && <p className="text-red-500">{errors.vsEmail.message}</p>}
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

        {/* Assessment Agency */}
        <div className="col-span-1">
          <Label text="Assessment Agency" />
          <Controller
            name="vsAssesmentAgency"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsAssesmentAgency ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsAssesmentAgency && (
            <p className="text-red-500">{errors.vsAssesmentAgency.message}</p>
          )}
        </div>

        {/* Valid Up To */}
        <div className="col-span-1">
          <Label text="Valid Up To" />
          <Controller
            name="dtValidUpTo"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.dtValidUpTo ? "border-red-500" : ""}
              />
            )}
          />
          {errors.dtValidUpTo && (
            <p className="text-red-500">{errors.dtValidUpTo.message}</p>
          )}
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

export default AssessorsModal;
