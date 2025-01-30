import React, {  useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../ui/SubmitButton";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import DatePicker from "react-datepicker";
import { joiResolver } from "@hookform/resolvers/joi";
import { targetSchema } from "../../../utils/validation";
import { targetFormData } from "../../../utils/formTypes";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { getSchemeById } from "../../../services/state/api/masterApi";
import { toast } from "react-toastify";
import { submitTargetForm } from "../../../services/state/api/FormApi";
import useModalStore from "../../../services/state/useModelStore";



const TargetModal: React.FC= () => {

const {closeModal} = useModalStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<targetFormData>({
    resolver: joiResolver(targetSchema),
  });

  const [dateOfSanction, setDateOfSanction] = useState<Date | null>(null);
  const [isSchemeCodeDisabled, setIsSchemeCodeDisabled] = useState(false);
  const [isSanctionOrderNoDisabled, setIsSanctionOrderNoDisabled] = useState(false);
  const [isDateOfSanctionDisabled, setIsDateOfSanctionDisabled] = useState(false);

  // Trigger mutation when 'id' changes
  const mutation = useMutation({
    mutationFn: (id: string) => getSchemeById(id),
    onSuccess: (data) => {
      console.log("Fetched scheme data:", data);

      // Set the fetched values to form fields
      if (data?.data?.[0]?.vsSchemeCode) {
        setValue("vsSchemeCode", data.data[0].vsSchemeCode);
      }
      if (data?.data?.[0]?.sanctionOrderNo) {
        setValue("sanctionOrderNo", data.data[0].sanctionOrderNo);
      }
      if (data?.data?.[0]?.dtSanctionDate) {
        const sanctionDate = new Date(data.data[0].dtSanctionDate);
        setDateOfSanction(sanctionDate);
        setValue("dtSanctionDate", sanctionDate.toISOString().split("T")[0]); // Format without timezone
      }

      // Disable the fields after data is fetched
      setIsSchemeCodeDisabled(true);
      setIsSanctionOrderNoDisabled(true);
      setIsDateOfSanctionDisabled(true);

      // Clear validation errors
      clearErrors("vsSchemeCode");
      clearErrors("sanctionOrderNo");
      clearErrors("dtSanctionDate");
    },
    onError: (error) => {
      console.error("Error fetching scheme data:", error);
    },
  });



  const submitMutation = useMutation({
    mutationFn: (data: targetFormData) => submitTargetForm({ ...data }), // Pass id as fklSchemeId
    onSuccess: (response) => {
    
      // Check if the success response contains a message
      const successMessage = response?.message || "Target submitted successfully!";
      closeModal()
      toast.success(successMessage);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      // Extract the error message from the response
      const errorMessage = error?.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    },
  });
  
  
  
  const onSubmit: SubmitHandler<targetFormData> = (data:targetFormData) => {
     submitMutation.mutate(data);
   };

  const handleDateChange = (date: Date | null) => {
    setDateOfSanction(date);
    setValue("dtSanctionDate", date ? date.toISOString().split("T")[0] : "");
  };

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        <div className="grid grid-cols-2 gap-2">
          {/* Scheme Code */}
          <div>
            <Label text="Scheme Code" />
            <Controller
              name="vsSchemeCode"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.vsSchemeCode ? "border-red-500" : ""}
                  disabled={isSchemeCodeDisabled} // Disable the field once data is fetched
                />
              )}
            />
            {errors.vsSchemeCode && (
              <p className="text-red-500 text-sm">{errors.vsSchemeCode.message}</p>
            )}
          </div>

          {/* Sanction Order Number */}
          <div>
            <Label text="Sanction Order Number" />
            <Controller
              name="sanctionOrderNo"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className={errors.sanctionOrderNo ? "border-red-500" : ""}
                  disabled={isSanctionOrderNoDisabled} // Disable the field once data is fetched
                />
              )}
            />
            {errors.sanctionOrderNo && (
              <p className="text-red-500 text-sm">{errors.sanctionOrderNo.message}</p>
            )}
          </div>
        </div>

        {/* Date Of Sanction */}
        <div>
          <Label text="Date Of Sanction" />
          <DatePicker
            selected={dateOfSanction}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            className={`px-4 py-3 border ${errors.dtSanctionDate ? "border-red-500" : "border-gray-300"} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full`}
            disabled={isDateOfSanctionDisabled} // Disable the field once data is fetched
          />
          {errors.dtSanctionDate && (
            <p className="text-red-500 text-xs">{errors.dtSanctionDate.message}</p>
          )}
        </div>

        {/* Total Target */}
        <div>
          <Label text="Total Target" />
          <Controller
            name="iTotalTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.iTotalTarget ? "border-red-500" : ""}
              />
            )}
          />
          {errors.iTotalTarget && (
            <p className="text-red-500 text-sm">{errors.iTotalTarget.message}</p>
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

export default TargetModal;
