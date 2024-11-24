import React from 'react';

// Define the props for the component
interface BulkUploadModalProps {
  bulkName: string;
}

const BulkUploadModal: React.FC<BulkUploadModalProps> = ({ bulkName }) => {
  return (
    <div>
    
      <p> {bulkName}</p>
    </div>
  );
};

export default BulkUploadModal;
