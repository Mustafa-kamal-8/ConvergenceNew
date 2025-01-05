import React from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { invoiceValidationSchema } from "../../../utils/validation";
import { InvoiceFormData } from "../../../utils/formTypes";
import Label from "../Label";
import Input from "../Input";
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import "../../../custom.css";

const InvoiceModal: React.FC = () => {
  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormData>({
    resolver: joiResolver(invoiceValidationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: InvoiceFormData) => {
    console.log("Form submitted successfully", data);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Batch ID */}
        <div className="col-span-1">
          <Label text="Batch ID" />
          <Controller
            name="batchId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.batchId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.batchId && <p className="text-red-500">{errors.batchId.message}</p>}
        </div>

        {/* Invoice Type */}
        <div className="col-span-1">
          <Label text="Invoice Type" />
          <Controller
            name="invoiceType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.invoiceType ? "border-red-500" : ""}
              />
            )}
          />
          {errors.invoiceType && <p className="text-red-500">{errors.invoiceType.message}</p>}
        </div>

        {/* Invoice Tranche */}
        <div className="col-span-1">
          <Label text="Invoice Tranche" />
          <Controller
            name="invoiceTranche"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Invoice Tranche"
                className={`w-full ${errors.invoiceTranche ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.invoiceTranche && <p className="text-red-500">{errors.invoiceTranche.message}</p>}
        </div>

        {/* Invoice Number */}
        <div className="col-span-1">
          <Label text="Invoice Number" />
          <Controller
            name="invoiceNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Invoice Number"
                className={`w-full ${errors.invoiceNumber ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.invoiceNumber && <p className="text-red-500">{errors.invoiceNumber.message}</p>}
        </div>

        {/* Invoice Date */}
        <div className="col-span-1">
          <Label text="Invoice Date" />
          <Controller
            name="invoiceDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.invoiceDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.invoiceDate && <p className="text-red-500">{errors.invoiceDate.message}</p>}
        </div>

        {/* No of Candidates */}
        <div className="col-span-1">
          <Label text="No of Candidates" />
          <Controller
            name="noOfCandidates"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter number of candidates"
                className={`w-full ${errors.noOfCandidates ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.noOfCandidates && (
            <p className="text-red-500">{errors.noOfCandidates.message}</p>
          )}
        </div>

        {/* Rate */}
        <div className="col-span-1">
          <Label text="Rate" />
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Rate"
                className={`w-full ${errors.rate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.rate && <p className="text-red-500">{errors.rate.message}</p>}
        </div>

        {/* Amount */}
        <div className="col-span-1">
          <Label text="Amount" />
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Amount"
                className={`w-full ${errors.amount ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default InvoiceModal;
