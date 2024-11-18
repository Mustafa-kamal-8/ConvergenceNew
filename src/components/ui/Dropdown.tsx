// src/components/ui/Dropdown.tsx
import React from 'react';

type DropdownProps = {
  options: string[];
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
