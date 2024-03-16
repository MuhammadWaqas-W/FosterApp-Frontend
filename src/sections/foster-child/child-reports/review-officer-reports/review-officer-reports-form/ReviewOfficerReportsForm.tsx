import React from "react";
import { useForm } from "react-hook-form";
import { ReviewOfficerReportFromData } from ".";
import { FormProvider } from "@root/components/hook-form";
import AccordianList from "@root/components/AccordianList";
import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";

export const ReviewOfficerReportsForm = () => {
  const methods: any = useForm({});
  // const { action, fosterChildId, hospitalizationId } = props;
  // const { SubmitData, getDefaultValue, isloading, isFatching } =
  //   useReviewOfficerReportsForm({
  //     action: action,
  //     fosterChildId: fosterChildId,
  //     hospitalizationId: hospitalizationId,
  //   });
  // mode: "onTouched",
  //   resolver: yupResolver(FormSchema),
  //   defaultValues: getDefaultValue,
  // const {
  //   trigger,
  //   setValue,
  //   handleSubmit,
  //   getValues,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = methods;

  // const theme: any = useTheme();

  // if (isloading) return <SkeletonFormdata />;

  const currencies = [
    { id: 1, value: "a", label: "A" },
    { id: 2, value: "b", label: "B" },
    { id: 3, value: "c", label: "C" },
    { id: 4, value: "d", label: "D" },
  ];
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="name"
                  select
                  label="Name of foster carer"
                  disabled
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  multiline
                  disabled
                  label="Date of review meeting"
                />
              </Grid>
            </Grid>
            <Grid container>
              {ReviewOfficerReportFromData.map((item: any) => (
                <Grid item xs={12} key={item.title}>
                  {item.isHeading && (
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {item?.title}
                    </Typography>
                  )}
                  {!item.isHeading && (
                    <AccordianList
                      title={item.title}
                      component={item.component}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
};
