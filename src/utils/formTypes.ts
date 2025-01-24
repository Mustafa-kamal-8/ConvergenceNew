
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
  vsState: number,
  vsDistrict: number,
  vsBlock: number,
  vsVillage: string,
  vsAddress: string,
  vsSmartId: string,
  isVillageCity: string;
  vsCity: string;
  vsULB: number;
  }

  export interface TrainingCenterFormData {
    vsTpName: string,
    partnerCode: string;
    vsTcName: string;
    vsTcCode: string;
    vsSpocEmail: string;
    vsSpocName: string;
    iSpocContactNum: string;
    smartId: string;
    vsState: number;
    vsULB:number;
    vsCity:number;
    vsDistrict: number;
    vsBlock: number;
    vsVillage: string;
    vsAddress: string;
    isVillageCity: string; 
    fklAssemblyConstituencyId: number;
    fklLoksabhaConstituencyId:number;
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
  iBatchNumber: number;
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
  batchId: number;
 
  candidateId: string;
 
  dtAssessmentDate: string;
  // agency: string;
  // agencyMobile: string;
  // agencyEmail: string;
  accessorId: string;
  vsAccessorName: string;
  vsResult: string;
  dtResultDate: string;
  vsCertificationStatus: string;
  vsTotalMarks: string;
  obtainedMarks: number;
  marksheetUrl: string;
  certificateUrl: string;
  fklTpId: number;
  fklTcId: number;
  SDMSBatchId: string;
  vsObtainedMarks: string;
  vsMarksheetUrl: string;
  vsCertificateUrl: string;
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
  vsGender: number;
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
  batchId: number;

  //current address
  vsRAddress: string;
  vsRState: number,
  vsRDistrict: number;
  vsRBlock:number;
  vsRUlb: number;
  isRCityVillage:string;
  vsRPostOffice: string;
  vsRPolice: string;
  vsRPIN: string;
  vsRCouncilContituency: number;
  vsRAssemblyContituency: number;
  vsRVillageCity : string

  //present address
  vsPAddress:string;
  vsPDistrict: number;
  vsPBlock: number
  vsPUlb: number;
  vsPVillageCity:string;
  vsPPostOffice:string;
  vsPPolice: string;
  vsPPIN: number;
  vsPCouncilContituency: number;
  vsPAssemblyContituency: number;
  iSameAddress: number;
  vsPState : number;
 

  //bank details
  vsBankHolderName: string;

  vsAccountNumber: string;
  vsBankName: number;
  vsBranchName: number;
  vsBankIFSC: string;
}
