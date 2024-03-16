import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { HealthAndSafetyMain } from "@root/sections/carer-info/medical-history/health-and-safety/HealthAndSafetyMain";
import React from "react";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------

HealthAndSafety.getLayout = function getLayout(page: any) {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Health & Safety",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={"Health & Safety"}
    >
      {page}
    </Layout>
  );
};
 
// ----------------------------------------------------------------------

export default function HealthAndSafety() {
  return (
    <>
      <HealthAndSafetyMain />
    </>
  );
}
