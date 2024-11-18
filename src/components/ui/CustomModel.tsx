// src/components/ui/CustomModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import useModalStore from '../../services/state/useModelStore';
import Scheme from './Modals/Scheme';


const CustomModal: React.FC = () => {
  const { isOpen, modalType, closeModal } = useModalStore();

  const renderModalContent = () => {
    switch (modalType) {
      case 'scheme':
        return <Scheme />;
      case 'trainer':
        // return <TrainerModalContent />;
      default:
        return <p>No content available</p>;
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          {modalType.charAt(0).toUpperCase() + modalType.slice(1)} Modal
        </Typography>
        {renderModalContent()}
        <Button onClick={closeModal} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
