
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
    let primaryTemplateData: string[][] = [];
    let instructionTemplateData: string[][] = [];
    if (templateType === 0) {
      primaryTemplateData = [
        [
          "Sl No",
          "Scheme Funding Type",
          "Scheme Funding Ratio",
          "Sanction Order No",
          "Date of Sanction",
          "Scheme Type",
          "Fund Name",
          "Scheme",
          "Scheme Code",
        ],
      ];

      instructionTemplateData = [
        [
          "Field Name",
          "Required",
          "Data Type",
          "Description / Instructions",
          "Example"
        ],
        ["Sl No", "No", "Any", "Serial number (if applicable)", "1, 2, 3, ..."],
        ["Scheme Funding Type", "Yes", "String", "Type of funding used in the scheme", "State"],
        ["Scheme Funding Ratio", "Yes", "String", "Funding distribution ratio (e.g., 0:0:0)", "30:40:30"],
        ["Sanction Order No", "Yes", "Any", "Official sanction order number", "SAN12345"],
        ["Date of Sanction", "Yes", "Date", "Date when the scheme was sanctioned (YYYY-MM-DD format)", "2024-02-15"],
        ["Scheme Type", "Yes", "String", "The type of scheme being implemented", "Central"],
        ["Fund Name", "Yes", "String", "The name of the fund associated with the scheme", "Fund"],
        ["Scheme", "Yes", "String", "Name of the scheme", "Youth Training"],
        ["Scheme Code", "Yes", "Any", "Unique code assigned to the scheme", "SC123"]

      ];
    }

    else if (templateType === 1) {
      primaryTemplateData = [['Sl No', 'Target Type', 'Scheme Code', 'Total Target', 'Target Date', 'Target Sanction Order No'
      ]];
    } else if (templateType === 2) {
      primaryTemplateData = [['Sl No', 'Course Name', 'From Date', 'To Date', 'Theory Duration Hours', 'Practical Duration Hours', 'Sector Name', 'Course Code'

      ]];
    } else if (templateType === 3) {
      primaryTemplateData = [['Sl No', 'TP Name', 'TP Code', 'Spoc Name', 'Spoc Email', 'Spoc Contact Number', 'Smart ID', 'Address', 'State', 'District', 'City or Village', 'City', 'ULB', 'Village', 'Block']];
    }
    else if (templateType === 4) {
      primaryTemplateData = [['Sl No', 'TP Name', 'TC Name', 'TC Code', 'Spoc Name', 'Spoc Email', 'Spoc Contact Number', 'State', 'District', 'Block/ULB', 'ULB', 'City or Village', 'Address', 'Assembly Constituency', 'Lok Sabha Constituency', 'Partner Code', 'Smart ID']];
    }
    else if (templateType === 5) {
      primaryTemplateData = [['SL No', 'Assessor Name', 'Email', 'Mobile', 'Assessment Agency', 'Valid Up To', 'PAN', 'QPNOS Code'

      ]];
    }
    else if (templateType === 6) {
      primaryTemplateData = [['Sl No', 'Trainer Name', 'Email', 'Mobile', 'Aadhaar/PAN no', 'Tranning Center']];
    }
    else if (templateType === 7) {
      primaryTemplateData = [['Sl No', 'TC Name', 'Course Name', 'Trainer Name', 'SDMS ID', 'Start Date', 'End Date', 'Batch Number'
      ]];
    }
    else if (templateType === 8) {
      primaryTemplateData = [['Sl No', 'Batch ID', 'Candidate ID', 'Candidate Name', 'DOB', 'Age', 'Father Name', 'Gender', 'ID Card Number', 'Religion', 'Category', 'Mobile', 'Email', 'Education Attained', 'Disability', 'Tea Tribe', 'BPL Card Holder', 'Minority', 'Residential Address', 'Residential District', 'Residential State', 'Residential Block', 'Residential ULB', 'Residential Village/City', 'Residential Post Office', 'Residential Police', 'Residential PIN', 'Residential Council Constituency', 'Residential Assembly Constituency', 'Permanent Address', 'Permanent State', 'Permanent District', 'Permanent Block', 'Permanent ULB', 'Permanent Village/City', 'Permanent Post Office', 'Permanent Police', 'Permanent PIN', 'Permanent Council Constituency', 'Permanent Assembly Constituency', 'Bank Holder Name', 'Bank Name', 'Branch Name', 'Account Number', 'Bank IFSC']];
      instructionTemplateData = [
        [
          "Field Name",
          "Required",
          "Data Type",
          "Description / Instructions",
          "Example"
        ],
        [ "Sl No", "No", "Number", "Serial number (if applicable)", "1"],

        ["Candidate ID", "Yes", "String", "Unique ID assigned to the candidate", "CAND12345"],

        ["Batch ID", "Yes", "Number", "Batch ID to which the candidate is assigned", "101"],

        ["Candidate Name", "Yes", "String", "Full name of the candidate", "John Doe"],

        ["DOB", "Yes", "Date", "Date of birth (YYYY-MM-DD format)", "2000-05-15"],

        ["Father Name", "No", "String", "Father’s name of the candidate", "Robert Doe"],

        ["Gender", "Yes", "String", "Gender (Male/Female/Other)", "Male"],

        ["ID Card Number", "Yes", "String", "Government-issued ID card number", "A123456789"],

        ["Religion", "Yes", "String", "Religion of the candidate", "Hindu"],

        ["Category", "Yes", "String", "Category (General, SC, ST, OBC, etc.)", "General"],
        ["Mobile", "Yes", "Number", "Mobile number of the candidate", "9876543210"],
        ["Email", "No", "String", "Email address of the candidate (if available)", "john.doe@example.com"],
        ["Education Attained", "Yes", "String", "Highest education qualification attained", "Graduate"],
        ["Disability", "No", "String", "Disability status (if applicable)", "None"]





      ];
    }

    else if (templateType === 9) {
      primaryTemplateData = [['Sl No', 'Batch ID', 'SDMS Batch ID', 'Assessment Date', 'Is Result Declare', 'Result Date', 'Assessed ID'
      ]];
    }
    else if (templateType === 10) {
      primaryTemplateData = [['Sl No', 'Batch ID', 'Candidate Name', 'Is Candidate Placed',
        'Employer Name', 'Placement Type', 'Employer Contact Number',
        'Placement State', 'Placement District', 'Monthly Salary']];
    }

    else if (templateType === 11) {
      primaryTemplateData = [['Sl No', 'Invoice Type', 'Invoice No', 'Invoice Tranche',
        'Batch Number', 'Total Candidate', 'Rate', 'Invoice Date', 'Amount']];
    }




    else {
      console.error('Invalid template type');
      return;
    }

    const generateExcel = (data: string[][], fileName: string) => {
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
      saveAs(blob, `${fileName}.xlsx`);
    };

    // Download both templates
    generateExcel(primaryTemplateData, `${templateTitle}`);
    generateExcel(instructionTemplateData, `${templateTitle}_Instruction`);
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
