import React from "react";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { healthAndSafetyImmunisationData, defaultValues } from ".";
import { useImmunisationInfoTab } from "./useImmunisationInfoTab";

export const ImmunisationInfoTab = (props: any) => {
  const {
    disabled,
    formData,
    isLoading,
    isError,
    isSuccess,
    breadCrumbData,
    initialValueProps = defaultValues,
    onSubmitHandler,
    message,
    isAdding = false,
  } = props;

  const {
    handleSubmit,
    onSubmit,
    methods,
    theme,
    makePath,
    isSubmitting,
    router,
  }: any = useImmunisationInfoTab({
    breadCrumbData,
    onSubmitHandler,
    initialValueProps,
    message,
    isAdding,
  });

  return (
    <Page title="Immunisations Info">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {healthAndSafetyImmunisationData?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <form.component
                        {...form.componentProps}
                        disabled={disabled || isLoading}
                        size="small"
                      >
                        {form?.componentProps.select
                          ? form?.componentProps.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {" "}
                                {option.label}{" "}
                              </option>
                            ))
                          : null}
                      </form.component>
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
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    Loading &nbsp; <CircularProgress size={20} />
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>

              <Button
                sx={{
                  bgcolor: theme?.palette?.orange?.main,
                  "&:hover": { bgcolor: theme?.palette?.orange?.main },
                  ml: 1,
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    makePath({
                      path: "/carer-info/medical-history/immunisations",
                      skipQueries: ["immunisationId"],
                    })
                  )
                }
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Page>
  );
};
