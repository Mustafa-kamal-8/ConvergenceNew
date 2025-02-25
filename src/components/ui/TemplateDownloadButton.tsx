
import React from "react";
import candidateTemplate from "../../assets/Candidate_Template-Instruction.xlsx?url"; // Use ?url to get the file path
import schemeTemplate from "../../assets/Scheme_Template-Instruction.xlsx?url";
import targetTemplate from "../../assets/Target_Template-Instruction.xlsx?url";
import tcTemplate from "../../assets/TC_Template-Instruction.xlsx?url";
import tpTemplate from "../../assets/TP_Template-Instruction.xlsx?url";

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
    0: schemeTemplate,
    1: targetTemplate,
    2: "/assets/template2.xls",
    3: tpTemplate,
    4: tcTemplate,
    5: "/assets/template5.xls",
    6: "/assets/template6.xls",
    7: "/assets/template7.xls",
    8: candidateTemplate, 
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

