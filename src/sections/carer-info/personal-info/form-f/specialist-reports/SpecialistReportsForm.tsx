import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { SPECIALISTREPORTSFORMDATA, FormSchema, defaultValues } from "./";
import { LoadingButton } from "@mui/lab";

export default function SpecialistReportsForm(props: any) {
  const { disabled, formData, isLoading, isError, isSuccess } = props;
  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data);

    formData(data);
  };
  return (
    <Page title="Initial Enquiry">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h6">Specialist Reports</Typography>
            </Grid>

            {SPECIALISTREPORTSFORMDATA?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <Grid>
                        <Typography
                          color={theme.palette.primary.main}
                          variant="body2"
                        >
                          {form.heading}
                        </Typography>
                        <form.component
                          disabled={disabled || isLoading}
                          size="small"
                          {...form.otherOptions}
                        >
                          {form.otherOptions.select
                            ? form.options.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {" "}
                                  {option.label}{" "}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    ) : (
                      <Typography
                        variant={form.variant}
                        color={theme.palette.primary.main}
                      >
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <LoadingButton
                loading={isLoading}
                size="large"
                type="submit"
                variant="contained"
                color={isError ? "error" : isSuccess ? "success" : "primary"}
              >
                {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Page>
  );
}
