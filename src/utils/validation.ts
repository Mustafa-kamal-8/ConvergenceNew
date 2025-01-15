import Joi from "joi";
import { SchemeFormData } from "./formTypes";

export const SchemeValidation = Joi.object<SchemeFormData>({
  // selectedSchemeType: Joi.string()
  //   .valid("Type 1", "Type 2", "Type 3")
  //   .required()
  //   .messages({
  //     "any.required": "Scheme Type is required.",
  //     "string.empty": "Scheme Type is required.",
  //   }),

  // selectedFundingType: Joi.string()
   
  //   .required()
  //   .messages({
  //     "any.required": "Funding Type is required.",
  //     "string.empty": "Funding Type is required.",
  //   }),

  scheme: Joi.string()
  .required()
  .messages({
    "any.required": "Name is required.",
    "string.empty": "Name  is required.",
  }),

  schemeType: Joi.string()
  .required()
  .messages({
    "any.required": "Name is required.",
    "string.empty": "Name  is required.",
  }),

  schemeCode: Joi.string()
    .required()
    .messages({
      "any.required": "Scheme Code is required.",
      "string.empty": "Scheme Code is required.",
    }),

  fundName: Joi.string()
    .required()
    .messages({
      "any.required": "Fund Name is required.",
      "string.empty": "Fund Name is required.",
    }),

  schemeFundingType: Joi.string()
   
    .required()
    .messages({
      "any.required": "Funding Type is required.",
      "string.empty": "Funding Type is required.",
    }),

  schemeFundingRatio: Joi.number()
    .required()
    .messages({
      "any.required": "Funding Ratio is required.",
      "number.empty": "Funding Ratio is required.",
    }),

    sanctionOrderNo: Joi.string()
    .required()
    .messages({
      "any.required": "Scheme Order Number is required.",
      "string.empty": "Scheme Order Number is required.",
    }),

    dateOfSanction: Joi.date()
    .required()
    .messages({
      "any.required": "Date of Sanction is required.",
      "date.base": "Invalid date format.",
    }),
  
});


export const courseSchema = Joi.object({
  fklSectorId: Joi.number().required().label("Sector Name").messages({
    "string.empty": "Sector Name is required.",
  }),
  vsCourseCode: Joi.string().required().label("QPNOS Code").messages({
    "string.empty": "QPNOS Code is required.",
  }),
  vsCourseName: Joi.string().required().label("Job Role Name").messages({
    "string.empty": "Job Role Name is required.",
  }),
  iTheoryDurationInHours: Joi.number().required().messages({
    "number.base": "Total Theory Hours must be a number.",
    "any.required": "Total Theory Hours is required.",
  }),
  iPracticalDurationInHours: Joi.number().required().messages({
    "number.base": "Total Practical Hours must be a number.",
    "any.required": "Total Practical Hours is required.",
  }),
  dtFromDate: Joi.date().required().messages({
    "date.base": "Date Valid From must be a valid date.",
    "any.required": "Date Valid From is required.",
  }),
  dtToDate: Joi.date().required().messages({
    "date.base": "Date Valid Upto must be a valid date.",
    "any.required": "Date Valid Upto is required.",
  }),
});


