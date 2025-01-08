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
  vsSchemeFundingRatio: string;
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{ cursor: "pointer", color: "red", textDecoration: "underline" }}
          onClick={() => navigate(`/Scheme/Targets/${row.original.pklSchemeId}`)}
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
  { Header: "Fund Ratio", accessor: "vsSchemeFundingRatio" },
  { Header: "Order Number", accessor: "sanctionOrderNo" },
  {
    Header: "Sanction Date",
    accessor: "dtSanctionDate",
    Cell: ({ value }: { value: string }) =>
      moment(value).format("YYYY-MM-DD"), 
  },
];



interface TargetData {
  id: number;
  SchemeCode: string;
  SanctionOrderNumber: string;
  DateOfSanction: string;
  TotalTarget: string;
  Action: unknown;
}

export const targetColumns = (navigate: (path: string) => void): Column<TargetData>[] => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme Code", accessor: "SchemeCode" },
  { Header: "Sanction Order Number", accessor: "SanctionOrderNumber" },
  { Header: "Date Of Sanction", accessor: "DateOfSanction" },
  { Header: "Total Target", accessor: "TotalTarget" },
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



interface CourseData {
  id: string;
  SectorName: string;
  QPNOSCode: string;
  JobRoleName: string;
  TotalTheoryHours: string;
  TotalPracticalHours: string;
  DateValidUpto: string;
  Action: unknown;
}



export const courseColumns: Column<CourseData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Sector Name", accessor: "SectorName" },
  { Header: "QPNOS Code", accessor: "QPNOSCode" },
  { Header: "Job Role Name", accessor: "JobRoleName" },
  { Header: "Total Theory Hours", accessor: "TotalTheoryHours" },
  { Header: "Total Practical Hours", accessor: "TotalPracticalHours" },
  { Header: "Date Valid Upto ", accessor: "DateValidUpto" },
  { Header: "Action", accessor: "Action" },
];






interface TrainingPartnerData {
  id: string;
  Centeres: string;
  PartnerId: string;
  Name: string;
  SPOCName: string;
  SmartId: string;
  Mobile: string;
  Email: string;
  Address: string;       
  State: string;
  District: string;
  Block: string;
  Village: string;
  gftg: string;
  Action: unknown;
}


export const trainingColumns = (navigate: ReturnType<typeof useNavigate>): Column<TrainingPartnerData>[] => [
  { Header: "ID", accessor: "id" },
  { 
    Header: "Centers",
    accessor: "Centeres",
    Cell: ({ row }: { row: { original: TrainingPartnerData } }) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span 
          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          onClick={() => navigate(`/TrainingPartner/Centeres/${row.original.id}`)}
        >
          {row.original.Centeres}
        </span>
        <ModalOpenButton
          modalType={12}
          modalTitle="Add Centeres"
          bulkName="trainingCenter"
          Icon={Plus}
          id={row.original.id} 
          variant="table"
        />
      </div>
    ),
  },
  { Header: "Partner ID", accessor: "PartnerId" },
  { Header: "Name", accessor: "Name" },
  { Header: "SPOC Name", accessor: "SPOCName" },
  { Header: "Mobile ", accessor: "Mobile" },
  { Header: "Email", accessor: "Email" },
  { Header: "Address ", accessor: "Address" },
  { Header: "State", accessor: "State" },
  { Header: "District", accessor: "District" },
  { Header: "Block/ULB", accessor: "Block" },
  { Header: "Village/City", accessor: "Village" },
  { 
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }: { row: { original: TrainingPartnerData } }) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          onClick={() => navigate(`/TrainingPartner/Centeres/${row.original.id}`)}
        >
          {row.original.Centeres}
        </button>
        <ModalOpenButton
          modalType={12}
          modalTitle="Add Centeres"
          bulkName="trainingCenter"
          Icon={Plus}
          id={row.original.id} 
          variant="table"
        />
      </div>
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
  id: string;
  AssessorId: string;
  Name: string;
  Email: string;
  Mobile: string;
  AssessorAgency: string;
  ValidUpto: string;
  Action: unknown;
}
 


export const assessorsColumns: Column<AssessorsData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Assessor ID", accessor: "AssessorId" },
  { Header: "Name", accessor: "Name" },
  { Header: "Email", accessor: "Email" },
  { Header: "Mobile ", accessor: "Mobile" },
  { Header: "Assessor Agency", accessor: "AssessorAgency" },
  { Header: "Valid Upto ", accessor: "ValidUpto" },
  { Header: "Action", accessor: "Action" },
];



interface TrainerData {
  id: string;
  TrainerId: string;
  TrainerName: string;

  Mobile: string;
  Email: string;
  IDCard: string;
  Action: unknown;
}

export const trainerColumns: Column<TrainerData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Trainer ID", accessor: "TrainerId" },
  { Header: "Trainer Name", accessor: "TrainerName" },
  { Header: "Mobile", accessor: "Mobile" },
  { Header: "Email ", accessor: "Email" },
  { Header: "IDCard ", accessor: "IDCard" },
  { Header: "Action", accessor: "Action" },
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
  AccessorId : string;
  AccessorName: string;
  Result: string;
  ResultDate: string;
  CertificationStatus: string;
  TotalMarks : string;
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



interface CenterData {
  id: string;
    TpId: string;
    PartnerId: string;
    Name: string;
    CenterId: string;
    SmartId: string;
    spocName: string;
    Mobile: string;
    Email: string;
    Address: string;
    State: string;
    District: string;
    Block: string;
    Village: string;
    Constituency: string;
    Action: unknown;
}

export const centerColumns: Column<CenterData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "TP ID", accessor: "TpId" },
  { Header: "Partner ID", accessor: "PartnerId" },
  { Header: "Center Name", accessor: "Name" },
  { Header: "Center ID", accessor: "CenterId" },
  { Header: "Samrt ID", accessor: "SmartId" },
  { Header: "SPOC Name", accessor: "spocName" },
  { Header: "SPOC Mobile", accessor: "Mobile" },
  { Header: "SPOC Email", accessor: "Email" },
  { Header: "Address", accessor: "Address" },
  { Header: "State", accessor: "State" },
  { Header: "District", accessor: "District" },
  { Header: "Block", accessor: "Block" },
  { Header: "Village", accessor: "Village" },
  { Header: "Constituency", accessor: "Constituency" },
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
