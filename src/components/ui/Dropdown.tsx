import React from 'react';

type DropdownProps = {
  options: string[]; // Array of option labels (strings)
  onSelect: (value: string | number) => void; // Allow both string and number
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, className }) => {
  return (
    <select
      onChange={(e) => onSelect(Number(e.target.value) || e.target.value)} // Handle both string and number
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      <option value="" disabled selected>
        Select an option
      </option> {/* Placeholder option */}
      {options.map((option, index) => (
        <option key={index} value={index + 1}>
          {option}
        </option> 
      ))}
    </select>
  );
};

export default Dropdown;



