
import React from 'react';

interface LabelProps {
  text: string;  // The text to display in the label
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <label className="block font-semibold mb-2 text-sm  text-gray-600">
      {text}
    </label>
  );
};

export default Label;
