
// import React from 'react';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// type TemplateDownloadButtonProps = {
//   templateType: number;
//   templateTitle: string;
//   Icon: React.ElementType;
// };

// const TemplateDownloadButton: React.FC<TemplateDownloadButtonProps> = ({ templateType, templateTitle, Icon }) => {
//   const downloadTemplate = () => {
//     let primaryTemplateData: string[][] = [];
//     let instructionTemplateData: string[][] = [];
//     if (templateType === 0) {
//       primaryTemplateData = [
//         [
//           "Sl No",
//           "Scheme Funding Type",
//           "Scheme Funding Ratio",
//           "Sanction Order No",
//           "Date of Sanction",
//           "Scheme Type",
//           "Fund Name",
//           "Scheme",
//           "Scheme Code",
//         ],
//       ];

//       instructionTemplateData = [
//         [
//           "Field Name",
//           "Required",
//           "Data Type",
//           "Description / Instructions",
//           "Example"
//         ],
//         ["Sl No", "No", "Any", "Serial number (if applicable)", "1, 2, 3, ..."],
//         ["Scheme Funding Type", "Yes", "String", "Type of funding used in the scheme", "State"],
//         ["Scheme Funding Ratio", "Yes", "String", "Funding distribution ratio (e.g., 0:0:0)", "30:40:30"],
//         ["Sanction Order No", "Yes", "Any", "Official sanction order number", "SAN12345"],
//         ["Date of Sanction", "Yes", "Date", "Date when the scheme was sanctioned (YYYY-MM-DD format)", "2024-02-15"],
//         ["Scheme Type", "Yes", "String", "The type of scheme being implemented", "Central"],
//         ["Fund Name", "Yes", "String", "The name of the fund associated with the scheme", "Fund"],
//         ["Scheme", "Yes", "String", "Name of the scheme", "Youth Training"],
//         ["Scheme Code", "Yes", "Any", "Unique code assigned to the scheme", "SC123"]

//       ];
//     }

//     else if (templateType === 1) {
//       primaryTemplateData = [['Sl No', 'Target Type', 'Scheme Code', 'Total Target', 'Target Date', 'Target Sanction Order No'
//       ]];
//     } else if (templateType === 2) {
//       primaryTemplateData = [['Sl No', 'Course Name', 'From Date', 'To Date', 'Theory Duration Hours', 'Practical Duration Hours', 'Sector Name', 'Course Code'

//       ]];
//     } else if (templateType === 3) {
//       primaryTemplateData = [['Sl No', 'TP Name', 'TP Code', 'Spoc Name', 'Spoc Email', 'Spoc Contact Number', 'Smart ID', 'Address', 'State', 'District', 'City or Village', 'City', 'ULB', 'Village', 'Block']];
//     }
//     else if (templateType === 4) {
//       primaryTemplateData = [['Sl No', 'TP Name', 'TC Name', 'TC Code', 'Spoc Name', 'Spoc Email', 'Spoc Contact Number', 'State', 'District', 'Block/ULB', 'ULB', 'City or Village', 'Address', 'Assembly Constituency', 'Lok Sabha Constituency', 'Partner Code', 'Smart ID']];
//     }
//     else if (templateType === 5) {
//       primaryTemplateData = [['SL No', 'Assessor Name', 'Email', 'Mobile', 'Assessment Agency', 'Valid Up To', 'PAN', 'QPNOS Code'

//       ]];
//     }
//     else if (templateType === 6) {
//       primaryTemplateData = [['Sl No', 'Trainer Name', 'Email', 'Mobile', 'Aadhaar/PAN no', 'Tranning Center']];
//     }
//     else if (templateType === 7) {
//       primaryTemplateData = [['Sl No', 'TC Name', 'Course Name', 'Trainer Name', 'SDMS ID', 'Start Date', 'End Date', 'Batch Number'
//       ]];
//     }
//     else if (templateType === 8) {
//       primaryTemplateData = [['Sl No', 'Batch ID', 'Candidate ID', 'Candidate Name', 'DOB', 'Father Name', 'Gender', 'ID Card Number', 'Religion', 'Category', 'Mobile', 'Email', 'Education Attained', 'Disability', 'Tea Tribe', 'BPL Card Holder', 'Minority']];
//       instructionTemplateData = [
//         [
//           "Field Name",
//           "Required",
//           "Data Type",
//           "Description / Instructions",
//           "Example"
//         ],
//         [ "Sl No", "Optional", "Number", "Serial number", "1,2,3........"],

//         ["Candidate ID", "Required", "String", "Unique ID assigned to the candidate", "CAND12345 OR 12345"],

//         ["Batch ID", "Optional", "String", "Batch ID to which the candidate is assigned", "101"],

//         ["Candidate Name", "Required", "String", "Full name of the candidate", "John Doe"],

