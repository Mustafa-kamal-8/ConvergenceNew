// src/components/Select.tsx
import React from 'react';

interface SelectProps {
  options: string[]; // Array of options for the dropdown
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // onChange handler for selection
  placeholder?: string; // Optional placeholder text
}

const Select: React.FC<SelectProps> = ({ options, onChange, placeholder = '-- Select --' }) => {
  return (
    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      onChange={onChange}
    >
      <option value="" disabled selected>
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
