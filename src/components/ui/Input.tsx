import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string; // Added className
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // Optional for React Hook Form
  disabled?: boolean; // Optional disabled prop
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  onBlur,
  disabled,
}) => {
  return (
    <div>
      <input
        type={type}
        className={`w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
