import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildImmunisationReportsFrom from "@root/sections/foster-child/child-reports/child-immunisation-Reports/ChildImmunisationReportsFrom";
import ClaDocumentationReportForm from "@root/sections/foster-child/child-reports/cla-documentation-report/ClaDocumentationReportForm";

ClaDocumentationReportActions.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function ClaDocumentationReportActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, ChildImmunisationReportID } = Router.query;
  const PAGE_TITLE = "VIEW CLA DOCUMENTATION";

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "child Info",
      href: {
        pathname: "/foster-child/child-reports/cla-documentation-report",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Reports",
      href: "",
    },
  ];

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Paper
        variant="elevation"
        elevation={1}
        sx={{
          borderRadius: 2,
        }}
      >
        <Box px={1} py={1}>
          {/* <ChildImmunisationReportsFrom
            action={action}
            fosterChildId={fosterChildId}
            ChildImmunisationReportID={ChildImmunisationReportID}
          /> */}
          <ClaDocumentationReportForm
            action={action}
            fosterChildId={fosterChildId}
            // ChildImmunisationReportID={ChildImmunisationReportID}
          />
        </Box>
      </Paper>
    </Box>
  );
}
