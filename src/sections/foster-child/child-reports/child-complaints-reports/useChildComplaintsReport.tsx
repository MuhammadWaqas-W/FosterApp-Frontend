import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import { complaintReportsTableColumnsFunction } from ".";
// import { useDeleteSanctionDetailsDataMutation, useGetAllSanctionDetailsListDataQuery } from "@root/services/foster-child/other-information/saction-details/sactionDetailsList";
import { useDeleteComplaintsReportDataMutation, useGetAllComplaintsListDataQuery } from "@root/services/foster-child/child-reports/child-complaints-report/ChildComplaintsReport";

export const useChildComplaintsReport = () => {
  const router = useRouter();
  const theme = useTheme();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [deleteComplaintsReportData] = useDeleteComplaintsReportDataMutation();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
console.log(params);

  const apiDataParameter = {
    params,
    fosterChildId: router?.query?.fosterChildId,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
  useGetAllComplaintsListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  //-------------------- Delete Handler
    const onDeleteConfirm = async () => {
      try {
        const res: any = await deleteComplaintsReportData({
          id: deleteData,
        }).unwrap();
        setIsRecordSetForDelete(false);

        enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
          variant: "success",
        });
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    };

  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };

  const complaintReportsTableColumns = complaintReportsTableColumnsFunction(
    router,
    prepareRecordForDelete
  );

  return {
    complaintReportsTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    theme,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
