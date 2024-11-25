import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

// Define the props for the component
interface BulkUploadModalProps {
  bulkName: string;
}

const BulkUploadModal: React.FC<BulkUploadModalProps> = ({ bulkName }) => {
  // Using useDropzone to manage file upload
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any[]) => {
      setFiles(acceptedFiles); // Add selected files to state
    },
    maxSize: 2 * 1024 * 1024, // Max 2MB
    accept: ['.xlsx', '.csv'], // Use an array of allowed file types
    multiple: false, // Only allow one file at a time
  });

  // State to hold the files
  const [files, setFiles] = useState<any[]>([]);

  // Remove files from the state
  const handleRemove = () => {
    setFiles([]); // Clear the files from the state
  };

  return (
    <div className="p-6">
    <div className="max-w-md w-full border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 h-44 flex items-center justify-center text-sm text-gray-500 relative">
      <label htmlFor="bulkUpload" className="flex-grow h-full w-full p-6 flex items-center justify-center">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} id="bulkUpload"/>
          <p className="text-center">
            Drag 'n' drop some files here, or click to select files
            <br />
            Max 2MB | .xlsx, .csv
          </p>
        </div>
      </label>

      {/* Show selected files */}
      {files && files.length > 0 && (
        <aside className="absolute top-0 left-0 w-full h-full bg-gray-50 rounded-lg flex items-center justify-center p-6">
          <div className="text-center">
            <p>{files.map((file) => file.name).join(', ')}</p> {/* Show file names */}
            <button
              onClick={handleRemove}
              className="mt-2 text-red-500 hover:text-red-700 underline"
            >
              Remove File
            </button>
          </div>
        </aside>
      )}
    </div>
    </div>
  );
};

export default BulkUploadModal;
