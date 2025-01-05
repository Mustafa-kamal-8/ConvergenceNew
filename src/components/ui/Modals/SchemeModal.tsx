import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Select from "../../ui/Select";
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

  const [selectedScheme, setSelectedScheme] = useState<string>("new");

  const mutation = useMutation({
    mutationFn: submitSchemeForm,
    onSuccess: () => {
      toast.success("Scheme submitted successfully!");
    },
    onError: () => {
      toast.error("Error submitting scheme.");
    },
  });

  const onSubmit = (data: SchemeFormData) => {
    mutation.mutate(data);
  };

  const schemeTypes = ["Type 1", "Type 2", "Type 3"];
  const fundingTypes = ["Type A", "Type B", "Type C"];

  return (
    <div className="px-4 py-4 md:px-6 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
      >
        {/* Radio Buttons */}
    
          <div className="flex items-center gap-2">
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
  

        {/* Conditional Field: Scheme Name or Existing Scheme */}
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
        )}

        {/* Scheme Type and Code */}
        <div>
          <Label text="Scheme Type" />
          <Controller
            control={control}
            name="selectedFundingType"
            render={({ field }) => (
              <Select {...field} options={fundingTypes} placeholder="-- Select --" />
            )}
          />
          {errors.selectedFundingType && (
            <p className="text-red-500">{errors.selectedFundingType.message}</p>
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
          <Label text="Scheme Funding Type" />
          <Controller
            control={control}
            name="schemeFundingType"
            render={({ field }) => (
              <Select {...field} options={fundingTypes} placeholder="-- Select --" />
            )}
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
            name="schemeOrderNumber"
            render={({ field }) => <Input {...field} type="text" />}
          />
          {errors.schemeOrderNumber && (
            <p className="text-red-500">{errors.schemeOrderNumber.message}</p>
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
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default SchemeModalContent;







// import React, { useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import { useForm, Controller } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import DatePicker from "react-datepicker";
// import Input from "../../ui/Input";
// import Label from "../../ui/Label";
// import Select from "../../ui/Select";
// import Button from "../../ui/SubmitButton";
// import { SchemeFormData } from "../../../utils/formTypes";
// import { SchemeValidation } from "../../../utils/validation";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { getMasterData } from "../../../services/state/api/masterApi";
// import { submitSchemeForm } from "../../../services/state/api/FormApi";

// const SchemeModalContent: React.FC = () => {
//   // Initialize React Hook Form
//   const { handleSubmit, control, formState: { errors }, setValue } = useForm<SchemeFormData>({
//     resolver: joiResolver(SchemeValidation),
//   });

//   const [selectedScheme, setSelectedScheme] = useState<string>("new");

//   const mutation = useMutation({
//     mutationFn: submitSchemeForm, 
//     onSuccess: (data) => {
//       console.log("Scheme submitted successfully:", data);
//     },
//     onError: (error) => {
//       console.error("Error submitting scheme:", error);
//     },
//   });

//   const onSubmit = (data: SchemeFormData) => {
//     mutation.mutate(data);
//     console.log("data are", data);
//   };

//   // Fetch master data for options
//   const { data: masterData } = useQuery({
//     queryKey: ["masterData"],
//     queryFn: getMasterData,
//   });

//   useEffect(() => {
//     if (masterData) {
//       console.log("Fetched master data:", masterData);
//     }
//   }, [masterData]);

//   const handleSchemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedScheme(event.target.value);
//   };

//   const handleDateChange = (date: Date | null) => {
//     setValue("dateOfSanction", date); 
//   };
  
//   const schemeTypes = ["Type 1", "Type 2", "Type 3"];
//   const fundingTypes = ["Type A", "Type B", "Type C"];

//   return (
//     <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
//       <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
//         {/* Radio Buttons */}
//         <div className="col-span-full flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="scheme"
//               value="new"
//               checked={selectedScheme === "new"}
//               onChange={handleSchemeChange}
//               className="w-5 h-5 border border-gray-300 rounded-md focus:ring-indigo-400"
//             />
//             <Label text="New Scheme" />
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="scheme"
//               value="existing"
//               checked={selectedScheme === "existing"}
//               onChange={handleSchemeChange}
//               className="w-5 h-5 border border-gray-300 rounded-md focus:ring-indigo-400"
//             />
//             <Label text="Existing Scheme" />
//           </div>
//         </div>

//         {/* Conditional Fields for Scheme Type */}
//         {selectedScheme === "new" ? (
//           <div className="col-span-full">
//             <Label text="Scheme Name" />
//             <Controller
//               control={control}
//               name="schemeName"
//               render={({ field }) => <Input {...field} type="text" />}
//             />
//             {errors.schemeName && (
//               <p className="text-red-500">{errors.schemeName.message}</p>
//             )}
//           </div>
//         ) : (
//           <div className="col-span-full">
//             <Label text="Select Scheme" />
//             <Controller
//               control={control}
//               name="selectedSchemeType"
//               render={({ field }) => (
//                 <Select
//                   {...field}
//                   options={schemeTypes}
//                   placeholder="-- Select --"
//                 />
//               )}
//             />
//             {errors.selectedSchemeType && (
//               <p className="text-red-500">{errors.selectedSchemeType.message}</p>
//             )}
//           </div>
//         )}

//         {/* Scheme Type and Code */}
//         <div>
//           <Label text="Scheme Type" />
//           <Controller
//             control={control}
//             name="selectedFundingType"
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 options={fundingTypes}
//                 placeholder="-- Select --"
//               />
//             )}
//           />
//           {errors.selectedFundingType && (
//             <p className="text-red-500">{errors.selectedFundingType.message}</p>
//           )}
//         </div>
//         <div>
//           <Label text="Scheme Code" />
//           <Controller
//             control={control}
//             name="schemeCode"
//             render={({ field }) => <Input {...field} type="text" />}
//           />
//           {errors.schemeCode && (
//             <p className="text-red-500">{errors.schemeCode.message}</p>
//           )}
//         </div>

//         {/* Fund Name */}
//         <div className="col-span-full sm:col-span-2 lg:col-span-1">
//           <Label text="Fund Name" />
//           <Controller
//             control={control}
//             name="fundName"
//             render={({ field }) => <Input {...field} type="text" />}
//           />
//           {errors.fundName && (
//             <p className="text-red-500">{errors.fundName.message}</p>
//           )}
//         </div>

//         {/* Funding Type and Ratio */}
//         <div>
//           <Label text="Scheme Funding Type" />
//           <Controller
//             control={control}
//             name="schemeFundingType"
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 options={fundingTypes}
//                 placeholder="-- Select --"
//               />
//             )}
//           />
//           {errors.schemeFundingType && (
//             <p className="text-red-500">{errors.schemeFundingType.message}</p>
//           )}
//         </div>
//         <div>
//           <Label text="Scheme Funding Ratio" />
//           <Controller
//             control={control}
//             name="schemeFundingRatio"
//             render={({ field }) => <Input {...field} type="text" />}
//           />
//           {errors.schemeFundingRatio && (
//             <p className="text-red-500">{errors.schemeFundingRatio.message}</p>
//           )}
//         </div>

//         {/* Order Number */}
//         <div className="col-span-full sm:col-span-2 lg:col-span-1">
//           <Label text="Scheme Order Number" />
//           <Controller
//             control={control}
//             name="schemeOrderNumber"
//             render={({ field }) => <Input {...field} type="text" />}
//           />
//           {errors.schemeOrderNumber && (
//             <p className="text-red-500">{errors.schemeOrderNumber.message}</p>
//           )}
//         </div>

//         {/* Date Of Sanction */}
//         <div>
//           <Label text="Date Of Sanction" />
//           <Controller
//             name="dateOfSanction"
//             control={control}
//             render={({ field }) => (
//               <DatePicker
//                 selected={field.value ? new Date(field.value) : null} // Safeguard for potential null values
//                 onChange={handleDateChange}
//                 dateFormat="dd-MM-yyyy"
//                 placeholderText="dd-mm-yyyy"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-400"
//                 showYearDropdown
//                 yearDropdownItemNumber={100}
//                 scrollableYearDropdown
//                 showMonthDropdown
//               />
//             )}
//           />
//           {errors.dateOfSanction && (
//             <p className="text-red-500">{errors.dateOfSanction.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end bg-gray-100 p-4 rounded-xl">
//           <Button text="Submit" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SchemeModalContent;