export const trainingPartnerSchema = Joi.object({
  vsTpName: Joi.string().required().label("Partner Name").messages({
    "string.empty": "Partner Name is required.",
    "any.required": "Partner Name is required.",
  }),
  vsSpocName: Joi.string().required().label("SPOC Name").messages({
    "string.empty": "SPOC Name is required.",
    "any.required": "SPOC Name is required.",
  }),
  vsTpCode: Joi.string().required().label("TP Code").messages({
    "string.empty": "Partner ID is required.",
    "any.required": "Partner ID is required.",
  }),
  vsState: Joi.string().required().label("State").messages({
    "string.empty": "State is required.",
    "any.required": "State is required.",
  }),
  iSpocContactNum: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Mobile")
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must be 10 digits.",
      "any.required": "Mobile number is required.",
    }),
    vsSpocEmail: Joi.string()
    .email({ tlds: { allow: false } }) 
    .required()
    .label("Email")
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),
  
    vsDistrict: Joi.string().required().label("Address").messages({
    "string.empty": "District is required.",
    "any.required": "District is required.",
  }),
  vsBlock: Joi.string().required().label("Block").messages({
    "string.empty": "Block is required.",
    "any.required": "Block is required.",
  }),
  vsVillage: Joi.string().required().label("Village").messages({
    "string.empty": "Village is required.",
    "any.required": "Village is required.",
  }),
  vsAddress: Joi.string().required().label("Address").messages({
    "string.empty": "Address is required.",
    "any.required": "Address is required.",
  }),
  vsSmartId: Joi.string().required().label("Smart ID").messages({
    "string.empty": "Smart ID is required.",
    "any.required": "Smart ID is required.",
  }),
});



export const assessorSchema = Joi.object({
  assosserId: Joi.number().required().label("Assessor ID").messages({
    "string.empty": "Assessor ID is required.",
  }),
  vsAssosserName: Joi.string().required().label("Assessor Name").messages({
    "string.empty": "Assessor Name is required.",
  }),
  vsEmail: Joi.string()
  .email({ tlds: { allow: false } }) 
  .required()
  .label("Email")
  .messages({
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "any.required": "Email is required.",
  }),
  vsMobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required().label("Mobile")
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must be 10 digits.",
    }),
    vsAssesmentAgency: Joi.string().required().label("Assessor Agency").messages({
    "string.empty": "Assessment Agency is required.",
  }),
  dtValidUpTo: Joi.date().required().label("Valid Upto").messages({
    "date.base": "Valid Up To must be a valid date.",
  }),
});


export const trainerSchema = Joi.object({
  trainerId: Joi.string().required().messages({
    "string.empty": "Trainer ID is required.",
    "any.required": "Trainer ID is required.",
  }),
  vsTrainerName: Joi.string().required().messages({
    "string.empty": "Trainer Name is required.",
    "any.required": "Trainer Name is required.",
  }),
  vsMobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Mobile number must be 10 digits.",
    "any.required": "Mobile number is required.",
  }),
  vsEmail: Joi.string()
  .email({ tlds: { allow: false } }) 
  .required()
  .label("Email")
  .messages({
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "any.required": "Email is required.",
  }),
  vsPAN: Joi.string().required().messages({
    "string.empty": "ID Card (PAN/Voter) is required.",
    "any.required": "ID Card is required.",
  }),
});

export const batchSchema = Joi.object({
  batchID: Joi.number().required().label("Batch ID").messages({
    "string.empty": "Batch ID is required.",
  }),
  SDMSid: Joi.string().required().label("SDMS ID").messages({
   "string.empty": "SDMS ID is required.",
  }),

  dtStartDate: Joi.date().required().label("Start Date").messages({
    "date.base": "Start Date To must be a valid date.",
  }),
  dtEndDate: Joi.date().required().label("End Date").messages({
    "date.base": "End Date To must be a valid date.",
  }),
  fklSectorId: Joi.number().required().label("Sector ID").messages({
    "string.empty": "Sector ID is required.",
  }),
 
  QPNOS: Joi.string().required().label("QPNOS").messages({
    "string.empty": "QPNOS is required.",
  }),
  fklCourseId: Joi.number().required().label("Course ID").messages({
   "string.empty": "Course ID is required.",
  }),
  fklTpId: Joi.number().required().label("Training Partner ID").messages({
    "string.empty": "Training Partner ID is required.",
  }),
  fklTcId: Joi.number().required().label("Training Center ID").messages({
    "string.empty": "Training Center ID is required.",
  }),
  fklTrainerId: Joi.number().required().label("Trainer ID").messages({
    "string.empty": "Trainer ID required.",
  }),

});



