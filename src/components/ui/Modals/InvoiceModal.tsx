import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { invoiceValidationSchema } from "../../../utils/validation";
import { InvoiceFormData } from "../../../utils/formTypes";
import Label from "../Label";
import Input from "../Input";
import Button from "../../ui/SubmitButton";
import "../../../custom.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBatch, getMasterData, getTcByTp } from "../../../services/state/api/masterApi";
import Dropdown from "../Dropdown";
import { submitInvoiceForm } from "../../../services/state/api/FormApi";
import useModalStore from "../../../services/state/useModelStore";

const InvoiceModal: React.FC = () => {

    const [fklTpId, setTpId] = useState<number | null>(null);
    const [fklTcId, setTcId] = useState<number | null>(null); 
 
const {closeModal} = useModalStore()


  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InvoiceFormData>({
    resolver: joiResolver(invoiceValidationSchema),
    mode: "onChange",
  });

  const { data: masterData } = useQuery({
    queryKey: ["masterData", "invoiceType"],
    queryFn: () => getMasterData("invoiceType"),
  });

  const invoiceTOptions =
    masterData?.data?.result?.invoice_type?.map(
      (tp: { pklInvoiceTypeId: number; vsInvoiceType: string }) => ({
        label: tp.vsInvoiceType,
        value: tp.pklInvoiceTypeId,
      })
    ) || [];

     const { data: tpData } = useQuery({
        queryKey: ["masterData", "tp"],
        queryFn: () => getMasterData("tp"),
      });
    
      const tpOptions =
      tpData?.data?.result?.tp?.map(
          (tp: { pklTpId: number; vsTpName: string }) => ({
            label: tp.vsTpName,
            value: tp.pklTpId,
          })
        ) || [];

         const { data: tcData } = useQuery({
            queryKey: ["masterData", "tc", fklTpId],
            queryFn: () => getTcByTp(fklTpId, "tc"),
            enabled: !!fklTpId,
          });
        
          const tcOptions =
            tcData?.data?.result?.tc?.map(
              (tc: { pklTcId: number; vsTcName: string }) => ({
                label: tc.vsTcName,
                value: tc.pklTcId,
              })
            ) || [];


              const { data: batchData } = useQuery({
                queryKey: ["getBatch", "tc", fklTpId, fklTcId],
                queryFn: () => getBatch(fklTpId, "batch", fklTcId),
                enabled: !!fklTcId && !!fklTpId,
              });
            
              const batchOptions =
                batchData?.data?.result?.batch?.map(
                  (batch: { pklBatchId: number; iBatchNumber: number }) => ({
                    label: batch.iBatchNumber,
                    value: batch.pklBatchId,
                  })
                ) || [];

    const mutation = useMutation({
      mutationFn: submitInvoiceForm,
      onSuccess: (data) => {
        closeModal();
        if (data?.success) {
          toast.success(data.message || "Assesment submitted successfully!");
        } else {
          toast.error(
            data.message || "An error occurred while submitting the Trainer."
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
  
    const onSubmit: SubmitHandler<InvoiceFormData> = (
      data: InvoiceFormData
    ) => {
      mutation.mutate(data);
    };

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
       <div className="col-span-1">
          <Label text="Training Partner" />
          <Controller
            name="fklTpId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={tpOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value);
                  setTpId(selectedOption.value);
                  setValue("fklTpId", selectedOption.value);
                }}
                className={errors.fklTpId ? "border-red-500" : ""}
                placeholder="-- Select Partners --"
              />
            )}
          />
          {errors.fklTpId && (
            <p className="text-red-500">{errors.fklTpId.message}</p>
          )}
        </div>

        <div className="col-span-1">
          <Label text="Training Center" />
          <Controller
            name="fklTcId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={tcOptions}
                getOptionLabel={(option: { label: string }) => option.label}
                getOptionValue={(option: { value: number }) => option.value}
                onSelect={(selectedValue: { label: string; value: number }) => {
                  field.onChange(selectedValue.value);
                  setTcId(selectedValue.value);
                  setValue("fklTcId", selectedValue.value);
                }}
                placeholder="-- Select Centers --"
                className={errors.fklTcId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklTcId && (
            <p className="text-red-500">{errors.fklTcId.message}</p>
          )}
        </div>

        {/* Batch ID */}
        <div className="col-span-1">
          <Label text="Batch" />
          <Controller
            name="fklBatchId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={batchOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value);
                
                  setValue("fklBatchId", selectedOption.value);
                }}
                className={errors.fklBatchId ? "border-red-500" : ""}
                placeholder="-- Select Batch --"
              />
            )}
          />
          {errors.fklBatchId && (
            <p className="text-red-500">{errors.fklBatchId.message}</p>
          )}
        </div>


        {/* Invoice Type */}
        <div className="col-span-1">
          <Label text="Invoice Type" />
          <Controller
            name="fklInvoiceType"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={invoiceTOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value);
                 
                  setValue("fklInvoiceType", selectedOption.value);
                }}
                className={errors.fklInvoiceType ? "border-red-500" : ""}
                placeholder="-- Select Invoice Type--"
              />
            )}
          />
          {errors.fklInvoiceType && (
            <p className="text-red-500">{errors.fklInvoiceType.message}</p>
          )}
        </div>

        {/* Invoice Tranche */}
        <div className="col-span-1">
          <Label text="Invoice Tranche" />
          <Controller
            name="vsInvoiceTranche"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Invoice Tranche"
                className={`w-full ${errors.vsInvoiceTranche ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.vsInvoiceTranche && <p className="text-red-500">{errors.vsInvoiceTranche.message}</p>}
        </div>

        {/* Invoice Number */}
        <div className="col-span-1">
          <Label text="Invoice Number" />
          <Controller
            name="vsInvoiceNo"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Invoice Number"
                className={`w-full ${errors.vsInvoiceNo ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.vsInvoiceNo && <p className="text-red-500">{errors.vsInvoiceNo.message}</p>}
        </div>

        {/* Invoice Date */}
        <div className="col-span-1">
          <Label text="Invoice Date" />
          <Controller
            name="vsInvoiceDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.vsInvoiceDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.vsInvoiceDate && <p className="text-red-500">{errors.vsInvoiceDate.message}</p>}
        </div>

        {/* No of Candidates */}
        <div className="col-span-1">
          <Label text="No of Candidates" />
          <Controller
            name="iTotalCandidate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter number of candidates"
                className={`w-full ${errors.iTotalCandidate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.iTotalCandidate && (
            <p className="text-red-500">{errors.iTotalCandidate.message}</p>
          )}
        </div>

        {/* Rate */}
        <div className="col-span-1">
          <Label text="Rate" />
          <Controller
            name="fRate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Rate"
                className={`w-full ${errors.fRate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.fRate && <p className="text-red-500">{errors.fRate.message}</p>}
        </div>

        {/* Amount */}
        <div className="col-span-1">
          <Label text="Amount" />
          <Controller
            name="fAmount"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter Amount"
                className={`w-full ${errors.fAmount ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.fAmount && <p className="text-red-500">{errors.fAmount.message}</p>}
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

export default InvoiceModal;
