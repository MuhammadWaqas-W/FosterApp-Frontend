import { useDeleteReferenceDataManagementCategoriesByIdMutation, useGetReferenceDataManagementTableApiQuery } from "@root/services/system-admin/reference-data-management/ReferenceDataManagementAPI";
import React, { useState } from "react";

export const useReferenceDataManagementTable = () => {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };

  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetReferenceDataManagementTableApiQuery({
      params,
    });
    const [deleteCategoriesData]=useDeleteReferenceDataManagementCategoriesByIdMutation()
  const family = data?.data?.referenceCategories;
  const meta = data?.meta;

  const headerChangeHandler = (text: any) => {
    setSearchHandle(text.search);
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return {
    // sortChangeHandler,
    // router,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    deleteCategoriesData,
  };
};
