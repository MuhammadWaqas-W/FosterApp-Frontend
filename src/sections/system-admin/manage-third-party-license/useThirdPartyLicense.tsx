import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllThirdPartyLicenseListDataQuery } from "@root/services/system-admin/third-party-licence/thirdPartyLicence";
import { useRouter } from "next/router";

export const useThirdPartyLicence = () => {
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllThirdPartyLicenseListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });
  console.log(data);
  return {
    router, data
  }
};
