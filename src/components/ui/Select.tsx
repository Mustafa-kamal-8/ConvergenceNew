import React from 'react';

interface SelectProps {
  options: string[]; // Array of options for the dropdown
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // onChange handler for selection
  placeholder?: string; // Optional placeholder text
  className?: string; // Optional className for custom styling
}

const Select: React.FC<SelectProps> = ({ options, onChange, placeholder = '-- Select --', className }) => {
  return (
    <select
      className={`w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className || ''}`}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
