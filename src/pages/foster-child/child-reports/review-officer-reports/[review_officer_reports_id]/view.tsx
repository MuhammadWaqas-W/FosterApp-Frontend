import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { ReviewOfficerReportsForm } from "@root/sections/foster-child/child-reports/review-officer-reports/review-officer-reports-form/ReviewOfficerReportsForm";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/review-officer-reports?fosterChildId=${query}`,
  },
  {
    name: "Child Reports list",
    href: "/foster-child/child-reports/review-officer-reports",
  },
];

const PAGE_TITLE = "View Reviewing Officer Reports";
// ----------------------------------------------------------------------

ViewFamilyPersonForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewFamilyPersonForm() {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query);

  const reviewReportsId = query["review_officer_reports_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetFamilyPersonListByIdQuery(reviewReportsId);

  console.log("Is loading: ", data);

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
        sx={{ mb: 2 }}
      />
      <ReviewOfficerReportsForm />
    </Page>
  );
}
