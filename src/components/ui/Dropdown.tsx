import React from 'react';

type DropdownProps = {
  options: string[]; // Array of option labels (strings)
  onSelect: (value: number) => void; // Expect a number when an option is selected
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, className }) => {
  return (
    <select
      onChange={(e) => onSelect(Number(e.target.value))} // Convert string to number
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={index}>{option}</option> // Use index as value (or sector ID if needed)
      ))}
    </select>
  );
};

export default Dropdown;
