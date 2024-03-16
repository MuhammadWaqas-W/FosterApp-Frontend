import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { viewEducationKeyStage } from ".";
import useViewEducationKeyStage from "./useViewEducationKeyStage";
import IsFetching from "@root/components/loaders/IsFetching";

const ViewEducationKeyStage = () => {
  const { methods, handleSubmit, onSubmit, router, defaultValues,isLoading } =
    useViewEducationKeyStage();
  return (
    <>
      
      {isLoading ? (
        <IsFetching isFetching={isLoading} />
      ) : (
        <>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {viewEducationKeyStage.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                    <>
                      <Grid>
                        <form.component
                          disabled={false}
                          size="small"
                          {...form.otherOptions}
                        >
                          {form.otherOptions
                            ? form.options?.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    </>
                  </Grid>
                );
              })}
              <Button
                sx={{
                  backgroundColor: "#23183D",
                  "&:hover": {
                    backgroundColor: "#23183D",
                  },
                  m: 1,
                }}
                type="submit"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </FormProvider>
        </>
      )}
    </>
  );
};

export default ViewEducationKeyStage;
