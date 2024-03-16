import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const childReportData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "hours",
      label: "Out of Hours",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "incidentType",
      label: "OOH Incident Type",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: 0, label: 0 },
      { value: 1, label: 1 },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "occurence",
      label: "Date / Time of Occurance",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Incident Description",
      multiline: true,
      rows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "hospitalization",
      label: "Did it resolved Hospitalisation?",
    },
    component: "RadioGroup",
  },
  {
    id: 6,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "police",
      label: "Did it involved Police?",
    },
    component: "RadioGroup",
  },
];

export const formatters: any = {};

for (const formControl of childReportData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  hours: new Date(),
  incidentType: "",
  occurence: new Date(),
  description: "",
  comments: "",
  hospitalization: null,
  police: null,
};
export const formSchema = Yup.object().shape({
  hours: Yup.date().required("Required"),
  incidentType: Yup.string().required("Required"),
  occurence: Yup.date().required("Required"),
  description: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
  hospitalization: Yup.boolean().required("Required"),
  police: Yup.boolean().required("Required"),
});
