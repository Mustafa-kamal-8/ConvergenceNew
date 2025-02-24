import React, { useState } from "react";
import DropInput from "../DropInput";
import Button from "../Button";
import { toast } from "react-toastify";

import * as XLSX from "xlsx";
import useAuthStore from "../../../utils/cookies";
import axiosInstance from "../../../services/state/api-setup/axiosInstance";
import { useErrorStore } from "../../../services/useErrorStore";
import useModalStore from "../../../services/state/useModelStore";

interface BulkUploadModalProps {
  bulkName: string;
  onUploadError?: (errorMessage: string) => void;
}

const BulkUploadModal: React.FC<BulkUploadModalProps> = ({
  bulkName,
  onUploadError,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const { setErrorMessage } = useErrorStore.getState();
  const { closeModal } = useModalStore();

  const handleClearFile = () => {
    setFile(null);
    console.log("File cleared");
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file before uploading.");
      return;
    }
    const { userDetails } = useAuthStore.getState();
    if (!userDetails || !userDetails?.departmentId) {
      toast.error("User details or department ID is missing.");
      console.error("User details are invalid or missing departmentId.");
      return;
    }

    console.log("File data before upload:", file);
    console.log("File name:", file.name);
    console.log("File size:", file.size);
    console.log("File type:", file.type);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      if (data instanceof ArrayBuffer) {
        if (
          file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          file.type === "application/vnd.ms-excel"
        ) {
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          console.log("Parsed Excel data:", jsonData);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const updatedData = jsonData.map((row: any) => {
            return {
              ...row,
            };
          });

          console.log("Updated parsed Excel data:", updatedData);
        }
      } else {
        console.error("File could not be read as ArrayBuffer.");
      }
    };
    if (file) {
      reader.readAsArrayBuffer(file);
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", bulkName);
      formData.append("fklDepartmentId", userDetails?.departmentId);

      var { data: resData } = await axiosInstance.post(
        `/file-upload/upload`,
        formData,
        {}
      );
      if (resData.success === true) {
        // toast.success(resData.message);
        handleClearFile();
      }
      useErrorStore.getState().setBulkName(bulkName);

      // Extract error messages if any errors exist in the data array
      if (resData.data?.some((item: any) => item.error?.length > 0)) {
        // Extract error details
        const errorDetails = resData.data
          .filter((item: any) => item.error)
          .flatMap((item: any) =>
            item.error.map((err: any) => ({
              row: err.rowNumber,
              message: `Row ${err.rowNumber}: ${err.error}`,
            }))
          )
          .sort((a: { row: number; }, b: { row: number; }) => a.row - b.row) // Sort by row number
          .map((item: { message: any; }) => item.message) // Extract messages
          .join("\n");

        const errorMessage = `Errors occurred:\n${errorDetails}`;

        // Count inserted rows
        const totalInserted = resData.data.filter(
          (item: any) => item.insertedRow
        ).length;
        const successMessage = `Total data inserted: ${totalInserted}`;

        // Store in Zustand as an object
        setErrorMessage({ errorMessage, successMessage });

        // Call error callback if provided
        onUploadError?.(errorMessage);
      } else {
        // Success case: No errors, all data processed successfully
        const totalInserted = resData.data[0].insertedRow; // Count all inserted rows
        const successMessage = `All Data processed successfully. Total inserted: ${totalInserted}`;

        setErrorMessage({ errorMessage: "", successMessage }); // Clear error message on success
      }

      // Call closeModal() after processing response
      closeModal();

      // Call closeModal() after processing response

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(resData.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-lg space-y-4 sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <DropInput
        file={file}
        setFile={setFile}
        handleClearFile={handleClearFile}
      />

      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={handleClearFile}
          disabled={uploading || !file}
          className="w-full sm:w-auto"
        >
          Clear
        </Button>
        <Button
          onClick={handleUpload}
          disabled={uploading || !file}
          className="w-full sm:w-auto"
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </div>
    </div>
  );
};

export default BulkUploadModal;
