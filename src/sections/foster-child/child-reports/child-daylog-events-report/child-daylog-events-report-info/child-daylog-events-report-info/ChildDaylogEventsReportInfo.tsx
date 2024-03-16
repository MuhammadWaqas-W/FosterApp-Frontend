import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useChildDaylogEventsReportInfo } from "./useChildDaylogEventsReportInfo";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const ChildDaylogEventsReportInfo = () => {
  const {
    childDaylogEventsReportInfoFormData,
    methods,
    handleSubmit,
    submitChildDaylogEventsReportInfoForm,
    isLoading,
    router,
    postChildDaylogEventsReportInfoDataStatus,
    patchChildDaylogEventsReportInfoDataStatus,
    theme,
    childDaylogEventsReportsData,
  }: any = useChildDaylogEventsReportInfo();

  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Grid container>
        {Object.entries(childDaylogEventsReportsData).map(
          ([key, value]: any, index, arr) => {
            return (
              <Grid item xs={12} md={4} key={key + index}>
                <Typography
                  component={"p"}
                  sx={{ fontWeight: "500", fontSize: "14px", mb: "20px" }}
                >
                  {key} : {value}
                </Typography>
              </Grid>
            );
          }
        )}
      </Grid>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(submitChildDaylogEventsReportInfoForm)}
      >
        <Grid container spacing={5}>
          {childDaylogEventsReportInfoFormData.map(
            (form: any, index: number) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
                  <form.component {...form.componentProps} size="small">
                    {form.componentProps.select
                      ? form.componentProps.options.map((option: any) => (
                          <option key={option.id} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : form?.heading
                      ? form?.heading
                      : null}
                  </form.component>
                </Grid>
              );
            }
          )}
        </Grid>
        {router.query?.action !== "view" && (
          <Box sx={{ display: "flex", mb: "1.5rem", mt: "1.5rem" }}>
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              disabled={
                patchChildDaylogEventsReportInfoDataStatus?.isLoading ||
                postChildDaylogEventsReportInfoDataStatus?.isLoading
              }
            >
              Submit
            </LoadingButton>
            <LoadingButton
              type="button"
              sx={{
                marginRight: "1rem",
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.dark },
              }}
              onClick={() =>
                router.push({
                  pathname: `/foster-child/child-reports/child-daylog-events-report`,
                  query: {
                    ...(!!router?.query?.fosterChildId && {
                      fosterChildId: router?.query?.fosterChildId,
                    }),
                  },
                })
              }
              variant="contained"
              disabled={
                patchChildDaylogEventsReportInfoDataStatus?.isLoading ||
                postChildDaylogEventsReportInfoDataStatus?.isLoading
              }
            >
              back
            </LoadingButton>
          </Box>
        )}
      </FormProvider>
    </>
  );
};

export default ChildDaylogEventsReportInfo;