export const assessmentValidationSchema = Joi.object({
  batchId: Joi.string().required().messages({
    "string.base": `"Batch ID" should be a type of 'text'`,
    "any.required": `"Batch ID" is a required field`,
  }),
  sdmsBatchId: Joi.string().required().messages({
    "string.base": `"sdmsBatchId" should be a type of 'text'`,
    "any.required": `"sdmsBatchId" is a required field`,
  }),
  candidateId: Joi.string().required().messages({
    "string.base": `"candidateId" should be a type of 'text'`,
    "any.required": `"candidateId" is a required field`,
  }),
  assessedId: Joi.string().required().messages({
    "string.base": `"assessedId" should be a type of 'text'`,
    "any.required": `"assessedId" is a required field`,
  }),
  assessmentDate: Joi.date().required().messages({
    "string.base": `"assessmentDate" should be a type of 'text'`,
    "any.required": `"assessmentDate" is a required field`,
  }),
  agency: Joi.string().required().messages({
    "string.base": `"agency" should be a type of 'text'`,
    "any.required": `"agency" is a required field`,
  }),
  agencyMobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Mobile number must be 10 digits.",
    "any.required": "Mobile number is required.",
  }),
    agencyEmail: Joi.string()
    .email({ tlds: { allow: false } }) 
    .required()
    .label("Email")
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),
  result: Joi.string().required().messages({
    "string.base": `"result" should be a type of 'text'`,
    "any.required": `"result" is a required field`,
  }),
  resultDate: Joi.date().required().messages({
    "string.base": `"resultDate" should be a type of 'text'`,
    "any.required": `"resultDate" is a required field`,
  }),
});


export const placementValidationSchema = Joi.object({
  batchId: Joi.string().required().messages({
    "string.base": `"Batch ID" should be a type of 'text'`,
    "any.required": `"Batch ID" is a required field`,
  }),
  candidateId: Joi.string().required().messages({
    "string.base": `"Candidate ID" should be a type of 'text'`,
    "any.required": `"Candidate ID" is a required field`,
  }),
  isCandidatePlaced: Joi.string().valid("yes", "no").required().messages({
    "string.base": `"Is Cnadidate Placed" should be a type of 'text'`,
    "any.required": `"Is Cnadidate Placed"" is a required field`,
  }),
  placementType: Joi.string().required().messages({
    "string.base": `"Placement Type" should be a type of 'text'`,
    "any.required": `"Placement Type" is a required field`,
  }),
  employerName: Joi.string().required().messages({
    "string.base": `"Employe Name" should be a type of 'text'`,
    "any.required": `"Employe Name" is a required field`,
  }),
  employerContactNumber: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Mobile number must be 10 digits.",
    "any.required": "Mobile number is required.",
  }),
  placementState: Joi.string().required().messages({
    "string.base": `"Placement State" should be a type of 'text'`,
    "any.required": `"Placement State" is a required field`,
  }),
  placementDistrict: Joi.string().required().messages({
    "string.base": `"Placement District" should be a type of 'text'`,
    "any.required": `"Placement District" is a required field`,
  }),
  monthlySalary: Joi.string().required().messages({
    "string.base": `"Monthly Salary" should be a type of 'text'`,
    "any.required": `"Monthly Salary" is a required field`,
  }),
});


