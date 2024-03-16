import {
  useGetImmunisationByIdQuery,
  usePutImmunisationDataMutation,
} from "@root/services/carer-info/medical-history/immunisation/immunisationApi";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import { UploadDocumentsTable } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/upload-documents-tab/UploadDocumentsTable";
import { ImmunisationInfoTab } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/immunisations-info-tab/ImmunisationInfoTab";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Error from "@root/components/Error";

export default function ViewImmunisationTableTabs() {
  const [breadCrumbData, setBreadCrumbData] = useState("Immunisation Info");
  const router = useRouter();
  const { immunisationId } = router.query;

  const { makePath } = usePath();
  const { data, isLoading, isError } =
    useGetImmunisationByIdQuery(immunisationId);

  const [putImmunisationData, { isSuccess }] = usePutImmunisationDataMutation();
  const tabsData = ["Immunisations Info", "Upload Documents"];

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Immunisation List",
      href: makePath({
        path: "/carer-info/medical-history/immunisations/",
        skipQueries: ["healthAndSafetyId"],
      }),
    },
    {
      name: "View Immunization",
    },
  ];
  if (isError) return <Error />;
  return (
    <Layout
    showTitleWithBreadcrumbs
    breadcrumbs={BREADCRUMBS}
    title={breadCrumbData}
  >
    {isLoading ? (
      <SkeletonFormdata />
    ) : (
      <HorizaontalTabs tabsDataArray={tabsData}>
        <ImmunisationInfoTab
          breadCrumbData={setBreadCrumbData}
          message={"View"}
          disabled
          onSubmitHandler={putImmunisationData}
          isError={isError}
          isSuccess={isSuccess}
          initialValueProps={{
            ...data?.data,
            dateLastViewed: new Date(data?.data?.dateLastViewed),
            dateOfImmunization: new Date(data?.data?.dateOfImmunization),
            dueDate: new Date(data?.data?.dueDate),
          }}
        />
        <UploadDocumentsTable disabled breadCrumbData={setBreadCrumbData} />
      </HorizaontalTabs>
    )}
  </Layout>
  )
}
