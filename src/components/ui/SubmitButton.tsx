import React from 'react';

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  text: string; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, text }) => {
  return (
    <button
      type="submit" 
      onClick={onClick} 
      className="py-3 px-8 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
