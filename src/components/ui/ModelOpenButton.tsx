import React from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material'; // Import the + icon from Material UI
import useModalStore from '../../services/state/useModelStore';

type ModalOpenButtonProps = {
  modalType: string;
};

const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ modalType }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Button
      variant="contained"
      onClick={() => openModal(modalType)}
      sx={{
        mt: 2,
        backgroundColor: 'black', // Black color for the button
        color: 'white', // White text color
        '&:hover': {
          backgroundColor: '#333', // Darker shade on hover
        },
      }}
      startIcon={<Add />} // Add the + icon at the start
    >
      ADD {modalType.charAt(0).toUpperCase() + modalType.slice(1)} 
    </Button>
  );
};

export default ModalOpenButton;
