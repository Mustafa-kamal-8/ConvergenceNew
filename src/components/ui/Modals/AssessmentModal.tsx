import React, { useState } from "react";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import Button from "../SubmitButton";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { assessmentValidationSchema } from "../../../utils/validation";
import { AssessmentFormData } from "../../../utils/formTypes";
import { getBatch, getMasterData, getsdmsByBatch, getTcByTp } from "../../../services/state/api/masterApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import Dropdown from "../Dropdown";
import { submitAssesmentForm } from "../../../services/state/api/FormApi";
import useModalStore from "../../../services/state/useModelStore";

const AssessmentModal: React.FC = () => {

  const {closeModal}  = useModalStore();

 const [fklTpId, setTpId] = useState<number | null>(null);
  const [fklTcId, setTcId] = useState<number | null>(null); //setBatchId
  const [pklBatchId, setBatchId] = useState<number | null>(null);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AssessmentFormData>({
    resolver: joiResolver(assessmentValidationSchema),
    mode: "onChange", 
  });

  const { data: masterData } = useQuery({
    queryKey: ["masterData", "tp"], 
    queryFn: () => getMasterData("tp"), 
  });
  
   const tpOptions =
  masterData?.data?.result?.tp?.map(
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
              queryKey: ["getBatch", "tc", fklTpId,fklTcId],
              queryFn: () => getBatch(fklTpId,"batch",fklTcId ),
              enabled: !!fklTcId && !!fklTpId,
            });

    
            const batchOptions =
            batchData?.data?.result?.batch?.map(
             (batch: { pklBatchId: number; iBatchNumber: number }) => ({
               label: batch.iBatchNumber,
               value: batch.pklBatchId,
             })
           ) || [];



           const { data: sdmsData } = useQuery({
            queryKey: ["masterData", "SDMSBatchid", pklBatchId],
            queryFn: () => getsdmsByBatch(pklBatchId, "SDMSBatchid"),
            enabled: !!pklBatchId,
          });
    
    
            const sdmsOptions =
            sdmsData?.data?.result?.SDMSBatchid?.map(
              (sdms: { pklBatchId: string; SDMSid: string }) => ({
                label: sdms.SDMSid,
                value: sdms.SDMSid,
              })
            ) || [];

  const resultType = ["Pass", "Fail"];

  const mutation = useMutation({
    mutationFn: submitAssesmentForm,
    onSuccess: (data) => {
      if (data?.success) {
        closeModal();
        toast.success(
           data.message || "Assesment submitted successfully!"
        );
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
  

   const onSubmit: SubmitHandler<AssessmentFormData> = (data:AssessmentFormData) => {
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
            name="batchId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={batchOptions} 
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value} 
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value); 
                  setBatchId(selectedOption.value); 
                  setValue("batchId", selectedOption.value); 
                }}
                className={errors.batchId ? "border-red-500" : ""}
                placeholder="-- Select Batch --"
              />
            )}
          />
          {errors.batchId && (
            <p className="text-red-500">{errors.batchId.message}</p>
          )}
        </div>
  
        {/* SDMS Batch ID */}
        <div className="col-span-1">
          <Label text="SDMS Batch ID" />
          <Controller
            name="SDMSBatchId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={sdmsOptions} 
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value} 
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value); 
                  setValue("SDMSBatchId", selectedOption.value.toString()); 
                }}
                className={errors.SDMSBatchId ? "border-red-500" : ""}
                placeholder="-- Select SDMS --"
              />
            )}
          />
          {errors.SDMSBatchId && (
            <p className="text-red-500">{errors.SDMSBatchId.message}</p>
          )}
        </div>
  
        {/* Candidate ID */}
        <div className="col-span-1">
          <Label text="Candidate ID" />
          <Controller
            name="candidateId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.candidateId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.candidateId && <p className="text-red-500">{errors.candidateId.message}</p>}
        </div>
  
        {/* Assessed ID */}
        <div className="col-span-1">
          <Label text="Assessed ID" />
          <Controller
            name="accessorId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.accessorId ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.accessorId && <p className="text-red-500">{errors.accessorId.message}</p>}
        </div>
  
        <div className="col-span-1">
          <Label text="Assessment Date" />
          <Controller
            name="dtAssessmentDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.dtAssessmentDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.dtAssessmentDate && <p className="text-red-500">{errors.dtAssessmentDate.message}</p>}
        </div>
  
{/*        
        <div className="col-span-1">
          <Label text="Agency" />
          <Controller
            name="agency"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agency ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agency && <p className="text-red-500">{errors.agency.message}</p>}
        </div>
  
        <div className="col-span-1">
          <Label text="Agency Mobile" />
          <Controller
            name="agencyMobile"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agencyMobile ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agencyMobile && <p className="text-red-500">{errors.agencyMobile.message}</p>}
        </div>
  
        <div className="col-span-1">
          <Label text="Agency Email" />
          <Controller
            name="agencyEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.agencyEmail ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.agencyEmail && <p className="text-red-500">{errors.agencyEmail.message}</p>}
        </div> */}
  
        {/* Result Type */}
        <div className="col-span-1">
          <Label text="Result Type" />
          <Controller
            name="vsResult"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={resultType}
                placeholder="-- Select --"
                className="w-full"
              />
            )}
          />
          {errors.vsResult && <p className="text-red-500">{errors.vsResult.message}</p>}
        </div>
  
        {/* Result Date */}
        <div className="col-span-1">
          <Label text="Result Date" />
          <Controller
            name="dtResultDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={`w-full ${errors.dtResultDate ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.dtResultDate && <p className="text-red-500">{errors.dtResultDate.message}</p>}
        </div>
  
        <div className="col-span-1">
          <Label text="total Marks" />
          <Controller
            name="vsTotalMarks"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={`w-full ${errors.vsTotalMarks ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.vsTotalMarks && <p className="text-red-500">{errors.vsTotalMarks.message}</p>}
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

export default AssessmentModal;
