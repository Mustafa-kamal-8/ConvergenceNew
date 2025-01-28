import React from 'react';
import useModalStore from '../../services/state/useModelStore';

type ModalOpenButtonProps = {
  modalType: number;

  modalTitle: string;
  bulkName: string;
  Icon: React.ElementType;
  variant?: 'default' | 'table';
 
};

const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ modalType, modalTitle, bulkName, Icon, variant = 'default'}) => {
  const openModal = useModalStore((state) => state.openModal);


  const buttonStyles =
    variant === 'table'
      ? 'py-1 px-2 ml-4 text-xs bg-[#4F46E5]  hover:bg-[#3730A3] text-white rounded-md flex items-center gap-1'
      : 'py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover text-white rounded-md flex items-center gap-2';

  return (
    <button
      onClick={() => openModal(modalType, modalTitle, bulkName)}
      className={buttonStyles}
    >
      <Icon className={variant === 'table' ? 'w-4 h-4' : 'w-6 h-6'} /> 
      {modalTitle} 
    </button>
  );
};

export default ModalOpenButton;








