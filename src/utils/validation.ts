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
  sectorName: Joi.string().required().label("Sector Name").messages({
    "string.empty": "Sector Name is required.",
  }),
  qpnosCode: Joi.string().required().label("QPNOS Code").messages({
    "string.empty": "QPNOS Code is required.",
  }),
  jobRoleName: Joi.string().required().label("Job Role Name").messages({
    "string.empty": "Job Role Name is required.",
  }),
  totalTheoryHours: Joi.number().required().messages({
    "number.base": "Total Theory Hours must be a number.",
    "any.required": "Total Theory Hours is required.",
  }),
  totalPracticalHours: Joi.number().required().messages({
    "number.base": "Total Practical Hours must be a number.",
    "any.required": "Total Practical Hours is required.",
  }),
  dateValidFrom: Joi.date().required().messages({
    "date.base": "Date Valid From must be a valid date.",
    "any.required": "Date Valid From is required.",
  }),
  dateValidUpto: Joi.date().required().messages({
    "date.base": "Date Valid Upto must be a valid date.",
    "any.required": "Date Valid Upto is required.",
  }),
});


export const trainingPartnerSchema = Joi.object({
  partnerID: Joi.string().required().label("Partner ID").messages({
    "string.empty": "Partner ID is required.",
    "any.required": "Partner ID is required.",
  }),
  name: Joi.string().required().label("Name").messages({
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),
  spocName: Joi.string().required().label("SPOC Name").messages({
    "string.empty": "SPOC Name is required.",
    "any.required": "SPOC Name is required.",
  }),
  smartID: Joi.string().required().label("Smart ID").messages({
    "string.empty": "Smart ID is required.",
    "any.required": "Smart ID is required.",
  }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Mobile")
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must be 10 digits.",
      "any.required": "Mobile number is required.",
    }),
    email: Joi.string()
    .email({ tlds: { allow: false } }) 
    .required()
    .label("Email")
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),
  
  address: Joi.string().required().label("Address").messages({
    "string.empty": "Address is required.",
    "any.required": "Address is required.",
  }),
  state: Joi.string().required().label("State").messages({
    "string.empty": "State is required.",
    "any.required": "State is required.",
  }),
  district: Joi.string().required().label("District").messages({
    "string.empty": "District is required.",
    "any.required": "District is required.",
  }),
  blockULB: Joi.string().required().label("Block/ULB").messages({
    "string.empty": "Block/ULB is required.",
    "any.required": "Block/ULB is required.",
  }),
  villageCity: Joi.string().required().label("Village/City").messages({
    "string.empty": "Village/City is required.",
    "any.required": "Village/City is required.",
  }),
});



export const assessorSchema = Joi.object({
  assessorID: Joi.string().required().label("Assessor ID").messages({
    "string.empty": "Assessor ID is required.",
  }),
  assessorName: Joi.string().required().label("Assessor Name").messages({
    "string.empty": "Assessor Name is required.",
  }),
  email: Joi.string()
  .email({ tlds: { allow: false } }) 
  .required()
  .label("Email")
  .messages({
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "any.required": "Email is required.",
  }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required().label("Mobile")
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must be 10 digits.",
    }),
  assessmentAgency: Joi.string().required().label("Assessor Agency").messages({
    "string.empty": "Assessment Agency is required.",
  }),
  validUpTo: Joi.date().required().label("Valid Upto").messages({
    "date.base": "Valid Up To must be a valid date.",
  }),
});


export const trainerSchema = Joi.object({
  trainerID: Joi.string().required().messages({
    "string.empty": "Trainer ID is required.",
    "any.required": "Trainer ID is required.",
  }),
  trainerName: Joi.string().required().messages({
    "string.empty": "Trainer Name is required.",
    "any.required": "Trainer Name is required.",
  }),
  mobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.pattern.base": "Mobile number must be 10 digits.",
    "any.required": "Mobile number is required.",
  }),
  trainerEmail: Joi.string()
  .email({ tlds: { allow: false } }) 
  .required()
  .label("Email")
  .messages({
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "any.required": "Email is required.",
  }),
  idCard: Joi.string().required().messages({
    "string.empty": "ID Card (PAN/Voter) is required.",
    "any.required": "ID Card is required.",
  }),
});

export const batchSchema = Joi.object({
  batchId: Joi.string().required().messages({
    "string.base": `"batchId" should be a type of 'text'`,
    "any.required": `"batchId" is a required field`,
  }),
  sdmsBatchId: Joi.string().required().messages({
    "string.base": `"sdmsBatchId" should be a type of 'text'`,
    "any.required": `"sdmsBatchId" is a required field`,
  }),
  batchDuration: Joi.array().items(Joi.date().allow(null)).length(2).required().messages({
    "array.base": `"batchDuration" should be an array`,
    "array.length": `"batchDuration" should contain exactly 2 dates`,
    "any.required": `"batchDuration" is a required field`,
  }),
  trainingPartner: Joi.string().required().messages({
    "string.base": `"trainingPartner" should be a type of 'text'`,
    "any.required": `"trainingPartner" is a required field`,
  }),
  trainingCenter: Joi.string().required().messages({
    "string.base": `"trainingCenter" should be a type of 'text'`,
    "any.required": `"trainingCenter" is a required field`,
  }),
  trainer: Joi.string().required().messages({
    "string.base": `"trainer" should be a type of 'text'`,
    "any.required": `"trainer" is a required field`,
  }),
  sector: Joi.string().required().messages({
    "string.base": `"sector" should be a type of 'text'`,
    "any.required": `"sector" is a required field`,
  }),
  jobRole: Joi.string().required().messages({
    "string.base": `"jobRole" should be a type of 'text'`,
    "any.required": `"jobRole" is a required field`,
  }),
  qpnosCode: Joi.string().required().messages({
    "string.base": `"qpnosCode" should be a type of 'text'`,
    "any.required": `"qpnosCode" is a required field`,
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