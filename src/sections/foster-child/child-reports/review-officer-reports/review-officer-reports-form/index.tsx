import { CarerDevelopmentOne } from "./carers-own-development-one/CarerDevelopmentOne";
import { CarerDevelopmentTwo } from "./carers-own-development-two/CarerDevelopmentTwo";
import { ChangeApprovalTerm } from "./change-approval-term/ChangeApprovalTerm";
import { CheckMedicals } from "./check-medicals/CheckMedicals";
import { Exemptions } from "./exemptions/Exemptions";
import { ImpactFostring } from "./impact-fostering/ImpactFostering";
import { NeedsOfChildren } from "./needs-of-children/NeedsOfChildren";
import { OtherDocuments } from "./other-documents/OtherDocuments";
import { PartOfTeam } from "./part-of-team/PartOfTeam";
import { PresenrForm } from "./present-form/PresenrForm";
import { LastReviewMeeting } from "./last-review-meeting/LastReviewMeeting";
import { ReviewMeeting } from "./review-meeting/ReviewMeeting";
import { Summery } from "./summary/Summery";
import { Recommendation } from "./recommendation/Recommendation";
import { NextReviewMeeting } from "./next-review-meeting/NextReviewMeeting";

export const ReviewOfficerReportFromData = [
  // {
  //   title: "Expand All",
  //   // component: <AnnualReview />,
  // },
  {
    title: "Present",
    component: <PresenrForm />,
  },
  {
    title: "Reports informing the review meeting",
    component: <ReviewMeeting />,
  },
  {
    title: "Checks and medicals",
    component: <CheckMedicals />,
  },
  {
    title: "Other documents",
    component: <OtherDocuments />,
  },
  {
    title: "Recommendations of last review meeting",
    component: <LastReviewMeeting />,
  },
  {
    title: "Exemptions/placements outside terms of approval",
    component: <Exemptions />,
  },
  {
    title: "SUMMARY AND DISCUSSION",
    isHeading: true,
  },
  {
    title: "Impact of fostering",
    component: <ImpactFostring />,
  },
  {
    title: "Needs of children",
    component: <NeedsOfChildren />,
  },
  {
    title: "Working as part of a team",
    component: <PartOfTeam />,
  },
  {
    title: "Carer's own development (carer 1)",
    component: <CarerDevelopmentOne />,
  },
  {
    title: "Carer's own development (carer 2)",
    component: <CarerDevelopmentTwo />,
  },
  {
    title: "SUMMARY AND RECOMMENDATION",
    isHeading: true,
  },
  {
    title: "Summary",
    component: <Summery />,
  },
  {
    title: "Changes to approval terms",
    component: <ChangeApprovalTerm />,
  },
  {
    title: "Recommendation",
    component: <Recommendation />,
  },
  {
    title: "Next Review meeting",
    component: <NextReviewMeeting />,
  },
];

//Sorting Mock Data

// export const sortingData = [
//   {
//     value: "Ascending",
//   },
//   {
//     value: "Decending",
//   },
// ];
