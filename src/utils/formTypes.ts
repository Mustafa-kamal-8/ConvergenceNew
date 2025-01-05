
export interface SchemeFormData {
    selectedSchemeType: string
    selectedFundingType: string;
    schemeName: string;
    schemeCode: string;
    fundName: string;
    schemeFundingType: string
    schemeFundingRatio: string
    schemeOrderNumber: string
    dateOfSanction: string;
    selectedScheme: string
  }

export interface CourseFormData  {
    sectorName: string;
    qpnosCode: string;
    jobRoleName: string;
    totalTheoryHours: string;
    totalPracticalHours: string;
    dateValidFrom: string;
    dateValidUpto: string;
  };
  
 export interface TrainingPartnerFormData {
    partnerID: string;
    name: string;
    spocName: string;
    smartID: string;
    mobile: string;
    email: string;
    address: string;
    state: string;
    district: string;
    blockULB: string;
    villageCity: string;
  }


export interface AssessorFormData {
  assessorID: string;
  assessorName: string;
  email: string;
  mobile: string;
  assessmentAgency: string;
  validUpTo: string;
}

export interface TrainerFormData {
  trainerID: string;
  trainerName: string;
  mobile: string;
  trainerEmail: string;
  idCard: string;
}

export interface BatchFormData {
  batchId: string;
  sdmsBatchId: string;
  batchDuration: [Date | null, Date | null]; 
  trainingPartner: string;
  trainingCenter: string;
  trainer: string;
  sector: string;
  jobRole: string;
  qpnosCode: string;
}

export type AssessmentFormData = {
  batchId: string;
  sdmsBatchId: string;
  candidateId: string;
  assessedId: string;
  assessmentDate: string;
  agency: string;
  agencyMobile: string;
  agencyEmail: string;
  accessorId: string;
  accessorName: string;
  result: string;
  resultDate: string;
  certificationStatus: string;
  totalMarks: number;
  obtainedMarks: number;
  marksheetUrl: string;
  certificateUrl: string;
};


export interface PlacementFormData {
  batchId: string;
  candidateId: string;
  isCandidatePlaced: "yes" | "no" | "";
  placementType: string;
  employerName: string;
  employerContactNumber: string;
  placementState: string;
  placementDistrict: string;
  monthlySalary: string;
}

export interface InvoiceFormData {
  batchId: string;
  invoiceType: string;
  invoiceTranche: string;
  invoiceNumber: string;
  invoiceDate: string;
  noOfCandidates: string;
  rate: string;
  amount: string;
}
