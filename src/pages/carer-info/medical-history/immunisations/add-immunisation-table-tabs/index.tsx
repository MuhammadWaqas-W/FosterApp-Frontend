import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { ImmunisationInfoTab } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/immunisations-info-tab/ImmunisationInfoTab";
import { UploadDocumentsTable } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/upload-documents-tab/UploadDocumentsTable";
import React, { useState } from "react";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { usePostImmunisationDataMutation } from "@root/services/carer-info/medical-history/immunisation/immunisationApi";
export default function AddImmunisationsTableTabs() {
  const [breadCrumbData, setBreadCrumbData] = useState("Immunisation Info");
  const { makePath } = usePath();
  const router = useRouter();
  const { healthAndSafetyId, immunisationId } = router.query;
  const [postImmunization] = usePostImmunisationDataMutation();

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
      name: "Immunization",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      <HorizaontalTabs tabsDataArray={tabsData}>
        <ImmunisationInfoTab
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postImmunization}
          message={"Added"}
          isAdding
        />
        {immunisationId ? (
          <UploadDocumentsTable breadCrumbData={setBreadCrumbData} />
        ) : (
          <h4 style={{ textAlign: "center" }}>
            Please Fill Immunisation Info First
          </h4>
        )}
      </HorizaontalTabs>
    </Layout>
  );
}
