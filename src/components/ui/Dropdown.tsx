import React from "react";

type DropdownOption = {
  label: string;
  value: number;
};

type DropdownProps = {
  options: DropdownOption[] | string[]; // Accept both arrays
  getOptionLabel?: (option: DropdownOption) => string; // Custom label function (only for objects)
  getOptionValue?: (option: DropdownOption) => number; // Custom value function (only for objects)
  onSelect: (selectedValue: DropdownOption | string) => void; // Callback handles both types
  className?: string;
  placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  getOptionLabel = (option) => option.label, // Default label logic
  getOptionValue = (option) => option.value, // Default value logic
  onSelect,
  className,
  placeholder = "Select an option",
}) => {
  return (
    <select
      onChange={(e) => {
        const value = e.target.value;

        if (typeof options[0] === "string") {
          // Handle string array
          onSelect(value);
        } else {
          // Handle object array
          const selectedOption = (options as DropdownOption[]).find(
            (option) => String(getOptionValue(option)) === value
          );
          if (selectedOption) {
            onSelect(selectedOption);
          }
        }
      }}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {typeof options[0] === "string"
        ? // Render string array
          (options as string[]).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        : // Render object array
          (options as DropdownOption[]).map((option, index) => (
            <option key={index} value={getOptionValue(option)}>
              {getOptionLabel(option)}
            </option>
          ))}
    </select>
  );
};

export default Dropdown;