//         ["DOB", "Required", "Date", "Date of birth (YYYY-MM-DD format)", "2000-05-15"],

//         ["Father Name", "Optional", "String", "Father’s name of the candidate", "Robert Doe"],

//         ["Gender", "Required", "String (Dropdown)", "Gender (Male/Female/Other)", "Male"],

//         ["ID Card Number", "Optional", "String", "Government-issued ID card number", "6789"],

//         ["Religion", "Required", "String (Dropdown)", "Religion of the candidate", "Hindu"],

//         ["Category", "Required", "String (Dropdown)", "Category (General, SC, ST, OBC, etc.)", "General"],
//         ["Mobile", "Required", "Number", "Mobile number of the candidate", "9876543210"],
//         ["Email", "Optional", "String", "Email address of the candidate", "john.doe@example.com"],
//         ["Education Attained", "Required", "String(Dropdown)", "Highest education qualification attained", "Graduate"],
//         ["Disability", "Optional", "String (Dropdown)", "Disability status", "None"]





//       ];
//     }

//     else if (templateType === 9) {
//       primaryTemplateData = [['Sl No', 'Batch ID', 'SDMS Batch ID', 'Assessment Date', 'Is Result Declare', 'Result Date', 'Assessed ID'
//       ]];
//     }
//     else if (templateType === 10) {
//       primaryTemplateData = [['Sl No', 'Batch ID', 'Candidate Name', 'Is Candidate Placed',
//         'Employer Name', 'Placement Type', 'Employer Contact Number',
//         'Placement State', 'Placement District', 'Monthly Salary']];
//     }

//     else if (templateType === 11) {
//       primaryTemplateData = [['Sl No', 'Invoice Type', 'Invoice No', 'Invoice Tranche',
//         'Batch Number', 'Total Candidate', 'Rate', 'Invoice Date', 'Amount']];
//     }




//     else {
//       console.error('Invalid template type');
//       return;
//     }

//     const generateExcel = (
//       primaryData: string[][],
//       instructionData: string[][] | null,
//       fileName: string
//     ) => {
//       const workbook = XLSX.utils.book_new();
    
//       // Add Primary Template Data as Sheet1
//       const primaryWorksheet = XLSX.utils.aoa_to_sheet(primaryData);
//       XLSX.utils.book_append_sheet(workbook, primaryWorksheet, "Primary Template");
    
//       // Add Instruction Template Data as Sheet2 (if exists)
//       if (instructionData) {
//         const instructionWorksheet = XLSX.utils.aoa_to_sheet(instructionData);
//         XLSX.utils.book_append_sheet(workbook, instructionWorksheet, "Instruction Template");
//       }
    
//       // Generate Excel File
//       const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//       const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
//       saveAs(blob, `${fileName}.xlsx`);
//     };
    
//     // Call this function instead of separate downloads
//     generateExcel(primaryTemplateData, instructionTemplateData.length > 0 ? instructionTemplateData : null, templateTitle);

    
//   }
//   return (
//     <button
//       onClick={downloadTemplate}
//       className="py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
//     >
//       <Icon className="w-6 h-6" /> {/* Icon */}
//       {templateTitle} {/* Use the templateTitle prop for the button label */}
//     </button>
//   );
// };

// export default TemplateDownloadButton;
import React from "react";
import candidateTemplate from "../../assets/Candidate_Template-Instruction.xlsx?url"; // Use ?url to get the file path

type TemplateDownloadButtonProps = {
  templateType: number;
  templateTitle: string;
  Icon: React.ElementType;
};

const TemplateDownloadButton: React.FC<TemplateDownloadButtonProps> = ({
  templateType,
  templateTitle,
  Icon,
}) => {
  // Correct file paths using `import.meta.url`
  const templateFiles: { [key: number]: string } = {
    0: "/assets/scheme.xls",
    1: "/assets/template1.xls",
    2: "/assets/template2.xls",
    3: "/assets/template3.xls",
    4: "/assets/template4.xls",
    5: "/assets/template5.xls",
    6: "/assets/template6.xls",
    7: "/assets/template7.xls",
    8: candidateTemplate, // Use imported file path
    9: "/assets/template9.xls",
    10: "/assets/template10.xls",
    11: "/assets/template11.xls",
  };

  const downloadTemplate = () => {
    const fileUrl = templateFiles[templateType];

    if (!fileUrl) {
      console.error("Invalid template type or file not available");
      return;
    }

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileUrl.split("/").pop() || "template.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadTemplate}
      className="py-2 px-4 text-xs bg-theme-primary hover:bg-theme-primary-hover rounded-md flex items-center gap-2 text-white"
    >
      <Icon className="w-6 h-6" />
      {templateTitle}
    </button>
  );
};

export default TemplateDownloadButton;

