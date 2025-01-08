import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string | number; // Allow both string and number types for flexibility
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
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
  // Handle the change event for 'number' type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      // Convert the value to a number
      onChange?.(e);
    } else {
      onChange?.(e);
    }
  };

  return (
    <div>
      <input
        type={type}
        className={`w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
