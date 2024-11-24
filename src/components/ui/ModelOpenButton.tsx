import React from 'react';
import useModalStore from '../../services/state/useModelStore';


type ModalOpenButtonProps = {
  modalType: number; 
  modalTitle: string; 
  bulkName: string;
  Icon: React.ElementType;
};

const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ modalType, modalTitle,bulkName,Icon }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <button
      onClick={() => openModal(modalType, modalTitle, bulkName)} // Pass both modalType and modalTitle
      className="py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
    >
      <Icon className="w-6 h-6" /> {/* Icon */}
      {modalTitle} {/* Use the modalTitle prop for the button label */}
    </button>
  );
};

export default ModalOpenButton;
