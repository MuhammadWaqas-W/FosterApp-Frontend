import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useChildOohReportTable } from "./useChildOohReportTable";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

const ChildOohReportTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    childReportListIsloading,
    childReportData,
    childReportListIsfetching,
    childReportListError,
    childReportListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterChildId,
  } = useChildOohReportTable();

  const columns = [
    {
      accessorFn: (row: any) => row.childName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateTime ?? "-",
      id: "occurance",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date/Time of Occurance</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "childStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdAt ?? "-",
      id: "createdDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdBy ?? "-",
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-reports/child-ooh-report/view-child-reports",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-reports/child-ooh-report/view-child-reports",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          <TableAction
            size="small"
            type="print"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-reports/child-ooh-report/view-child-reports",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          <TableAction
            size="small"
            type="share"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-reports/child-ooh-report/view-child-reports",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title=" CHILD OOH REPORTS"
        searchKey="search"
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/foster-child/child-reports/child-ooh-report/view-child-reports",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={childReportData}
        columns={columns}
        isLoading={childReportListIsloading}
        isFetching={childReportListIsfetching}
        isError={childReportListError}
        isSuccess={childReportListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ChildOohReportTable;
