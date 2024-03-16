// import {
//     Box,
//     Button,
//     Grid,
//     Paper,
//     TextField,
//     Typography,
//     useTheme,
//   } from "@mui/material";
//   import React from "react";
//   import { useForm } from "react-hook-form";
//   import {
//     FormProvider,
//     RHFSelect,
//     RHFTextField,
//   } from "@root/components/hook-form";
//   import router from "next/router";
//   import { yupResolver } from "@hookform/resolvers/yup";
//   import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
//   import IsFetching from "@root/components/loaders/IsFetching";
//   import {
//     FormSchema,
//     ClaDocumentationReportData,
//     ClaDocumentationReportValue,
//   } from ".";
//   import Comments from "@root/components/comment/Comment";
  
//   const backPath =
//     "/foster-child/child-reports/child-immunisation-details-report";
//   interface IChildImmunisationReportsFrom {
//     fosterChildId: string;
//     ClaDocumentationReportID?: string;
//     action: "add" | "edit" | "view";
//   }
  
//   const ClaDocumentationReportForm = (props: IChildImmunisationReportsFrom) => {
//     const { action, fosterChildId, ClaDocumentationReportID } = props;
//     const theme: any = useTheme();
//     const methods: any = useForm({
//       // mode: "onTouched",
//       resolver: yupResolver(FormSchema),
//       defaultValues: ClaDocumentationReportValue,
//     });
//     const {
//       trigger,
//       setValue,
//       handleSubmit,
//       getValues,
//       watch,
//       reset,
//       formState: { errors },
//     } = methods;
//     //   if (isloading) return <SkeletonFormdata />;
//     return (
//       <Box sx={{ px: 0, py: 0.1 }}>
//         <Grid container>
//           <Grid item xs={12}>
//             <FormProvider methods={methods} onSubmit={handleSubmit()}>
//               <Grid container>
//                 {/* <IsFetching isFetching={isFatching} /> */}
//                 {ClaDocumentationReportData.map((form: any, index) => {
//                   return (
//                     <Grid item xs={12} md={form?.gridLength} key={index}>
//                       <Box sx={{ pr: 1, py: 1 }}>
//                         {form.component === "label" ? (
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               color: theme.palette.grey[600],
//                               fontWeight: theme.typography.fontWeightMedium,
//                             }}
//                           >
//                             {form.label}
//                           </Typography>
//                         ) : (
//                           <form.component
//                             size="small"
//                             {...form.otherOptions}
//                             disabled={action === "view" ? true : false}
//                             InputLabelProps={{
//                               shrink: action === "view" ? true : undefined,
//                               disabled: action === "view" ? true : undefined,
//                             }}
//                           >
//                             {form.otherOptions.select &&
//                               form.otherOptions.options.map((option: any) => (
//                                 <option key={option.value} value={option.value}>
//                                   {option.label}
//                                 </option>
//                               ))}
//                           </form.component>
//                         )}
//                       </Box>
//                     </Grid>
//                   );
//                 })}
  
//                 <Grid
//                   item
//                   sx={{
//                     mt: 2,
//                     display: "flex",
//                     gap: "15px",
//                     flexWrap: "wrap",
//                     px: 0.9,
//                   }}
//                   xs={12}
//                 >
//                   {action === "edit" || action === "add" ? (
//                     <Button
//                       sx={{
//                         bgcolor: theme.palette.primary.main,
//                         "&:hover": { bgcolor: theme.palette.primary.main },
//                       }}
//                       variant="contained"
//                       type="submit"
//                     >
//                       Submit
//                     </Button>
//                   ) : null}
  
//                   <Button
//                     sx={{
//                       bgcolor: theme.palette.orange.main,
//                       "&:hover": { bgcolor: theme.palette.orange.main },
//                     }}
//                     variant="contained"
//                     onClick={() =>
//                       router.push({
//                         pathname: `${backPath}`,
//                         query: {
//                           fosterChildId: fosterChildId,
//                         },
//                       })
//                     }
//                   >
//                     back
//                   </Button>
//                 </Grid>
//               </Grid>
//             </FormProvider>
//             <Comments />
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   };
  
//   export default ClaDocumentationReportForm;
  


  import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { EHCPFormData } from ".";
import { useClaDocumentationReportForm } from "./useClaDocumentationReportForm";
import Comments from "@root/components/comment/Comment";
// import { EHCPFormData } from "..";
// import { useEhcpForm } from "./useEhcpForm";



export default function ClaDocumentationReportForm(props: any) {
  const { methods, handleSubmit, onSubmit, disabled, router, isSubmitting } =
  useClaDocumentationReportForm(props);
  const { fosterChildId } = router.query;

  return (
    // <Paper elevation={4} sx={{ padding: 3 }}>
    <>
     <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {EHCPFormData?.map((item: any, index: any) => (
            <Grid item xs={12} md={item?.md} key={index}>
              <item.component
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", mb: "1rem" }}>
          {!disabled && (
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              // loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          )}
          <LoadingButton
            // onClick={() => {
            //   router.push(
            //     "/foster-child/child-background-info/cla-documentation"
            //   );
            // }}
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            variant="contained"
            onClick={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/cla-documentation",
                query: { fosterChildId: fosterChildId },
              })
            }
          >
            Back
          </LoadingButton>
        </Box>
      </FormProvider>
      <Comments />
    </>
       

  );
}
