import { Box, Button, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useReferenceDataManagementTable } from "./useReferenceDataManagementTable";
import dayjs from "dayjs";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import Image from "next/image";
import RefData from "../../../assets/svg/ref-data.svg";

export default function ReferenceDataManagementTable(props: any) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<any>("");
  const {
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
    // sortChangeHandler
  } = useReferenceDataManagementTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.code,
      id: "code",
      cell: (info: any) => info.getValue(),
      header: "Ref. Data Code",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.name,
      id: "name",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Ref. Data Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.principalName,

      id: "principalName",
      cell: (info: any) => {
        return (
          <Button onClick={() => {}}>
            <Image src={RefData} alt="ref-data-val" />
          </Button>
        );
      },
      header: "Ref. Data Value",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.description,
      id: "description",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Description",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.updatedAt,
      id: "updatedAt",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Last Updated Date",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="add"
            onClicked={
              () => {}
              //   router.push({
              //     pathname:
              //       "/foster-child/education-records/school-detail-info/edit-school-detail",
              //     query: {
              //       action: "edit",
              //       schoolInfoId: info.row.original.id,
              //       fosterChildId: fosterChildId,
              //     },
              //   })
            }
            size="small"
          />
          <TableAction
            type="edit"
            onClicked={
              () => {}
              //   router.push({
              //     pathname:
              //       "/foster-child/education-records/school-detail-info/edit-school-detail",
              //     query: {
              //       action: "edit",
              //       schoolInfoId: info.row.original.id,
              //       fosterChildId: fosterChildId,
              //     },
              //   })
            }
            size="small"
          />
          <TableAction
            type="delete"
            onClicked={() => {
              setOpen(true);
              setId(info.row.original);
            }}
            size="small"
          />

          {/* Can move it outside of the table if need arises */}
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  const onDelete = async (data: any) => {
    try {
      const res: any = await deleteCategoriesData(data).unwrap();
      setOpen(false);
      enqueueSnackbar(res?.message ?? `Delete Successfully!`, {
        variant: "success",
      });
    } catch (error: any) {
      setOpen(false);
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return (
    <Card sx={{ p: 2 }}>
      <DeleteModel
        open={open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {
          onDelete(id);
        }}
      />
      <TableHeader
        // disabled={isLoading}
        title="Reference Data Management"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          //   router.push({
          //     pathname:
          //       "/foster-child/education-records/school-detail-info/add-school-detail",
          //     query: { action: "add", fosterChildId: fosterChildId },
          //   });
        }}
        // onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page ?? "1"}
        totalPages={meta?.pages ?? "1"}
        showSerialNo
        onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
