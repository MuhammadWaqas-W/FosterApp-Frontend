import { Card } from "@mui/material";
import Page from "@root/components/Page";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import { useImmunisationsTable } from "./useImmunisationsTable";
import { IMMUNISATIONS_DATA, columns } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";

export const ImmunisationsTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    setSearch,
    immunizationListData,
    meta,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    params,
    makePath,
    pageChangeHandler,
    sortChangeHandler,
    columnsFunction,
    immunisationId,
    setImmunisationId,
    deleteList,
  }: any = useImmunisationsTable();
  // const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
  //   useTableParams();
  return (
    <Page title="Immunisations List">
      <Card sx={{ p: 1 }}>
        <DeleteModel
          open={immunisationId && immunisationId}
          handleClose={() => setImmunisationId(null)}
          onDeleteClick={deleteList}
        />
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Carer Immunisation Info"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              makePath({
                path: "immunisations/add-immunisation-table-tabs",
              })
            );
          }}
          // onAdd={() => router.push("immunisations/add-immunisation-table-tabs")}
          onChanged={(event: any) => {
            setSearch(event.search);
            // console.log(event);
          }}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={immunizationListData}
          columns={columnsFunction}
          showSerialNo
          totalPages={meta?.pages ?? 0}
          currentPage={meta?.page ?? 1}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isPagination={true}
          isSuccess={isSuccess}
          isError={isError}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </Card>
    </Page>
  );
};
