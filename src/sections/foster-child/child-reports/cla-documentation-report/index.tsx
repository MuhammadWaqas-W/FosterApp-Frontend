import {
    RHFCheckbox,
    RHFSelect,
    RHFTextField,
  } from "@root/components/hook-form";
  import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
  import * as Yup from "yup";
  import { Typography } from "@mui/material";
  
  export const dummy = [
    {
      childName: "John",
      dateTimeOfOccurence: "03/11/2021  ::  11:00",
      ChildStatus: "Abc",
      createdDate: "04/11/2021",
      createdBY: "RoseMarry",
    },
  ];
  
  export const ClaDocumentationReportData = [
    {
      id: 1,
      gridLength: 6,
      otherOptions: {
        label: "Date Of Immunisation",
        name: "dateOfImmunisation",
        fullWidth: true,
      },
      component: RHFDatePicker,
    },
    {
      id: 2,
      gridLength: 6,
      otherOptions: {
        label: "Due Date",
        name: "dueDate",
        fullWidth: true,
      },
      component: RHFDatePicker,
    },
    {
      id: 3,
      gridLength: 6,
      otherOptions: {
        label: "Immunisation Type",
        name: "immunisationType",
        fullWidth: true,
        select: true,
        options: [
          { value: "RequestforSingleData", label: "Request for Single Data" },
        ],
      },
      component: RHFSelect,
    },
    {
      id: 4,
      gridLength: 12,
      otherOptions: {
        label: "Immunisation Details",
        name: "immunisationDetails",
        multiline: true,
        minRows: 3,
        fullWidth: true,
      },
      component: RHFTextField,
    },
  ];
  export const ClaDocumentationReportValue = {
    dateOfImmunisation: new Date(),
    dueDate: new Date(),
    immunisationType: "",
    immunisationDetails: "",
  };
  export const FormSchema = Yup.object().shape({
    dateOfImmunisation: Yup.date().required("required"),
    dueDate: Yup.date().required("required"),
    immunisationType: Yup.string().required("required"),
    immunisationDetails: Yup.string().required("required"),
  });
  


  //Form

  export const EHCPFormData = [
    {
      id: 1,
      heading: "Foster Placement Agreement",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 2,
      componentProps: {
        name: "fosterPlacement.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 3,
      componentProps: {
        name: "fosterPlacement.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 4,
      componentProps: {
        name: "fosterPlacement.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 5,
      heading: "Placement Information Record / Placement Plan",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 6,
      componentProps: {
        name: "placementInfoRecord.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 7,
      componentProps: {
        name: "placementInfoRecord.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 8,
      componentProps: {
        name: "placementInfoRecord.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 9,
      heading: "Local Authority Placement Plan",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 10,
      componentProps: {
        name: "localAuthorityPlacementPlan.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 11,
      componentProps: {
        name: "localAuthorityPlacementPlan.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 12,
      componentProps: {
        name: "localAuthorityPlacementPlan.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 13,
      heading: "Local Authority Risk Plan",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 14,
      componentProps: {
        name: "localAuthorityRiskAssesssment.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 15,
      componentProps: {
        name: "localAuthorityRiskAssesssment.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 16,
      componentProps: {
        name: "localAuthorityRiskAssesssment.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 17,
      heading: "Delegated Authority",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 18,
      componentProps: {
        name: "delegatedAuthority.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 19,
      componentProps: {
        name: "delegatedAuthority.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 20,
      componentProps: {
        name: "delegatedAuthority.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 21,
      heading: "CLA Medical Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 22,
      componentProps: {
        name: "claMedicalDate.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 23,
      componentProps: {
        name: "claMedicalDate.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 24,
      componentProps: {
        name: "claMedicalDate.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 25,
      heading: "CLA Review Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 26,
      componentProps: {
        name: "claReviewDate.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 27,
      componentProps: {
        name: "claReviewDate.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 28,
      componentProps: {
        name: "claReviewDate.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 29,
      heading: "CLA Plan Pt1 Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 30,
      componentProps: {
        name: "carePlanPt1.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 31,
      componentProps: {
        name: "carePlanPt1.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 32,
      componentProps: {
        name: "carePlanPt1.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 33,
      heading: "CLA Plan Pt2 Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 34,
      componentProps: {
        name: "carePlanPt2.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 35,
      componentProps: {
        name: "carePlanPt2.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 36,
      componentProps: {
        name: "carePlanPt2.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 37,
      heading: "PEP Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 38,
      componentProps: {
        name: "perDate.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 39,
      componentProps: {
        name: "perDate.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 40,
      componentProps: {
        name: "perDate.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 41,
      heading: "EHCP Date",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 42,
      componentProps: {
        name: "ehcpDate.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 43,
      componentProps: {
        name: "ehcpDate.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 44,
      componentProps: {
        name: "ehcpDate.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 45,
      heading: "Pathway PLan",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 46,
      componentProps: {
        name: "pathwayPlan.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 47,
      componentProps: {
        name: "pathwayPlan.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 48,
      componentProps: {
        name: "pathwayPlan.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 49,
      heading: "Grab Pack",
      componentProps: {
        variant: "h6",
        color: (theme: any) => theme.palette.primary.main,
        sx: { mb: 2 },
      },
      component: Typography,
    },
    {
      id: 50,
      componentProps: {
        name: "garbPack.date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 51,
      componentProps: {
        name: "garbPack.onfile",
        label: "On File",
        sx: { mb: 4 },
        select: true,
      },
      options: [ 
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 52,
      componentProps: {
        name: "garbPack.comments",
        label: "Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
  ];


  // EHCP Form Default Values
export const defaultValuesForEhcp = {
  fosterPlacement: { date: new Date(), onfile: "", comments: "" },

  placementInfoRecord: { date: new Date(), onfile: "", comments: "" },

  localAuthorityPlacementPlan: { date: new Date(), onfile: "", comments: "" },

  localAuthorityRiskAssesssment: { date: new Date(), onfile: "", comments: "" },

  delegatedAuthority: { date: new Date(), onfile: "", comments: "" },

  claMedicalDate: { date: new Date(), onfile: "", comments: "" },

  claReviewDate: { date: new Date(), onfile: "", comments: "" },

  carePlanPt1: { date: new Date(), onfile: "", comments: "" },

  carePlanPt2: { date: new Date(), onfile: "", comments: "" },

  perDate: { date: new Date(), onfile: "", comments: "" },

  ehcpDate: { date: new Date(), onfile: "", comments: "" },

  pathwayPlan: { date: new Date(), onfile: "", comments: "" },

  garbPack: { date: new Date(), onfile: "", comments: "" },

};

// EHCP Validations
export const EHCPFormValidation = Yup.object().shape({
  fosterPlacement: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  placementInfoRecord: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  localAuthorityPlacementPlan: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  localAuthorityRiskAssesssment: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  delegatedAuthority: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  claMedicalDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  claReviewDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  carePlanPt1: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  carePlanPt2: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  perDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  ehcpDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  pathwayPlan: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  garbPack: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
});




// export { default as ClaDocumentationList } from "./ClaDocumentationTable";