export const invoiceValidationSchema = Joi.object({
  batchId: Joi.string().required().messages({
    "string.base": `"Monthly Salary" should be a type of 'text'`,
    "any.required": `"Monthly Salary" is a required field`,
  }),
  invoiceType: Joi.string().required().messages({
    "string.base": `"Monthly Salary" should be a type of 'text'`,
    "any.required": `"Monthly Salary" is a required field`,
  }),
  invoiceTranche: Joi.string().required().messages({
    "string.base": `"Monthly Salary" should be a type of 'text'`,
    "any.required": `"Monthly Salary" is a required field`,
  }),
  invoiceNumber: Joi.string().required().messages({
    "string.base": `"Monthly Salary" should be a type of 'text'`,
    "any.required": `"Monthly Salary" is a required field`,
  }),
  invoiceDate: Joi.date()
    .required()
    .messages({
      "any.required": "Date of Invoice is required.",
      "date.base": "Invalid date format.",
    }),
  noOfCandidates: Joi.string()
    .pattern(/^\d+$/)
    .required()
    .messages({
      "string.empty": "No of Candidates is required",
      "string.pattern.base": "No of Candidates must be a valid number",
    }),
  rate: Joi.string()
    .pattern(/^\d+(\.\d{1,2})?$/)
    .required()
    .messages({
      "string.empty": "Rate is required",
      "string.pattern.base": "Rate must be a valid number",
    }),
  amount: Joi.string()
    .pattern(/^\d+(\.\d{1,2})?$/)
    .required()
    .messages({
      "string.empty": "Amount is required",
      "string.pattern.base": "Amount must be a valid number",
    }),
});


export const targetSchema = Joi.object({
  sanctionOrderNo: Joi.string().required().label("Sanction No").messages({
    "string.empty": "Sector Name is required.",
  }),
  vsSchemeCode: Joi.string().required().label("Scheme Code").messages({
    "string.empty": "Scheme Code is required.",
  }),
  dtSanctionDate: Joi.string().required().label("Sanction Date").messages({
    "string.empty": "Sanction Date is required.",
  }),
  iTotalTarget: Joi.number().required().label("Total Target").messages({
    "number.base": "Total Target must be a number.",
    "any.required": "Total Target is required.",
  }),
 
});


