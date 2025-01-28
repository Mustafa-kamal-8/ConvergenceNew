import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import moment from "moment";

interface SchemeData {
  pklSchemeId: string;
  vsSchemeName: string;
  vsSchemeType: string;
  vsSchemeCode: string;
  vsFundName: string;
  vsSchemeFundingType: string;
  vsSchemeFUndingRatio: string;
  sanctionOrderNo: string;
  dtSanctionDate: string;
  count: string;
}

export const schemeColumns: (
  navigate: ReturnType<typeof useNavigate>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Column<SchemeData>[] = (_navigate) => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme", accessor: "vsSchemeName" },
  {
    Header: "Targets",
    accessor: "count",
  
  },
  { Header: "Scheme Type", accessor: "vsSchemeType" },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Fund Name", accessor: "vsFundName" },
  { Header: "Fund Type", accessor: "vsSchemeFundingType" },
  { Header: "Fund Ratio", accessor: "vsSchemeFUndingRatio" },
  { Header: "Sanction Order Number", accessor: "sanctionOrderNo" },
  {
    Header: "Sanction Date",
    accessor: "dtSanctionDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
];

interface TargetData {
  pklTargetId: number;
  vsSchemeCode: string;
  iTotalTarget: string;
  dtSanctionDate: string;
  vsSanctionNo: number;
  TotalTarget: string;
  Action: unknown;
}

export const targetColumns = (
  navigate: (path: string) => void
): Column<TargetData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Sanction Order Number", accessor: "vsSanctionNo"
   
   },
  { Header: "Date Of Sanction", accessor: "dtSanctionDate", Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD") },
  { Header: "Total Target", accessor: "iTotalTarget" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/target/${row.original.pklTargetId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface CourseData {
  id: string;
  vsCourseName: string;
  vsCourseCode: string;
  dtFromDate: string;
  dtToDate: string;
  JobRoleName: string;
  iTheoryDurationInHours: string;
  iPracticalDurationInHours: string;
  
  vsSectorName: string;
  Action: unknown;
}

export const courseColumns = (
  navigate: (path: string) => void
): Column<CourseData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Sector Name", accessor: "vsSectorName" },
  { Header: "Job Role Name", accessor: "vsCourseName" },
  { Header: "QPNOS Code", accessor: "vsCourseCode" },
  {
    Header: "From Date",
    accessor: "dtFromDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
  {
    Header: "To Date",
    accessor: "dtToDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
 
  { Header: "Total Theory Hours", accessor: "iTheoryDurationInHours" },
  { Header: "Total Practical Hours", accessor: "iPracticalDurationInHours" },
 
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/target/${row.original.id}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface TrainingPartnerData {
  id: string;
  vsTpName: string;
  vsSpocEmail: string;
  iSpocContactNum: string;
  vsSpocName: string;
  vsState: number;
  vsDistrict: number;
  vsBlock: number;
  vsVillage: string;
  vsAddress: string;
  vsSmartId: string;
  isVillageCity: string;
  vsCity: string;
  vsULB: number;
  pklTpId:string;
  count: number;
}

export const trainingColumns: (
  navigate: ReturnType<typeof useNavigate>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Column<TrainingPartnerData>[] = (_navigate) => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  {
    Header: "Centers",
    accessor: "count", 
  
  },
  { Header: "Partner Name", accessor: "vsTpName" },
  { Header: "SPOC Name", accessor: "vsSpocName" },
  { Header: "SPOC Email", accessor: "vsSpocEmail" },
  { Header: "SPOC Contact", accessor: "iSpocContactNum" },
  { Header: "Address", accessor: "vsAddress" },
  { Header: "State", accessor: "vsState" },
  { Header: "District", accessor: "vsDistrict" },
 
];


interface TrainingCenterData {
  pklTcId: number;
  vsTcName: string;
  vsTcCode: string;
  vsSpocName: string;
  iPartnerCode: string;
  Action: unknown;
}

export const centerColumns = (
  navigate: (path: string) => void
): Column<TrainingCenterData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Name", accessor: "vsTcName" },
  { Header: "TC Code", accessor: "vsTcCode" },
  { Header: "SPOC Name", accessor: "vsSpocName" },
  { Header: "Partner Code", accessor: "iPartnerCode" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/target/${row.original.pklTcId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface BatchData {

  pklBatchId: string;
  SDMSid: string;
  iBatchNumber: string;
  Action: unknown;
}

export const batchColumns = (
  navigate: (path: string) => void
): Column<BatchData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "pklBatchId" },
  { Header: "SDMS  ID", accessor: "SDMSid" },
  { Header: "Batch Name", accessor: "iBatchNumber" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/batch/${row.original.pklBatchId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface AssessorsData {
  id: number;
  vsAssosserName: string;
  vsEmail: string;
  Mobile: string;
  vsMobile: string;
  vsAssesmentAgency: string;
  dtValidUpTo: string
  Action: unknown;
}

export const assessorsColumns = (
  navigate: (path: string) => void
): Column<AssessorsData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Assessor Name", accessor: "vsAssosserName" },
  { Header: "Name", accessor: "vsEmail" },
 
  { Header: "Mobile", accessor: "vsMobile" },
  { Header: "Assessor Agency", accessor: "vsAssesmentAgency" },
  {
    Header: "Valid Upto",
    accessor: "dtValidUpTo",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/assessors/${row.original.id}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];


interface TrainerData {
  pklConvTrainerId: number;
  // trainerId: string;
  vsTrainerName: string;
  vsEmail: string;
  vsMobile: string;
  vsPAN: string;
  Action: unknown;
}

export const trainerColumns = (
  navigate: (path: string) => void
): Column<TrainerData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  // { Header: "Trainer ID", accessor: "trainerId" },
  { Header: "Trainer Name", accessor: "vsTrainerName" },
  { Header: "Mobile", accessor: "vsMobile" },
  { Header: "Email", accessor: "vsEmail" },
  { Header: "IDCard", accessor: "vsPAN" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/trainer/${row.original.pklConvTrainerId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];


interface AssessmentData {
  pklConvAssessmentId: string;
  batchId: string;
  SDMSBatchId: string;
  candidateId: string;
  dtAssessmentDate: string;
  vsAgency: string;
  vsTotalMarks: string;
  vsObtainedMarks: string;
  vsMarksheetUrl: string;
  vsCertificateUrl: string;
  vsAccessorName: string;
  vsResult: string;
  dtResultDate: string;
  Action: unknown;
}

export const assessmentColumns = (
  navigate: (path: string) => void
): Column<AssessmentData>[] => [
  { Header: "SlNo.", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "batchId" },
  { Header: "SDMS Batch ID", accessor: "SDMSBatchId" },
  { Header: "Candidate ID", accessor: "candidateId" },
  { Header: "Assessment Date", accessor: "dtAssessmentDate",  Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A", },
  { Header: "Agency", accessor: "vsAgency" },
 
  { Header: "Accessor Name", accessor: "vsAccessorName" },
  { Header: "Result", accessor: "vsResult" },
  { Header: "Result Date", accessor: "dtResultDate" ,  Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",},
 
  {
    Header: "Marksheet",
    accessor: "vsMarksheetUrl",
    Cell: ({ row }) => (
      <a
        href={row.original.vsMarksheetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View
      </a>
    ),
  },
  {
    Header: "Certificate",
    accessor: "vsCertificateUrl",
    Cell: ({ row }) => (
      <a
        href={row.original.vsCertificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View
      </a>
    ),
  },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/assessment/${row.original.pklConvAssessmentId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface PlacementData {
  pklConvPlacementId: string;
  batchId: string;
  candidateId: string;
  bIsCandidatePlaced: string;
  vsEmployeerName: string;
  vsPlacementType: string;
 
  Action: unknown;
}

export const placementColumns = (
  navigate: (path: string) => void
): Column<PlacementData>[] => [
  { Header: "SlNo.", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "batchId"},
  { Header: "Candidate ID", accessor: "candidateId" },
  { Header: "Is Placed", accessor: "bIsCandidatePlaced" },
  { Header: "Placement Type", accessor: "vsPlacementType" },
  { Header: "Employer Name", accessor: "vsEmployeerName" },
 
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/placement/${row.original.pklConvPlacementId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];



interface DepartmentListData {
  id: string;
  BatchId: string;
  departmentName: string;
  adminName: string;
  phoneNumber: string;
  createdDate: string;
  userName: string;
}

export const departmentListColumns: Column<DepartmentListData>[] = [
  {
    Header: "Sl. No.",
    accessor: (_, index) => index + 1,
    id: "sl_no",
  },
  {
    Header: "Department Name",
    accessor: "departmentName",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "Contact Number",
    accessor: "phoneNumber",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "User Name",
    accessor: "userName",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "Created Time",
    accessor: "createdDate",
    Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",
  },
  {
    Header: "Created By",
    accessor: "adminName",
    Cell: ({ value }) => value ?? "N/A",
  },
];

interface InvoiceData {
  pklConvInvoiceId: string;
  vsInvoiceTranche: string;
  vsInvoiceDate: string;
  vsInvoiceNo: string;
  fAmount: string;
  fRate: string;
  iTotalCandidate: string;
 
  Action: unknown;
}

export const invoiceColumns = (
  navigate: (path: string) => void
): Column<InvoiceData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Invoice Tranche", accessor: "vsInvoiceTranche" },
  { Header: "Date", accessor: "vsInvoiceDate" , Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A"},
  { Header: "Invoice Number", accessor: "vsInvoiceNo" },
  { Header: "Amount", accessor: "fAmount" },
  { Header: "Rate", accessor: "fRate" },
  { Header: "Total Candidate", accessor: "iTotalCandidate" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/invoice/${row.original.pklConvInvoiceId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];



interface CandidateData {
  id: string;
  BatchId: string;
  CandidateId: string;
  CandidateName: string;
  FatherName: string;
  MotherName: string;
  DOB: string;
  Age: string;
  Gender: string;
  Action: unknown;
}

export const candidateColumns = (
  navigate: (path: string) => void
): Column<CandidateData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "Candidate ID", accessor: "CandidateId" },
  { Header: "Candidate Name", accessor: "CandidateName" },
  { Header: "Father Name", accessor: "FatherName" },
  { Header: "Mother Name", accessor: "MotherName" },
  { Header: "Date of Birth", accessor: "DOB" },
  { Header: "Age", accessor: "Age" },
  { Header: "Gender", accessor: "Gender" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/candidate/${row.original.CandidateId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

