import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box, Checkbox, Switch } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useTheme } from "@mui/material";
import { thirdPartyLicenseColumnFunction } from ".";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteThirdOfficeLicenseDataMutation,
  useUpdateLicenseStatusMutation,
} from "@root/services/system-admin/third-party-licence/thirdPartyLicence";

export const useThirdPartyLicenceTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const router = useRouter();
  const theme = useTheme();
  const [deleteThirdPartyLicenseData] =
    useDeleteThirdOfficeLicenseDataMutation();
  const [updateLicenseStatus] = useUpdateLicenseStatusMutation();

  const changeHandler = async (id: any, isDisbled: any) => {
    console.log(isDisbled);

    if (isDisbled == false) {
      try {
        const res: any = await updateLicenseStatus({
          licenseId: id,
        }).unwrap();

        enqueueSnackbar(res?.message ?? `License Updated Successfully`, {
          variant: "success",
        });
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    }
  };

  //-------- Delete Handler -----------//
  const onDeleteConfirm = async () => {
    try {
      const res: any = await deleteThirdPartyLicenseData({
        licenseId: deleteData,
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

  const thirdPartyColumnTableColumns = thirdPartyLicenseColumnFunction(
    router,
    prepareRecordForDelete,
    changeHandler
  );

  // const columns = [
  //   {
  //     accessorFn: (row: any) => row.Name,
  //     id: "name",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Name</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.typeOfLicense,
  //     id: "typeOfLicense",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Type of License</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.description,
  //     id: "description",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Description</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.guide,
  //     id: "guide",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Guide</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.email,
  //     id: "email",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Email</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.phone,
  //     id: "phone",
  //     cell: (info: any) => info.getValue(),
  //     header: () => <span>Phone</span>,
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row.averageResponseTime,
  //     id: "enable-disable",
  //     cell: (info: any) => (
  //       <Switch inputProps={{ "aria-label": "Switch demo" }} defaultChecked />
  //     ),
  //     header: () => <span>Enable/Disable</span>,
  //     isSortable: true,
  //   },
  //   {
  //     id: "actions",
  //     cell: (info: any) => (
  //       <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
  //         <TableAction
  //           size="small"
  //           type="edit"
  //           onClicked={() =>
  //             router.push({
  //               pathname:
  //                 "/system-admin/manage-third-party-license/edit-third-party-license-form",
  //               query: { action: "edit", id: "" },
  //             })
  //           }
  //         />
  //         <TableAction
  //           size="small"
  //           type="view"
  //           onClicked={() =>
  //             router.push({
  //               pathname:
  //                 "/system-admin/manage-third-party-license/view-third-party-license-form",
  //               query: { action: "view", id: "" },
  //             })
  //           }
  //         />
  //         <TableAction
  //           size="small"
  //           type="delete"
  //           // onClicked={() => setCancelDelete(!cancelDelete)}
  //         />

  //         {/* <DeleteModel
  //           open={cancelDelete}
  //           onDeleteClick={handleDelete(info?.original)}
  //           handleClose={() => setCancelDelete(!cancelDelete)}
  //         /> */}
  //       </Box>
  //     ),
  //     header: () => <span>actions</span>,
  //     isSortable: false,
  //   },
  // ];
  return {
    tableHeaderRefTwo,
    thirdPartyColumnTableColumns,
    router,
    onDeleteConfirm,
    theme,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
  };
};
