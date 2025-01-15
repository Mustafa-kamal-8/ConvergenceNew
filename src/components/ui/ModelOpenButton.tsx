import React from 'react';
import useModalStore from '../../services/state/useModelStore';

type ModalOpenButtonProps = {
  modalType: number;
  id: string;
  modalTitle: string;
  bulkName: string;
  Icon: React.ElementType;
  variant?: 'default' | 'table';
  schemeId?: string;
};

const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ modalType, modalTitle, bulkName, Icon, id, variant = 'default',schemeId }) => {
  const openModal = useModalStore((state) => state.openModal);


  const buttonStyles =
    variant === 'table'
      ? 'py-1 px-2 ml-4 text-xs bg-[#4F46E5]  hover:bg-[#3730A3] text-white rounded-md flex items-center gap-1'
      : 'py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover text-white rounded-md flex items-center gap-2';

  return (
    <button
      onClick={() => openModal(modalType, modalTitle, bulkName, id, schemeId ?? '')}
      className={buttonStyles}
    >
      <Icon className={variant === 'table' ? 'w-4 h-4' : 'w-6 h-6'} /> 
      {modalTitle} 
    </button>
  );
};

export default ModalOpenButton;







// import React from 'react';
// import useModalStore from '../../services/state/useModelStore';


// type ModalOpenButtonProps = {
//   modalType: number; 
//   id: string;
//   modalTitle: string; 
//   bulkName: string;
//   Icon: React.ElementType;
// };

// const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ modalType, modalTitle,bulkName,Icon , id }) => {
//   const openModal = useModalStore((state) => state.openModal);

//   return (
//     <button
//       onClick={() => openModal(modalType, modalTitle, bulkName , id)} // Pass both modalType and modalTitle
//       className="py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
//     >
//       <Icon className="w-6 h-6" /> {/* Icon */}
//       {modalTitle} {/* Use the modalTitle prop for the button label */}
//     </button>
//   );
// };

// export default ModalOpenButton;