export const candidateSchema = Joi.object({
  candidateId: Joi.number().required().label("Candidate ID").messages({
    "any.required": "Candidate ID is required.",
  }),
  vsCandidateName: Joi.string().required().label("Candidate Name").messages({
    "string.empty": "Candidate Name is required.",
  }),
  vsDOB: Joi.date().required().label("Date of Birth").messages({
    "date.base": "Date of Birth must be a valid date.",
    "any.required": "Date of Birth is required.",
  }),
  iAge: Joi.number().integer().min(0).required().label("Age").messages({
    "number.base": "Age must be a number.",
    "number.min": "Age must be a positive number.",
    "any.required": "Age is required.",
  }),
  vsFatherName: Joi.string().required().label("Father's Name").messages({
    "string.empty": "Father's Name is required.",
  }),
  vsGender: Joi.string().valid("Male", "Female", "Other").required().label("Gender").messages({
    "any.only": "Gender must be Male, Female, or Other.",
    "any.required": "Gender is required.",
  }),
  fklIdType: Joi.number().required().label("ID Type").messages({
    "any.required": "ID Type is required.",
  }),
  vsUUID: Joi.string().required().label("UUID").messages({
    "string.empty": "UUID is required.",
  }),
  fklReligionId: Joi.number().required().label("Religion ID").messages({
    "any.required": "Religion ID is required.",
  }),
  fklCategoryId: Joi.number().required().label("Category ID").messages({
    "any.required": "Category ID is required.",
  }),
  vsMobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Mobile")
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must be 10 digits.",
    }),
  vsEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email")
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
  vsEducationAttained: Joi.string().required().label("Education Attained").messages({
    "string.empty": "Education Attained is required.",
  }),
  bDisability: Joi.number().valid(0, 1).required().label("Disability").messages({
    "any.only": "Disability must be 0 or 1.",
    "any.required": "Disability is required.",
  }),
  bTeaTribe: Joi.number().valid(0, 1).required().label("Tea Tribe").messages({
    "any.only": "Tea Tribe must be 0 or 1.",
    "any.required": "Tea Tribe is required.",
  }),
  bBPLcardHolder: Joi.number().valid(0, 1).required().label("BPL Card Holder").messages({
    "any.only": "BPL Card Holder must be 0 or 1.",
    "any.required": "BPL Card Holder is required.",
  }),
  bMinority: Joi.number().valid(0, 1).required().label("Minority").messages({
    "any.only": "Minority must be 0 or 1.",
    "any.required": "Minority is required.",
  }),
  // Current Address
  vsRAddress: Joi.string().required().label("Current Address").messages({
    "string.empty": "Current Address is required.",
  }),
  vsRDistrict: Joi.number().required().label("Current District").messages({
    "any.required": "Current District is required.",
  }),
  vsRBlock: Joi.number().required().label("Current Block").messages({
    "any.required": "Current Block is required.",
  }),
  vsRUlb: Joi.number().required().label("Current ULB").messages({
    "any.required": "Current ULB is required.",
  }),
  vsRVillageCity: Joi.string().required().label("Current Village/City").messages({
    "string.empty": "Current Village/City is required.",
  }),
  vsRPostOffice: Joi.string().required().label("Current Post Office").messages({
    "string.empty": "Current Post Office is required.",
  }),
  vsRPolice: Joi.string().required().label("Current Police Station").messages({
    "string.empty": "Current Police Station is required.",
  }),
  vsRPIN: Joi.string()
    .pattern(/^\d{6}$/)
    .required()
    .label("Current PIN")
    .messages({
      "string.pattern.base": "PIN must be 6 digits.",
      "string.empty": "Current PIN is required.",
    }),
  vsRCouncilContituency: Joi.number().required().label("Current Council Constituency").messages({
    "any.required": "Current Council Constituency is required.",
  }),
  vsRAssemblyContituency: Joi.number().required().label("Current Assembly Constituency").messages({
    "any.required": "Current Assembly Constituency is required.",
  }),

  vsSameAddress: Joi.number().valid(0, 1).required().label("Is Permanent Same as Present Adress").messages({
    "any.only": "Disability must be 0 or 1.",
    "any.required": "Disability is required.",
  }),

  // Present Address
  vsPAddress: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.string().required().label("Present Address").messages({
      "string.empty": "Present Address is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPDistrict: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.number().required().label("Present District").messages({
      "any.required": "Present District is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPBlock: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.number().required().label("Present Block").messages({
      "any.required": "Present Block is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPUlb: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.number().required().label("Present ULB").messages({
      "any.required": "Present ULB is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPVillageCity: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.string().required().label("Present Village/City").messages({
      "string.empty": "Present Village/City is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPPostOffice: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.string().required().label("Present Post Office").messages({
      "string.empty": "Present Post Office is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPPolice: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.string().required().label("Present Police Station").messages({
      "string.empty": "Present Police Station is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPPIN: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.string()
      .pattern(/^\d{6}$/)
      .required()
      .label("Present PIN")
      .messages({
        "string.pattern.base": "PIN must be 6 digits.",
        "string.empty": "Present PIN is required.",
      }),
    otherwise: Joi.optional(),
  }),
  vsPCouncilContituency: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.number().required().label("Present Council Constituency").messages({
      "any.required": "Present Council Constituency is required.",
    }),
    otherwise: Joi.optional(),
  }),
  vsPAssemblyContituency: Joi.when('vsSameAddress', {
    is: 0,
    then: Joi.number().required().label("Present Assembly Constituency").messages({
      "any.required": "Present Assembly Constituency is required.",
    }),
    otherwise: Joi.optional(),
  }),
  // Bank Details
  vsBankHolderName: Joi.string().required().label("Bank Holder Name").messages({
    "string.empty": "Bank Holder Name is required.",
  }),
  vsAccountNumber: Joi.string()
    .pattern(/^\d+$/)
    .required()
    .label("Account Number")
    .messages({
      "string.pattern.base": "Account Number must be numeric.",
      "string.empty": "Account Number is required.",
    }),
  vsBankName: Joi.string().required().label("Bank Name").messages({
    "string.empty": "Bank Name is required.",
  }),
  vsBankIFSC: Joi.string()
    .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .required()
    .label("Bank IFSC")
    .messages({
      "string.pattern.base": "Bank IFSC must be a valid IFSC code.",
      "string.empty": "Bank IFSC is required.",
    }),
});
