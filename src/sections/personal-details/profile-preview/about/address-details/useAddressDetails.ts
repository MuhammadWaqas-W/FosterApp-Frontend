import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useAddressDetails = () => {
  const theme: any = useTheme();
  const { data: addressDetails, isLoading: addressIsLoading }: any =
    useGetAllProfileDetailsQuery({
      infoToget: "aboutCandidate.addressDetail",
    });

  const formattedDataAddress = addressDetails?.data;

  return {
    addressIsLoading,
    formattedDataAddress,
    addressDetails,
    theme,
  };
};
