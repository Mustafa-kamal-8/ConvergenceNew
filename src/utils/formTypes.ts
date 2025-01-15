
export interface SchemeFormData {
  schemeType: string
    // selectedFundingType: string;
    scheme: string;
    schemeCode: string;
    fundName: string;
    schemeFundingType: string
    schemeFundingRatio: string
    sanctionOrderNo: string
    dateOfSanction: string;
    // selectedScheme: string
  }

export interface CourseFormData  {
  dtFromDate: string,
  dtToDate: string,
  fklSectorId: string,
  vsCourseCode: string,
  vsCourseName: string,
  iTheoryDurationInHours: string,
  iPracticalDurationInHours: string,

  };
  
 export interface TrainingPartnerFormData {
  vsTpName: string,
  vsSpocEmail: string,
  iSpocContactNum: string,
  vsSpocName: string,
  vsTpCode: string,
  vsState: number,
  vsDistrict: string,
  vsBlock: string,
  vsVillage: string,
  vsAddress: string,
  vsSmartId: string,
  }


export interface AssessorFormData {
  assosserId: number;
  vsAssosserName: string;
  vsEmail: string;
  vsMobile: string;
  vsAssesmentAgency: string;
  dtValidUpTo: string;
}

export interface TrainerFormData {
  trainerId: string;
  vsTrainerName: string;
  vsMobile: string;
  vsEmail: string;
  vsPAN: string;
}

export interface BatchFormData {
  batchID: number;
  SDMSid: string;
  dtStartDate: string;
  dtEndDate: string;
  fklSectorId: number;
  QPNOS: string;
  fklCourseId: number;
  fklTpId: number;
  fklTcId: number;
  fklTrainerId: number;
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

export interface targetFormData{
  sanctionOrderNo: string;
  vsSchemeCode: string;
  dtSanctionDate: string
  iTotalTarget: number;

}

export interface candidateFormData{
  candidateId: number;
  vsCandidateName: string;
  vsDOB: string;
  iAge: string;
  vsFatherName: string;
  vsGender: string;
  fklIdType: number;
  vsUUID:string;
  fklReligionId: number;
  fklCategoryId: number;
  vsMobile: string;
  vsEmail: string;
  vsEducationAttained: string;
  bDisability: number;
  bTeaTribe: number;
  bBPLcardHolder: number;
  bMinority: number;

  //current address
  vsRAddress: string;
  vsRDistrict: number;
  vsRBlock:number;
  vsRUlb: number;
  vsRVillageCity:string;
  vsRPostOffice: string;
  vsRPolice: string;
  vsRPIN: string;
  vsRCouncilContituency: number;
  vsRAssemblyContituency: number;

  //present address
  vsPAddress:string;
  vsPDistrict: number;
  vsPBlock: number
  vsPUlb: number;
  vsPVillageCity:number
  vsPPostOffice:string;
  vsPPolice: string;
  vsPPIN: number;
  vsPCouncilContituency: number;
  vsPAssemblyContituency: number;
  vsSameAddress: number;

  //bank details
  vsBankHolderName: string;
  vsAccountNumber: string;
  vsBankName: string
  vsBankIFSC: string;
}
