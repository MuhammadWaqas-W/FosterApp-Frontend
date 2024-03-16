import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { systemConfigurationTableFunction } from ".";
import {
  useDeleteSystemConfigurationListMutation,
  useGetSystemConfigurationListQuery,
} from "@root/services/system-admin/system-configuration/SystemConfigurationAPI";
import { useState } from "react";

const useConfiguration = () => {
  const [openEditModel, setOpenEditModel] = useState(false);
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetSystemConfigurationListQuery(params);
  const [deleteSystemConfigurationRecord] =
    useDeleteSystemConfigurationListMutation();

  const deleteSystemConfiguration = (id: string) => {
    const deleteRecord = {
      configId: id,
    };

    deleteSystemConfigurationRecord(deleteRecord);
  };

  const systemConfigurationColoums = systemConfigurationTableFunction({
    router,
    setOpenEditModel,
    deleteSystemConfiguration,
  });

  return {
    data,

    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    systemConfigurationColoums,
    openEditModel,
    setOpenEditModel,
  };
};

export default useConfiguration;
