import React, { useState } from "react";
import DropInput from "../DropInput";
import Button from "../Button";
import { toast } from "react-toastify";
import axios from "axios";
import * as XLSX from "xlsx"; 
import useAuthStore from "../../../utils/cookies";

interface BulkUploadModalProps {
  bulkName: string;
  schemeId: string;
}

const API_BASE_URL = process.env.VITE_API_BASE_URL;

const {  userDetails } = useAuthStore.getState();

console.log("user details are",userDetails)
const BulkUploadModal: React.FC<BulkUploadModalProps> = ({ bulkName,schemeId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleClearFile = () => {
    setFile(null);
    console.log("File cleared");
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file before uploading.");
      return;
    }
    if (!userDetails || !userDetails.departmentId) {
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
        if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "application/vnd.ms-excel") {
          // If the file is an Excel file
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          console.log("Parsed Excel data:", jsonData); 

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const updatedData = jsonData.map((row: any) => {
            return {
              ...row,
              'schemeId': parseInt(schemeId), // Add or overwrite the 'scheme id' value
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
      formData.append("fklDepartmentId", userDetails.departmentId.toString());
      if(schemeId){
        formData.append("fklSchemeId",  (schemeId))

      }
    
      const { data: resData } = await axios.post(`${API_BASE_URL}/file-upload/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (resData.success) {
        toast.success("File uploaded successfully!");
        handleClearFile();
      } else {
        const errorMessage = resData.message || "Error while uploading the file.";
        toast.error(errorMessage);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("An error occurred while uploading. Please try again later.");
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
