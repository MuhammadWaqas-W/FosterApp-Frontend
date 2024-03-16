import { Box, Button } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";

export const clearBtn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "right", md: "center" },
        marginLeft: { xs: 0, md: -9 },
      }}
    >
      <Button variant="outlined" disabled>
        Clear
      </Button>
    </Box>
  );
};

export const nextReviewMeetingFormData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "date",
      label: "Date",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "time",
      label: "Time",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFTimePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "venue",
      label: "Venue",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "dated",
      label: "Dated",
      fullWidth: true,
      sx: { marginTop: { xs: 0, md: 7 } },
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      label: "Signed (reviewing officer)",
      name: "signed",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { marginTop: { xs: 0, md: -7 } },
    },
    component: RHFTextField,
    clearBtn,
  },
  // {
  //   id: 6,
  //   gridLength: 6,
  //   componentProps: {
  //     name: "dated",
  //     label: "Dated",
  //     fullWidth: true,
  //     // sx: { mt: 0 },
  //   },
  //   component: RHFDatePicker,
  // },
  {
    id: 7,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      // sx: { mt: 0 },
    },
    component: clearBtn, // Include the function reference without invoking it
  },
];
