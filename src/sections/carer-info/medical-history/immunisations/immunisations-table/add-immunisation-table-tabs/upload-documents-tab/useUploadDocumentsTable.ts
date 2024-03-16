import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetImmunisationDocumentListDataQuery,
  usePostImmunisationDocumentDataMutation,
} from "@root/services/carer-info/medical-history/immunisation/immunisationApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef } from "react";

export const useUploadDocumentsTable = (breadCrumbData: any) => {
  // const {breadCrumbData}= props;
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();
  const { fosterCarerId, immunisationId } = router.query;
  const { data, isSuccess, isError, isFetching, isLoading }: any =
    useGetImmunisationDocumentListDataQuery({
      fosterCarerId,
      immunisationId,
      search,
      ...params,
    });
  const uploadDocumentApiData = data?.immunizationDocumentsList;

  const meta = data?.meta;
  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const tableHeaderRef = useRef<any>();
  useEffect(() => {
    breadCrumbData("Upload Documents");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [postImmunisationDocument] = usePostImmunisationDocumentDataMutation();

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.documentType);
    formData.append("documentDate ", data.documentDate);
    formData.append("password", data.password);
    formData.append("file ", data.chosenFile);
    try {
      await postImmunisationDocument({
        immunisationId,
        fosterCarerId,
        formData,
      }).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    uploadDocumentApiData,
    meta,
    isSuccess,
    isError,
    isFetching,
    isLoading,
    setSearch,
    pageChangeHandler,
    sortChangeHandler,
    documentUploadHandler,
    // deleteDocument
  };
};
