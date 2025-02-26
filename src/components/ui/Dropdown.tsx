import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

type DropdownOption = {
  label: string;
  value: number;
};

type DropdownProps = {
  options?: DropdownOption[]; // Made optional to prevent undefined error
  getOptionLabel?: (option: DropdownOption) => string;
  getOptionValue?: (option: DropdownOption) => number | string;
  onSelect: (selectedValue: DropdownOption) => void;
  className?: string;
  placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options = [], // Default to empty array to prevent errors
  getOptionLabel = (option) => option.label,
  getOptionValue = (option) => option.value,
  onSelect,
  className,
  placeholder = "Select an option",
}) => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search input
 // Ensure getOptionLabel always returns a string
const filteredOptions = options.filter((option) => {
  const label = getOptionLabel(option);
  return typeof label === "string" ? label.toLowerCase().includes(searchText.toLowerCase()) : false;
});


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;
    switch (event.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) => (prev + 1) % filteredOptions.length);
        break;
      case "ArrowUp":
        setHighlightedIndex((prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length);
        break;
      case "Enter":
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setSearchText("");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Select Box (Shows Selected Value) */}
      <div
  className={`w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white cursor-pointer flex justify-between items-center ${className}`}
  onClick={() => setIsOpen(!isOpen)}
  onKeyDown={handleKeyDown}
  tabIndex={0} // Makes it focusable for keyboard users
>
  <span>{selectedOption ? getOptionLabel(selectedOption) : placeholder}</span>
  <ChevronDown className="w-4 h-4 ml-1" />
</div>

      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-50">
          {/* Search Input */}
          <input
            type="text"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />

          {/* Dropdown Options */}
          <ul className="max-h-40 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={getOptionValue(option)}
                  className={`px-4 py-2 cursor-pointer ${
                    index === highlightedIndex ? "bg-blue-100" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {getOptionLabel(option)}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
