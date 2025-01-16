import React from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
// import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import { SchemeFormData } from "../../../utils/formTypes";
import { SchemeValidation } from "../../../utils/validation";
import { useMutation } from "@tanstack/react-query";
import { submitSchemeForm } from "../../../services/state/api/FormApi";
import { toast } from "react-toastify";

const SchemeModalContent: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SchemeFormData>({
    resolver: joiResolver(SchemeValidation),
    mode: "onChange",
  });

  // const [selectedScheme, setSelectedScheme] = useState<string>("new");

  const mutation = useMutation({
    mutationFn: submitSchemeForm,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message || "Scheme submitted successfully!");
      } else {
        toast.error(data.error || "An error occurred while submitting the scheme.");
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.error || "An unknown error occurred.";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: SchemeFormData) => {
    mutation.mutate(data);
  };

  // const schemeTypes = ["Type 1", "Type 2", "Type 3"];
  // const fundingTypes = ["Type A", "Type B", "Type C"];

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* <div className="flex items-center gap-2">
            <input
              type="radio"
              value="new"
              checked={selectedScheme === "new"}
              onChange={() => setSelectedScheme("new")}
              className="w-5 h-5"
            />
            <Label text="New Scheme" />
          </div>
          <div className="">
            <input
              type="radio"
              value="existing"
              checked={selectedScheme === "existing"}
              onChange={() => setSelectedScheme("existing")}
              className="w-5 h-5"
            />
            <Label text="Existing Scheme" />
          </div>
  
        {selectedScheme === "new" ? (
          <div className="col-span-full">
            <Label text="Scheme Name" />
            <Controller
              control={control}
              name="schemeName"
              render={({ field }) => <Input {...field} type="text" />}
            />
            {errors.schemeName && (
              <p className="text-red-500">{errors.schemeName.message}</p>
            )}
          </div>
        ) : (
          <div className="">
            <Label text="Select Scheme" />
            <Controller
              control={control}
              name="selectedSchemeType"
              render={({ field }) => (
                <Select {...field} options={schemeTypes} placeholder="-- Select --" />
              )}
            />
            {errors.selectedSchemeType && (
              <p className="text-red-500">{errors.selectedSchemeType.message}</p>
            )}
          </div>
        )} */}

        <div>
          <Label text="Scheme Name" />
          <Controller
            control={control}
            name="scheme"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.scheme && (
            <p className="text-red-500">{errors.scheme.message}</p>
          )}
        </div>

        <div>
          <Label text="Scheme Type" />
          <Controller
            control={control}
            name="schemeType"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.schemeType && (
            <p className="text-red-500">{errors.schemeType.message}</p>
          )}
        </div>
        <div>
          <Label text="Scheme Code" />
          <Controller
            control={control}
            name="schemeCode"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.schemeCode && (
            <p className="text-red-500">{errors.schemeCode.message}</p>
          )}
        </div>

        {/* Fund Name */}
        <div className="col-span-full sm:col-span-2">
          <Label text="Fund Name" />
          <Controller
            control={control}
            name="fundName"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.fundName && (
            <p className="text-red-500">{errors.fundName.message}</p>
          )}
        </div>

        {/* Funding Type and Ratio */}
        <div>
          <Label text="Funding Type" />
          <Controller
            control={control}
            name="schemeFundingType"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.schemeFundingType && (
            <p className="text-red-500">{errors.schemeFundingType.message}</p>
          )}
        </div>
        <div>
          <Label text="Scheme Funding Ratio" />
          <Controller
            control={control}
            name="schemeFundingRatio"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.schemeFundingRatio && (
            <p className="text-red-500">{errors.schemeFundingRatio.message}</p>
          )}
        </div>

        {/* Order Number */}
        <div className="col-span-full sm:col-span-2">
          <Label text="Scheme Order Number" />
          <Controller
            control={control}
            name="sanctionOrderNo"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.sanctionOrderNo && (
            <p className="text-red-500">{errors.sanctionOrderNo.message}</p>
          )}
        </div>

        {/* Date Of Sanction */}
        <div>
          <Label text="Date Of Sanction" />
          <Controller
            control={control}
            name="dateOfSanction"
            render={({ field }) => (
              <Input {...field} type="date" className="w-full" />
            )}
          />
          {errors.dateOfSanction && (
            <p className="text-red-500">{errors.dateOfSanction.message}</p>
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

export default SchemeModalContent;

