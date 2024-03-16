import { useTheme } from "@mui/material";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteImmunisationListMutation,
  useGetImmunisationListDataQuery,
} from "@root/services/carer-info/medical-history/immunisation/immunisationApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { columns } from ".";
import { enqueueSnackbar } from "notistack";

export const useImmunisationsTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = React.useState("");
  const [immunisationId, setImmunisationId] = React.useState<any>(null);
  const { makePath } = usePath();

  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();
  const theme: any = useTheme();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const tableHeaderRef = useRef<any>();
  const { data, isSuccess, isError, isFetching, isLoading }: any =
    useGetImmunisationListDataQuery({
      fosterCarerId: fosterCarerId,
      params,
    });
  const [deleteListItem] = useDeleteImmunisationListMutation({});
  const deleteList = async () => {
    const res: any = deleteListItem(immunisationId)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(
          res?.message ?? "Deleted Immunization Successfully!",
          {
            variant: "success",
          }
        );
        setImmunisationId(null);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const openDeleteModel = (id: any) => {
    setImmunisationId(id);
  };
  const columnsFunction = columns({
    openDeleteModel,
    makePath,
    router,
  });

  const immunizationListData = data?.data?.immunizationList;
  const meta = data?.data?.meta;
  return {
    deleteList,
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    immunizationListData,
    setSearch,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    meta,
    params,
    pageChangeHandler,
    sortChangeHandler,
    makePath,
    immunisationId,
    setImmunisationId,
    columnsFunction,
  };
};
