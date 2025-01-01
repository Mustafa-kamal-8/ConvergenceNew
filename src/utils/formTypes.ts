
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