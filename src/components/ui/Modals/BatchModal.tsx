import React, { useEffect, useState } from "react";
import Label from "../Label";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { BatchFormData } from "../../../utils/formTypes"; 
import { batchSchema } from "../../../utils/validation"; 
import Select from "../../ui/Select";
import Button from "../../ui/SubmitButton";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourses, getMasterData, getTcByTp } from "../../../services/state/api/masterApi";
import Dropdown from "../Dropdown";
import { submitBatchForm } from "../../../services/state/api/FormApi";
import useModalStore from "../../../services/state/useModelStore";

const BatchModel : React.FC = () => {

  const {closeModal} = useModalStore()

 const [fklTpId, setTpId] = useState<number | null>(null);

 
 const [fklSectorId, setSectorId] = useState<number | null>(null);

  const { control, handleSubmit, setValue,formState: { errors } } = useForm<BatchFormData>({
    resolver: joiResolver(batchSchema),
  });



  const fundingTypes = ["Option 1", "Option 2", "Option 3"];

  const { data: masterData } = useQuery({
    queryKey: ["masterData", "tp"], 
    queryFn: () => getMasterData("tp"), 
  });
  
   useEffect(() => {
     if (masterData) {
      console.log("Fetched master data:", masterData);
     }
   }, [masterData]);

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

       useEffect(() => {
          if (tcData) {
            console.log("Fetched master data:", tcData);
          }
        }, [tcData]);

        const tcOptions =
        tcData?.data?.result?.tc?.map(
          (tc: { pklTcId: number; vsTcName: string }) => ({
            label: tc.vsTcName,
            value: tc.pklTcId,
          })
        ) || [];

        const { data: trainerData } = useQuery({
          queryKey: ["masterData", "trainner"], 
          queryFn: () => getMasterData("trainner"), 
        });
        
         useEffect(() => {
           if (trainerData) {
            console.log("Fetched master data:", trainerData);
           }
         }, [trainerData]);
      
         const trainerOptions =
         trainerData?.data?.result?.trainner?.map(
          (tp: { pklConvTrainerId: number; vsTrainerName: string }) => ({
            label: tp.vsTrainerName,
            value: tp.pklConvTrainerId,
          })
        ) || [];

        const { data: sectorData } = useQuery({
          queryKey: ["masterData", "sector"], 
          queryFn: () => getMasterData("sector"), 
        });
        
         useEffect(() => {
           if (sectorData) {
            console.log("Fetched master data:", sectorData);
           }
         }, [sectorData]);

         const sectorOptions =
         sectorData?.data?.result?.sectors?.map(
          (tp: { sectorID: number; sectorName: string }) => ({
            label: tp.sectorName,
            value: tp.sectorID,
          })
        ) || [];


        const { data: courseData } = useQuery({
          queryKey: ["getCourse", "tc", fklTpId,fklSectorId],
          queryFn: () => getCourses(fklTpId,"course",fklSectorId ),
          enabled: !!fklSectorId && !!fklTpId,
        });

          const courseOptions =
          courseData?.data?.result?.course?.map(
           (tp: { pklCourseId: number; vsCourseName: string }) => ({
             label: tp.vsCourseName,
             value: tp.pklCourseId,
           })
         ) || [];

 
     const mutation = useMutation({
       mutationFn: submitBatchForm,
       onSuccess: (data) => {
         if (data?.success) {
          closeModal();
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
   
     const onSubmit = (data: BatchFormData) => {
       mutation.mutate(data);
     };



  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        <div>
          <Label text="Batch ID" />
          <Controller
            name="iBatchNumber"
            control={control}
            render={({ field }) => <Input {...field} type="text"  className={errors.iBatchNumber ? "border-red-500" : ""}/>} 
           
          />
          {errors.iBatchNumber && <p className="text-red-500">{errors.iBatchNumber.message}</p>}
        </div>
        <div>
          <Label text="SDMS Batch Id" />
          <Controller
            name="SDMSid"
            control={control}
            render={({ field }) => <Input {...field} type="text"  className={errors.SDMSid ? "border-red-500" : ""} />}
          
          />
          {errors.SDMSid && <p className="text-red-500">{errors.SDMSid.message}</p>}
        </div>

        <div className="col-span-1">
          <Label text="Batch Start Date" />
          <Controller
            name="dtStartDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.dtStartDate ? "border-red-500" : ""}
             
              />
            )}
          />
          {errors.dtStartDate && (
            <p className="text-red-500">{errors.dtStartDate.message}</p>
          )}
        </div>
        <div className="col-span-1">
          <Label text="Batch End Date" />
          <Controller
            name="dtEndDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.dtEndDate ? "border-red-500" : ""}
              
              />
            )}
          />
          {errors.dtEndDate && (
            <p className="text-red-500">{errors.dtEndDate.message}</p>
          )}
        </div>

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

        <div className="col-span-1">
          <Label text="Trainers" />
          <Controller
            name="fklTrainerId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={trainerOptions} 
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value} 
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value);  
                  setValue("fklTrainerId", selectedOption.value); 
                }}
                className={errors.fklTrainerId ? "border-red-500" : ""}
                placeholder="-- Select Trainers --"
              />
            )}
          />
          {errors.fklTrainerId && (
            <p className="text-red-500">{errors.fklTrainerId.message}</p>
          )}
        </div>

        <div className="col-span-1">
          <Label text="Sectors" />
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
                  setSectorId(selectedOption.value);  
                  setValue("fklSectorId", selectedOption.value); 
                }}
                className={errors.fklSectorId ? "border-red-500" : ""}
                placeholder="-- Select Sectors --"
              />
            )}
          />
          {errors.fklSectorId && (
            <p className="text-red-500">{errors.fklSectorId.message}</p>
          )}
        </div>
        <div className="col-span-1">
          <Label text="Courses" />
          <Controller
            name="fklCourseId"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={courseOptions} 
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value} 
                onSelect={(selectedOption) => {
                  field.onChange(selectedOption.value); 
                  setValue("fklCourseId", selectedOption.value); 
                }}
                className={errors.fklCourseId ? "border-red-500" : ""}
                placeholder="-- Select Courses --"
              />
            )}
          />
          {errors.fklCourseId && (
            <p className="text-red-500">{errors.fklCourseId.message}</p>
          )}
        </div>

        <div>
          <Label text="QPNOS Code" />
          <Controller
            name="QPNOS"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={fundingTypes}
                placeholder="-- Select --"
                className={errors.QPNOS ? "border-red-500" : ""}
              />
            )}
          />
          {errors.QPNOS && <p className="text-red-500">{errors.QPNOS.message}</p>}
        </div>

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

export default BatchModel;
