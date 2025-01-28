import React from "react";

type DropdownOption = {
  label: string;
  value: number;
};

type DropdownProps = {
  options: DropdownOption[];
  getOptionLabel?: (option: DropdownOption) => string; // Function to customize option label
  getOptionValue?: (option: DropdownOption) => number; // Function to customize option value
  onSelect: (selectedValue: DropdownOption) => void; // Callback for selection
  className?: string;
  placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  getOptionLabel = (option) => option.label, // Default to `label` property
  getOptionValue = (option) => option.value, // Default to `value` property
  onSelect,
  className,
  placeholder = "Select an option",
}) => {
  return (
    <select
      onChange={(e) => {
        const selectedOption = options.find((option) => {
          const optionValue = getOptionValue(option);
          return String(optionValue) === e.target.value;
        });
        if (selectedOption) {
          onSelect(selectedOption); // Pass the selected option object
        }
      }}  
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
