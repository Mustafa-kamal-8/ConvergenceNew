import { Column } from 'react-table';

interface SchemeData {
  id: string;
  Scheme: string;
  SchemeType: string;
  SchemeCode: string;
  FundName: string;
  FundType: string;
  FundRatio: string;
  OrderNumber: string;
  SantionDate: string;
  Action: any;
}

export const candidateColumns: Column<SchemeData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Scheme", accessor: "Scheme" },
  { Header: "Scheme Type", accessor: "SchemeType" },
  { Header: "Scheme Code", accessor: "SchemeCode" },
  { Header: "Fund Name", accessor: "FundName" },
  { Header: "Fund Type", accessor: "FundType" },
  { Header: "Fund Ratio", accessor: "FundRatio" },
  { Header: "Order Number", accessor: "OrderNumber" },
  { Header: "Santion Date", accessor: "SantionDate" },
  { Header: "Action", accessor: "Action" },
];







interface TargetData {
  id: string;
  SchemeCode: string;
  SanctionOrderNumber: string;
  DateOfSanction: string;
  TotalTarget: string;
  Action: any;
}
export const targetColumns: Column<TargetData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Scheme Code", accessor: "SchemeCode" },
  { Header: "Sanction Order Number", accessor: "SanctionOrderNumber" },
  { Header: "Date Of Sanction", accessor: "DateOfSanction" },
  { Header: "TotalTarget", accessor: "TotalTarget" },
  { Header: "Action", accessor: "Action" },
];







interface CourseData {
  id: string;
  SectorName: string;
  QPNOSCode: string;
  JobRoleName: string;
  TotalTheoryHours: string;
  TotalPracticalHours: string;
  DateValidUpto: string;
  Action: any;
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
  Action: any;
}


export const trainingColumns: Column<TrainingPartnerData>[] = [
  { Header: "ID", accessor: "id" },
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
  { Header: "Action", accessor: "Action" },
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
 
  Action: any;
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
  Action: any;
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
  Action: any;
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
  Action: any;
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
  Action: any;
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
  Action: any;
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

