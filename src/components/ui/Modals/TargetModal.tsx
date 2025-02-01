import React, {  useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../ui/SubmitButton";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import DatePicker from "react-datepicker";
import { joiResolver } from "@hookform/resolvers/joi";
import { targetSchema } from "../../../utils/validation";
import { targetFormData } from "../../../utils/formTypes";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMasterData} from "../../../services/state/api/masterApi";
import { toast } from "react-toastify";
import { submitTargetForm } from "../../../services/state/api/FormApi";
import useModalStore from "../../../services/state/useModelStore";
import Dropdown from "../Dropdown";



const TargetModal: React.FC= () => {

const {closeModal} = useModalStore();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    // clearErrors,
  } = useForm<targetFormData>({
    resolver: joiResolver(targetSchema),
  });



  const [selectedScheme, setSelectedScheme] = useState(null);
  
  // Fetch scheme data
  const { data: schemeData } = useQuery({
    queryKey: ["masterData", "scheme"],
    queryFn: () => getMasterData("scheme"),
  });

  // Extract dropdown options
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const schemeOptions = schemeData?.data?.result?.scheme?.map(
    (scheme: { vsSchemeName: unknown; pklSchemeId: number; vsSchemeCode: unknown; dtSanctionDate: unknown; }) => ({
      label: scheme.vsSchemeName,
      value: scheme.pklSchemeId,
      vsSchemeCode: scheme.vsSchemeCode,
      dtSanctionDate: scheme.dtSanctionDate,
    })
  ) || [];

  // Watch selected scheme from the dropdown
  const selectedSchemeId = watch("vsSchemeCode");

  // Update fields when scheme changes
  useEffect(() => {
    const scheme = schemeOptions.find((s: { value: string; }) => s.value === selectedSchemeId);
    if (scheme) {
      setSelectedScheme(scheme);
      setValue("sanctionOrderNo", scheme.vsSchemeCode); // Update Sanction Order Number
      setValue("dtSanctionDate", scheme.dtSanctionDate); // Update Date Of Sanction
    }
  }, [selectedSchemeId, schemeOptions, setValue]);


 const mutation = useMutation({
    mutationFn: (data: targetFormData) => submitTargetForm({ ...data }), 
    onSuccess: (response) => {
     
      const successMessage = response?.message || "Target submitted successfully!";
      closeModal();
      toast.success(successMessage);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    },
  });
  
  
  
  const onSubmit: SubmitHandler<targetFormData> = (data:targetFormData) => {
    mutation.mutate(data);
   };

 

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
      
          {/* Scheme Code */}
          <div className="col-span-1">
        <Label text="Scheme" />
        <Controller
          name="vsSchemeCode"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              options={schemeOptions}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              onSelect={(selectedOption) => {
                field.onChange(selectedOption.value);
                setValue("vsSchemeCode", selectedOption.value);
              }}
              className={errors.vsSchemeCode ? "border-red-500" : ""}
              placeholder="-- Select Scheme --"
            />
          )}
        />
        {errors.vsSchemeCode && (
          <p className="text-red-500">{errors.vsSchemeCode.message}</p>
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
              disabled // Make it read-only
            />
          )}
        />
        {errors.sanctionOrderNo && (
          <p className="text-red-500 text-sm">{errors.sanctionOrderNo.message}</p>
        )}
      </div>

      {/* Date Of Sanction */}
      <div>
        <Label text="Date Of Sanction" />
        <Controller
          name="dtSanctionDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={selectedScheme?.dtSanctionDate ? new Date(selectedScheme.dtSanctionDate) : null}
              dateFormat="yyyy-MM-dd"
              className={`px-4 py-3 border ${
                errors.dtSanctionDate ? "border-red-500" : "border-gray-300"
              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full`}
              disabled // Make it read-only
            />
          )}
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
