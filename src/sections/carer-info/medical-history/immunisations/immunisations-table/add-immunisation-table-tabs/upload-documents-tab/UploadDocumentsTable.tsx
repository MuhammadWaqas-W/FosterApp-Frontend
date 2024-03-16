import React from "react";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import { useTableParams } from "@root/hooks/useTableParams";
import Page from "@root/components/Page";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { UPLOAD_DOCUMENT_DATA, columns } from ".";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
// import UploadDocuments from "@root/sections/documents/UploadDocuments";
export const UploadDocumentsTable = (props: any) => {
  const { breadCrumbData, disabled } = props;
  const {
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
  } = useUploadDocumentsTable(breadCrumbData);

  return (
    <Page title="Upload Documents">
      <Card sx={{ p: 1 }}>
        {/* <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Upload Documents"
          searchKey="search"
          showAddBtn
          onAdd={() =>
            // router.push(
            //   "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
            // )
            {}
          }
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        /> */}
        {/* <CustomTable
          data={UPLOAD_DOCUMENT_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={false}
        /> */}

        <UploadDocuments
          // readOnly={disabled}
          searchParam={(searchedText: any) => setSearch(searchedText.search)}
          tableData={uploadDocumentApiData}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          column={["docName", "docType", "date", "uploadedBy", "password"]}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isPagination={true}
          totalPages={meta?.pages ?? 0}
          currentPage={meta?.page ?? 1}
          // onDelete={(data: any) => {
          //   deleteDocument(data?.id);
          // }}
        />
        {/* <UploadDocuments
      tableData={UPLOAD_DOCUMENT_DATA}
      columns={columns}
      isSuccess={true}
      />
        {/* <UploadDocuments
          // readOnly={user?.defaultRole === "FOSTER_CARER"}
          tableData={UPLOAD_DOCUMENT_DATA.map((x: any) => ({
            document: x.documentName,
            documentType: x?.documentType,
            date: x?.documentDate,
            personName: x.personUploaded,
            password: x.password,
          }))}
          // isLoading={isLoading}
          columns={[
            "documentName",
            "documentType",
            "documentDate",
            "personUploaded",
            "password",
          ]}
          // isFetching={isFetching}
          // isError={isError}
          // isSuccess={true}
          modalData={(data: any) => console.log("data all the way here", data)}
        /> */}
      </Card>
    </Page>
  );
};
