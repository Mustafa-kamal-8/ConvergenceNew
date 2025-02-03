
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
  else if (templateType === 4) {
    data = [['Sl No','TP Name', 'TC Name','TC Code','Spoc Name','Spoc Email','Spoc Contact Number','State','District','Block/ULB','ULB','City or Village','Address','Assembly Constituency','Lok Sabha Constituency','Partner Code','Smart ID']];
  } 
  else if (templateType === 5) {
    data = [['SL No','Assessor Name', 'Email','Mobile','Assessment Agency','Valid Up To']];
  } 
  else if (templateType === 6) {
    data = [['Sl No','Trainer Name', 'Email','Mobile','Aadhaar/PAN no']];
  }
  else if (templateType === 7) {
    data = [['Sl No','TP Name', 'TC Name','Course Name','QPNOS','SDMS ID','Start Date','End Date','Sector','Batch ID']];
  }
  else if (templateType === 8) {
    data = [['Sl No',	'Batch ID',	'Candidate ID',	'Candidate Name',	'DOB',	'Age',	'Father Name',	'Gender',	'Id Type', 'ID Card Number',	'Religion',	'Category',	'Mobile',	'Email',	'Education Attained',	'Disability',	'Tea Tribe',	'BPL Card Holder',	'Minority',	'Residential Address',	'Residential District',	'Residential State',	'Residential Block',	'Residential ULB',	'Residential Village/City',	'Residential Post Office',	'Residential Police',	'Residential PIN',	'Residential Council', 'Contituency',	'Residential Assembly Contituency',	'Permanent Address',	'Permanent State',	'Permanent District',	'Permanent Block',	'Permanent ULB',	'Permanent Village/City',	'Permanent Post Office',	'Permanent Police','Permanent PIN',	'Permanent Council Contituency',	'Permanent Assembly Contituency',	'Bank Holder Name',	'Bank Name',	'Branch Name',	'Account Number',	'Bank IFSC'
    ]];
  }
  else if (templateType === 9) {
    data = [['Sl No', 'Batch ID', 'SDMS Batch ID', 'Candidate ID', 'Is Assessed', 
             'Assessment Date', 'Agency', 'Agency Mobile', 'Agency Email', 
             'Accessor Name', 'Result', 'Result Date', 'Total Marks', 
             'Obtained Marks', 'Marksheet URL', 'Certificate URL']];
  }
  else if (templateType === 10) {
    data = [['Sl No', 'Batch ID', 'Candidate Name', 'Is Candidate Placed', 
             'Employer Name', 'Placement Type', 'Employer Contact Number', 
             'Placement State', 'Placement District', 'Monthly Salary']];
  }

  else if (templateType === 11) {
    data = [['Sl No', 'Invoice Type', 'Invoice No', 'Invoice Tranche', 
             'Batch Number', 'Total Candidate', 'Rate', 'Invoice Date', 'Amount']];
  }
  
  
  
  
    else {
      console.error('Invalid template type');
      return;
    }

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Template${templateTitle}`);
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${templateTitle}.xlsx`);
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
