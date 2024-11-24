// src/components/ui/CustomModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import useModalStore from '../../services/state/useModelStore';
import Scheme from './Modals/SchemeModal';
import BulkUploadModal from './Modals/BulkUploadModal';
import Traget from './Modals/TargetModal'
import CourseModal from './Modals/CourseModal';
import TrainingPartnerModal from './Modals/TrainingPartnerModal';
import { X } from 'lucide-react';


const CustomModal: React.FC = () => {
  const { isOpen, modalType, modalTitle,bulkName, closeModal } = useModalStore();

  const renderModalContent = () => {
    switch (modalType) {
      case 0:
        return <Scheme />;
        case 1:
          return <Traget />;
          case 2:
          return <CourseModal />;
          case 3:
            return <TrainingPartnerModal />;
        case 11:
          return <BulkUploadModal bulkName={bulkName} />;
     
        // return <TrainerModalContent />;
      default:
        return <p>No content available</p>;
    }
  };

  console.log("modal title is",modalTitle);

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box className="fixed w-full max-w-3xl bg-white border shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
       
      >
        <div className='p-4 flex gap-4 justify-between'>
          
        <Typography variant="h5" component="h2" mb={2}>
            {modalTitle} {/* Ensure modalTitle is displayed */}
          </Typography>
        <button className=" text-theme-primary hover:text-theme-primary-hover" onClick={closeModal}>
          <X />
        </button>
        </div>
        {renderModalContent()}
      
      </Box>
    </Modal>
  );
};

export default CustomModal;
