import Joi from "joi";
import { SchemeFormData } from "./formTypes";

export const SchemeValidation = Joi.object<SchemeFormData>({
  selectedSchemeType: Joi.string()
    .valid("Type 1", "Type 2", "Type 3")
    .required()
    .messages({
      "any.required": "Scheme Type is required.",
      "string.empty": "Scheme Type is required.",
    }),

  selectedFundingType: Joi.string()
    .valid("Type A", "Type B", "Type C")
    .required()
    .messages({
      "any.required": "Funding Type is required.",
      "string.empty": "Funding Type is required.",
    }),

  schemeName: Joi.string()
    .when("selectedScheme", { is: "new", then: Joi.required() })
    .messages({
      "any.required": "Name is required.",
      "string.empty": "Name is required.", 
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
    .valid("Type A", "Type B", "Type C")
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

  schemeOrderNumber: Joi.string()
    .required()
    .messages({
      "any.required": "Scheme Order Number is required.",
      "string.empty": "Scheme Order Number is required.",
    }),

  dateOfSanction: Joi.date()
    .required()
    .messages({
      "any.required": "Date of Sanction is required.",
      "date.empty": "Date of Sanction is required.",
    }),
});
