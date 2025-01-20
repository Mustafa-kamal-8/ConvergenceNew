import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import ModalOpenButton from "../components/ui/ModelOpenButton";
import { Plus } from "lucide-react";
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
) => Column<SchemeData>[] = (navigate) => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme", accessor: "vsSchemeName" },
  {
    Header: "Targets",
    accessor: "count",
    Cell: ({ row }: { row: { original: SchemeData } }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            color: "red",
            textDecoration: "underline",
          }}
          onClick={() =>
            navigate(`/Scheme/Targets/${row.original.pklSchemeId}`)
          }
        >
          {row.original.count || "N/A"}
        </span>
        <ModalOpenButton
          modalType={1}
          modalTitle="Add Target"
          bulkName="target"
          Icon={Plus}
          id={row.original.pklSchemeId}
          variant="table"
        />
      </div>
    ),
  },
  { Header: "Scheme Type", accessor: "vsSchemeType" },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Fund Name", accessor: "vsFundName" },
  { Header: "Fund Type", accessor: "vsSchemeFundingType" },
  { Header: "Fund Ratio", accessor: "vsSchemeFUndingRatio" },
  { Header: "Order Number", accessor: "sanctionOrderNo" },
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
  dtcreatedAt: string;
  vsSectorName: string;
  Action: unknown;
}

export const courseColumns = (
  navigate: (path: string) => void
): Column<CourseData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Sector Name", accessor: "vsSectorName" },
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
  { Header: "Job Role Name", accessor: "vsCourseName" },
  { Header: "Total Theory Hours", accessor: "iTheoryDurationInHours" },
  { Header: "Total Practical Hours", accessor: "iPracticalDurationInHours" },
  {
    Header: "Created At",
    accessor: "dtcreatedAt",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
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
) => Column<TrainingPartnerData>[] = (navigate) => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  {
    Header: "Centers",
    accessor: "count", 
    Cell: ({ row }: { row: { original: TrainingPartnerData } }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            color: "red",
            textDecoration: "underline",
          }}
          onClick={() =>
            navigate(`/TrainingPartner/Centeres/${row.original.pklTpId}`)
          }
        >
           {row.original.count || "N/A"}
        </span>
        <ModalOpenButton
          modalType={12}
          modalTitle="Add Centers"
          bulkName="trainingCenter"
          Icon={Plus}
          id={row.original.pklTpId}
          variant="table"
        />
      </div>
    ),
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
  id: string;
  BatchId: string;
  SDMSBatchId: string;
  BatchDuration: string;
  TrainingPartner: string;
  TrainingCenter: string;
  Trainer: string;

  Sector: string;
  JobRole: string;
  QPNOSCode: string;

  Action: unknown;
}

export const batchColumns: Column<BatchData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "SDMS Batch ID", accessor: "SDMSBatchId" },
  { Header: "Batch Duration", accessor: "BatchDuration" },
  { Header: "Training Partner ", accessor: "TrainingPartner" },
  { Header: "Training Center", accessor: "TrainingCenter" },
  { Header: "Trainer ", accessor: "Trainer" },

  { Header: "Sector", accessor: "Sector" },
  { Header: "Job Role", accessor: "JobRole" },
  { Header: "QPNOSCode", accessor: "QPNOSCode" },
  { Header: "Action", accessor: "Action" },
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
  trainerId: string;
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
  { Header: "Trainer ID", accessor: "trainerId" },
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
  id: string;
  BatchId: string;
  SDMSBatchId: string;
  CandidateId: string;
  AssessedId: string;
  AssesmentDate: string;
  Agency: string;
  AgencyMobile: string;
  AgencyEmail: string;
  AccessorId: string;
  AccessorName: string;
  Result: string;
  ResultDate: string;
  CertificationStatus: string;
  TotalMarks: string;
  ObtainedMarks: string;
  MarksheetURL: string;
  CertificateURL: string;
  Action: unknown;
}

export const assessmentColumns: Column<AssessmentData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "SDMS Batch ID", accessor: "SDMSBatchId" },
  { Header: "Candidate ID", accessor: "CandidateId" },
  { Header: "Assessed ID ", accessor: "AssessedId" },
  { Header: "Assesment Date ", accessor: "AssesmentDate" },
  { Header: "Agency", accessor: "Agency" },
  { Header: "Agency Mobile", accessor: "AgencyMobile" },
  { Header: "AgencyEmail", accessor: "AgencyEmail" },
  { Header: "Accessor ID", accessor: "AccessorId" },
  { Header: "Accessor Name ", accessor: "AccessorName" },
  { Header: "Result ", accessor: "Result" },
  { Header: "ResultDate ", accessor: "ResultDate" },
  { Header: "Certification Status", accessor: "CertificationStatus" },
  { Header: "Total Marks", accessor: "TotalMarks" },
  { Header: "Obtained Marks ", accessor: "ObtainedMarks" },
  { Header: "Marksheet URL", accessor: "MarksheetURL" },
  { Header: "Certificate URL", accessor: "CertificateURL" },
  { Header: "Action", accessor: "Action" },
];

interface PlacementData {
  id: string;
  BatchId: string;
  CandidateId: string;
  IsPlaced: string;
  PlacementType: string;
  EmployerName: string;
  EmployerContact: string;
  PlacementState: string;
  PlacementDistrict: string;
  MonthlySalary: string;
  Action: unknown;
}

export const placementColumns: Column<PlacementData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "Candidate ID", accessor: "CandidateId" },
  { Header: "Is Placed ", accessor: "IsPlaced" },
  { Header: "Placement Type ", accessor: "PlacementType" },
  { Header: "Employer Name", accessor: "EmployerName" },
  { Header: "Employer Contact", accessor: "EmployerContact" },
  { Header: "Placement State", accessor: "PlacementState" },
  { Header: "PlacementDistrict", accessor: "PlacementDistrict" },
  { Header: "Monthly Salary", accessor: "MonthlySalary" },
  { Header: "Action", accessor: "Action" },
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
  id: string;
  BatchId: string;
  InvoiceType: string;

  InvoiceNumber: string;
  InvoiceDate: string;
  NoOfCandidates: string;
  Rate: string;
  Amount: string;
  Action: unknown;
}

export const invoiceColumns: Column<InvoiceData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "Invoice Type", accessor: "InvoiceType" },
  { Header: "Invoice Number", accessor: "InvoiceNumber" },
  { Header: "Invoice Date ", accessor: "InvoiceDate" },
  { Header: "No OF Candidates ", accessor: "NoOfCandidates" },
  { Header: "Rate", accessor: "Rate" },
  { Header: "Amount", accessor: "Amount" },
  { Header: "Action", accessor: "Action" },
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

export const candidateColumns: Column<CandidateData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Batch ID", accessor: "BatchId" },
  { Header: "Candidate ID", accessor: "CandidateId" },
  { Header: "Candidate Name", accessor: "CandidateName" },
  { Header: "Father Name", accessor: "FatherName" },
  { Header: "Mother Name", accessor: "MotherName" },
  { Header: "Date of Birth", accessor: "DOB" },
  { Header: "Age", accessor: "Age" },
  { Header: "Gender", accessor: "Gender" },
  { Header: "Action", accessor: "Action" },
];
