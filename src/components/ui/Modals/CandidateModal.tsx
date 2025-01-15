import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "../Input";
import Label from "../Label";
import Button from "../SubmitButton";
import { toast } from "react-toastify";
import { candidateSchema } from "../../../utils/validation";
import { candidateFormData } from "../../../utils/formTypes";

const CandidateModal: React.FC = () => {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<candidateFormData>({
    resolver: joiResolver(candidateSchema),
  });

  const onSubmit: SubmitHandler<candidateFormData> = (data) => {
    // Mock API call or mutation
    console.log("Form submitted successfully", data);
    toast.success("Candidate details submitted successfully!");
  };

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 overflow-auto max-h-[450px] max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 py-4"
      >
        {/* Basic Details */}
        <div>
          <Label text="ID" />
          <Controller
            name="candidateId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.candidateId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.candidateId && (
            <p className="text-red-500">{errors.candidateId.message}</p>
          )}
        </div>

        <div >
          <Label text="Name" />
          <Controller
            name="vsCandidateName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsCandidateName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsCandidateName && (
            <p className="text-red-500">{errors.vsCandidateName.message}</p>
          )}
        </div>

        <div>
          <Label text="Date Of Birth" />
          <Controller
            name="vsDOB"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={errors.vsDOB ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsDOB && (
            <p className="text-red-500">{errors.vsDOB.message}</p>
          )}
        </div>

        <div>
          <Label text="Age" />
          <Controller
            name="iAge"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.iAge ? "border-red-500" : ""}
              />
            )}
          />
          {errors.iAge && <p className="text-red-500">{errors.iAge.message}</p>}
        </div>

        <div>
          <Label text="Father's Name" />
          <Controller
            name="vsFatherName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsFatherName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsFatherName && (
            <p className="text-red-500">{errors.vsFatherName.message}</p>
          )}
        </div>

        <div>
          <Label text="Gender" />
          <Controller
            name="vsGender"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className={`form-select ${
                  errors.vsGender ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            )}
          />
          {errors.vsGender && (
            <p className="text-red-500">{errors.vsGender.message}</p>
          )}
        </div>

        <div>
          <Label text="ID type" />
          <Controller
            name="fklIdType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.fklIdType ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklIdType && (
            <p className="text-red-500">{errors.fklIdType.message}</p>
          )}
        </div>
        <div>
          <Label text="UUID" />
          <Controller
            name="vsUUID"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsUUID ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsUUID && (
            <p className="text-red-500">{errors.vsUUID.message}</p>
          )}
        </div>

      
        <div>
          <Label text="Religion" />
          <Controller
            name="fklReligionId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.fklReligionId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklReligionId && (
            <p className="text-red-500">{errors.fklReligionId.message}</p>
          )}
        </div>

        <div>
          <Label text="Category ID" />
          <Controller
            name="fklCategoryId"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.fklCategoryId ? "border-red-500" : ""}
              />
            )}
          />
          {errors.fklCategoryId && (
            <p className="text-red-500">{errors.fklCategoryId.message}</p>
          )}
        </div>

        <div>
          <Label text="Mobile Number" />
          <Controller
            name="vsMobile"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsMobile ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsMobile && (
            <p className="text-red-500">{errors.vsMobile.message}</p>
          )}
        </div>
        <div>
          <Label text="Email ID" />
          <Controller
            name="vsEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsEmail ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsEmail && (
            <p className="text-red-500">{errors.vsEmail.message}</p>
          )}
        </div>
        <div>
          <Label text="Education Attained" />
          <Controller
            name="vsEducationAttained"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsEducationAttained ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsEducationAttained && (
            <p className="text-red-500">{errors.vsEducationAttained.message}</p>
          )}
        </div>

        

        <div >
          <Label text="Disability" />
          <Controller
            name="bDisability"
            control={control}
            render={({ field }) => (
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="1"
                    checked={field.value === 1}
                    onChange={() => field.onChange(1)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="0"
                    checked={field.value === 0}
                    onChange={() => field.onChange(0)}
                  />
                  No
                </label>
              </div>
            )}
          />
          {errors.bDisability && (
            <p className="text-red-500">{errors.bDisability.message}</p>
          )}
        </div>

        <div>
          <Label text="Tea Tribe" />
          <Controller
            name="bTeaTribe"
            control={control}
            render={({ field }) => (
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="1"
                    checked={field.value === 1}
                    onChange={() => field.onChange(1)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="0"
                    checked={field.value === 0}
                    onChange={() => field.onChange(0)}
                  />
                  No
                </label>
              </div>
            )}
          />
          {errors.bTeaTribe && (
            <p className="text-red-500">{errors.bTeaTribe.message}</p>
          )}
        </div>

        {/* BPL Card Holder */}
        <div>
          <Label text="BPL Card Holder" />
          <Controller
            name="bBPLcardHolder"
            control={control}
            render={({ field }) => (
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="1"
                    checked={field.value === 1}
                    onChange={() => field.onChange(1)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="0"
                    checked={field.value === 0}
                    onChange={() => field.onChange(0)}
                  />
                  No
                </label>
              </div>
            )}
          />
          {errors.bBPLcardHolder && (
            <p className="text-red-500">{errors.bBPLcardHolder.message}</p>
          )}
        </div>

        {/* Minority */}
        <div>
          <Label text="Minority" />
          <Controller
            name="bMinority"
            control={control}
            render={({ field }) => (
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="1"
                    checked={field.value === 1}
                    onChange={() => field.onChange(1)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="0"
                    checked={field.value === 0}
                    onChange={() => field.onChange(0)}
                  />
                  No
                </label>
              </div>
            )}
          />
          {errors.bMinority && (
            <p className="text-red-500">{errors.bMinority.message}</p>
          )}
        </div>

        <div>
          <Label text="Present Address" />
          <Controller
            name="vsRAddress"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsRAddress ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRAddress && (
            <p className="text-red-500">{errors.vsRAddress.message}</p>
          )}
        </div>

        {/* Example: vsRDistrict */}
        <div>
          <Label text="Present District" />
          <Controller
            name="vsRDistrict"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsRDistrict ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRDistrict && (
            <p className="text-red-500">{errors.vsRDistrict.message}</p>
          )}
        </div>

        <div>
          <Label text="Present Block" />
          <Controller
            name="vsRBlock"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsRBlock ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRBlock && (
            <p className="text-red-500">{errors.vsRBlock.message}</p>
          )}
        </div>

        {/* Present ULB */}
        <div >
          <Label text="Present ULB" />
          <Controller
            name="vsRUlb"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsRUlb ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRUlb && (
            <p className="text-red-500">{errors.vsRUlb.message}</p>
          )}
        </div>

        {/* Present Village/City */}
        <div>
          <Label text="Present Village/City" />
          <Controller
            name="vsRVillageCity"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsRVillageCity ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRVillageCity && (
            <p className="text-red-500">{errors.vsRVillageCity.message}</p>
          )}
        </div>

        {/* Present Post Office */}
        <div>
          <Label text="Present Post Office" />
          <Controller
            name="vsRPostOffice"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsRPostOffice ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRPostOffice && (
            <p className="text-red-500">{errors.vsRPostOffice.message}</p>
          )}
        </div>

        {/* Present Police Station */}
        <div>
          <Label text="Present Police Station" />
          <Controller
            name="vsRPolice"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsRPolice ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRPolice && (
            <p className="text-red-500">{errors.vsRPolice.message}</p>
          )}
        </div>

        {/* Present PIN */}
        <div>
          <Label text="Present PIN" />
          <Controller
            name="vsRPIN"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsRPIN ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRPIN && (
            <p className="text-red-500">{errors.vsRPIN.message}</p>
          )}
        </div>

        {/* Present Council Constituency */}
        <div>
          <Label text="Present Council Constituency" />
          <Controller
            name="vsRCouncilContituency"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={errors.vsRCouncilContituency ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsRCouncilContituency && (
            <p className="text-red-500">
              {errors.vsRCouncilContituency.message}
            </p>
          )}
        </div>

        {/* Present Assembly Constituency */}
        <div>
          <Label text="Present Assembly Constituency" />
          <Controller
            name="vsRAssemblyContituency"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                className={
                  errors.vsRAssemblyContituency ? "border-red-500" : ""
                }
              />
            )}
          />
          {errors.vsRAssemblyContituency && (
            <p className="text-red-500">
              {errors.vsRAssemblyContituency.message}
            </p>
          )}
        </div>

        {/* Toggle for Same Address */}
        <div>
      <Label text="Is current address same as present address" />
      <Controller
        name="vsSameAddress"
        control={control}
        render={({ field }) => (
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="1"
                checked={field.value === 1}
                onChange={() => {
                  field.onChange(1);
                  setIsSameAddress(true);  // If 'Yes' is selected, set isSameAddress to true
                }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="0"
                checked={field.value === 0}
                onChange={() => {
                  field.onChange(0);
                  setIsSameAddress(false);  // If 'No' is selected, set isSameAddress to false
                }}
              />
              No
            </label>
          </div>
        )}
      />
      {errors.vsSameAddress && (
        <p className="text-red-500">{errors.vsSameAddress.message}</p>
      )}
        </div>

        {/* Conditional Present Address Fields */}
        {!isSameAddress && (
          <>
            <div className="col-span-1">
              <Label text="Permanent Address" />
              <Controller
                name="vsPAddress"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    className={errors.vsPAddress ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPAddress && (
                <p className="text-red-500">{errors.vsPAddress.message}</p>
              )}
            </div>

            {/* Add other present address fields similar to vsPAddress */}
            {/* Example: vsPDistrict */}
            <div>
              <Label text="Permanent District" />
              <Controller
                name="vsPDistrict"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    className={errors.vsPDistrict ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPDistrict && (
                <p className="text-red-500">{errors.vsPDistrict.message}</p>
              )}
            </div>
            <div>
              <Label text="Permanent Block" />
              <Controller
                name="vsPBlock"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    className={errors.vsPBlock ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPBlock && (
                <p className="text-red-500">{errors.vsPBlock.message}</p>
              )}
            </div>

            {/* Present ULB */}
            <div>
              <Label text="Permanent ULB" />
              <Controller
                name="vsPUlb"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    className={errors.vsPUlb ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPUlb && (
                <p className="text-red-500">{errors.vsPUlb.message}</p>
              )}
            </div>

            {/* Present Village/City */}
            <div>
              <Label text="Permanent Village/City" />
              <Controller
                name="vsPVillageCity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    className={errors.vsPVillageCity ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPVillageCity && (
                <p className="text-red-500">{errors.vsPVillageCity.message}</p>
              )}
            </div>

            {/* Present Post Office */}
            <div>
              <Label text="Permanent Post Office" />
              <Controller
                name="vsPPostOffice"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    className={errors.vsPPostOffice ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPPostOffice && (
                <p className="text-red-500">{errors.vsPPostOffice.message}</p>
              )}
            </div>

            {/* Present Police Station */}
            <div>
              <Label text="Permanent Police Station" />
              <Controller
                name="vsPPolice"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    className={errors.vsPPolice ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPPolice && (
                <p className="text-red-500">{errors.vsPPolice.message}</p>
              )}
            </div>

            {/* Present PIN */}
            <div>
              <Label text="Permanent PIN" />
              <Controller
                name="vsPPIN"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    className={errors.vsPPIN ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.vsPPIN && (
                <p className="text-red-500">{errors.vsPPIN.message}</p>
              )}
            </div>

            {/* Present Council Constituency */}
            <div>
              <Label text=" Council Constituency" />
              <Controller
                name="vsPCouncilContituency"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    className={
                      errors.vsPCouncilContituency ? "border-red-500" : ""
                    }
                  />
                )}
              />
              {errors.vsPCouncilContituency && (
                <p className="text-red-500">
                  {errors.vsPCouncilContituency.message}
                </p>
              )}
            </div>

            {/* Present Assembly Constituency */}
            <div>
              <Label text=" Assembly Constituency" />
              <Controller
                name="vsPAssemblyContituency"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    className={
                      errors.vsPAssemblyContituency ? "border-red-500" : ""
                    }
                  />
                )}
              />
              {errors.vsPAssemblyContituency && (
                <p className="text-red-500">
                  {errors.vsPAssemblyContituency.message}
                </p>
              )}
            </div>
          </>
        )}

        <div>
          <Label text="Bank Holder Name" />
          <Controller
            name="vsBankHolderName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsBankHolderName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsBankHolderName && (
            <p className="text-red-500">{errors.vsBankHolderName.message}</p>
          )}
        </div>

        {/* Account Number */}
        <div>
          <Label text="Account Number" />
          <Controller
            name="vsAccountNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsAccountNumber ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsAccountNumber && (
            <p className="text-red-500">{errors.vsAccountNumber.message}</p>
          )}
        </div>

        {/* Bank Name */}
        <div>
          <Label text="Bank Name" />
          <Controller
            name="vsBankName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsBankName ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsBankName && (
            <p className="text-red-500">{errors.vsBankName.message}</p>
          )}
        </div>

        {/* Bank IFSC */}
        <div>
          <Label text="Bank IFSC" />
          <Controller
            name="vsBankIFSC"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className={errors.vsBankIFSC ? "border-red-500" : ""}
              />
            )}
          />
          {errors.vsBankIFSC && (
            <p className="text-red-500">{errors.vsBankIFSC.message}</p>
          )}
        </div>

        {/* Add all other fields similarly */}

        {/* Submit Button */}
        <div className="col-span-full flex justify-end gap-4 bg-gray-100 p-4 rounded-xl">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CandidateModal;
