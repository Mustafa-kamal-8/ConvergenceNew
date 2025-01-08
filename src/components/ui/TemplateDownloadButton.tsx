
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

type TemplateDownloadButtonProps = {
  templateType: number; 
  templateTitle: string;
  Icon: React.ElementType;
};

const TemplateDownloadButton: React.FC<TemplateDownloadButtonProps> = ({ templateType, templateTitle, Icon }) => {
  const downloadTemplate = () => {
    let data: string[][];

    if (templateType === 0) {
      data = [['User Name', 'Password']];
    } else if (templateType === 1) {
      data = [['sanction no', 'scheme code','total target','sanction date']];
    } else {
      console.error('Invalid template type');
      return;
    }

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Template${templateType}`);
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `Template${templateType}.xlsx`);
  };

  return (
    <button
      onClick={downloadTemplate}
      className="py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
    >
      <Icon className="w-6 h-6" /> {/* Icon */}
      {templateTitle} {/* Use the templateTitle prop for the button label */}
    </button>
  );
};

export default TemplateDownloadButton;
