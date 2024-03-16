import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";

import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import {
  childDaylogEventsReportInfoFormDataFunction,
  childDaylogEventsReportInfoFormSchema,
  childDaylogEventsReportInfoFormValues,
  defaultValueChildDaylogEventsReportInfoForm,
} from ".";
import {
  useGetSingleChildDaylogEventsReportInfoDataQuery,
  usePatchChildDaylogEventsReportInfoDataMutation,
  usePostChildDaylogEventsReportInfoDataMutation,
} from "@root/services/foster-child/child-reports/child-day-log-events-reports/childDayLogEventsReportsInfo";

export const useChildDaylogEventsReportInfo = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const childDaylogEventsReportInfoFormData =
    childDaylogEventsReportInfoFormDataFunction(
      router?.query?.action === "view"
    );

  const [
    postChildDaylogEventsReportInfoDataTrigger,
    postChildDaylogEventsReportInfoDataStatus,
  ] = usePostChildDaylogEventsReportInfoDataMutation();

  const [
    patchChildDaylogEventsReportInfoDataTrigger,
    patchChildDaylogEventsReportInfoDataStatus,
  ] = usePatchChildDaylogEventsReportInfoDataMutation();

  // get api params
  const pathParams = {
    id: router.query?.id,
  };

  const apiDataParameter = { pathParams };
  const { data, isLoading } = useGetSingleChildDaylogEventsReportInfoDataQuery(
    apiDataParameter,
    {
      skip: !!!router?.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );

  const methods: any = useForm({
    resolver: yupResolver(childDaylogEventsReportInfoFormSchema),
    defaultValues: defaultValueChildDaylogEventsReportInfoForm(
      childDaylogEventsReportInfoFormValues
    ),
  });
  const { handleSubmit, reset } = methods;
  const childDaylogEventsReportsData = {
    "Carer Name": "Not Placed",
    "Supervising Social Worker": "Not Assigned",
    "User Name": "Sana",
  };
  useEffect(() => {
    reset(() => defaultValueChildDaylogEventsReportInfoForm(data?.data));
  }, [data, reset]);

  const submitChildDaylogEventsReportInfoForm = async (data: any) => {
    const body = {
      fosterChildId: router?.query?.fosterChildId,
      ...data,
    };

    const queryParams = {
      fosterChildId: router?.query?.fosterChildId,
    };
    const apiDataParameter = { body, queryParams };
    if (!!router?.query?.id) {
      patchChildDaylogEventsReportInfoForm(data);
      return;
    }
    try {
      const res: any = await postChildDaylogEventsReportInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/child-reports/child-daylog-events-report`,
        query: {
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });

      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  const patchChildDaylogEventsReportInfoForm = async (data: any) => {
    const pathParams = {
      id: router?.query?.id,
    };
    const body = {
      fosterChildId: router?.query?.fosterChildId,
      ...data,
    };
    const apiDataParameter = { body, pathParams };
    try {
      const res: any = await patchChildDaylogEventsReportInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/child-reports/child-daylog-events-report`,
        query: {
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  return {
    childDaylogEventsReportInfoFormData,
    methods,
    handleSubmit,
    submitChildDaylogEventsReportInfoForm,
    router,
    postChildDaylogEventsReportInfoDataStatus,
    patchChildDaylogEventsReportInfoDataStatus,
    theme,
    isLoading,
    childDaylogEventsReportsData,
  };
};
