
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
      data = [['Sl No', 'Scheme Funding Type','Scheme Funding Ratio','Sanction Order No','Date of Sanction','Scheme Type','Fund Name','Scheme','Scheme Code' ]];
    } else if (templateType === 1) {
      data = [['Sl No','Sanction No', 'Scheme Name','Scheme Code','Total Target','Sanction Date']];
    } else if (templateType === 2) {
      data = [['Sl No','Course Name', 'From Date','To Date','Theory Duration Hours','Practical Duration Hours','Practical Duration Hours','Sector Name']];
    }  else if (templateType === 3) {
    data = [['Sl No','TP Name', 'TP Code','Spoc Name','Spoc Email','Spoc Contact Number','Smart ID','Address','State','District','City or Village','City','ULB','Village','Block']];
  } 
    else {
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
