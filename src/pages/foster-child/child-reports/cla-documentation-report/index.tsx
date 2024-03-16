import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ChildImmunisationReportsTable from "@root/sections/foster-child/child-reports/child-immunisation-Reports/ChildImmunisationReportsTable";
import ClaDocumentationReportTable from "@root/sections/foster-child/child-reports/cla-documentation-report/ClaDocumentationReportTable";
ClaDocumentationReport.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function ClaDocumentationReport() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "child Info",
      href: {
        // pathname: "/foster-child/events-and-notification/ofsted-notification",
        // pathname: "/foster-child/child-reports/cla-documentation-report",
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Reports",
      href: "",
    },
  ];
  const PAGE_TITLE = "CLA DOCUMENTATION";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      {/* <ChildImmunisationReportsTable fosterChildId={fosterChildId} /> */}
      <ClaDocumentationReportTable fosterChildId={fosterChildId} />
    </Box>
  );
}

// import React from "react";

// export default function ClaDocumentationReport() {
//   return <div>ClaDocumentationReport</div>;
// }
