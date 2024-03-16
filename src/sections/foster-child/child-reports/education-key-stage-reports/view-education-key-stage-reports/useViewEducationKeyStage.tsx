import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useGetEducationKeyStageReportRecordQuery } from "@root/services/foster-child/child-reports/education-key-stage-report/EducationKeyStageReportAPI";

const useViewEducationKeyStage = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId;

  const { data, isLoading } =
    useGetEducationKeyStageReportRecordQuery(fosterChildId);

  console.log(data?.data?.getEducationKeyStageReportsRes?.noToAboveQuestion);

  // achievements: "text";
  // arrangementsForEducationNeeds: "text";
  // attendance: 30.1;
  // awardsAndRewards: "text";
  // childHaveAStatementEducationalNeeds: false;
  // classStudying: "text";
  // createdAt: "2023-08-28T15:27:24.000Z";
  // createdBy: "Ahmed Ali Ahmed";
  // currentKeyStage: "abc";
  // designatedAuthority: "abc";
  // expectedKeyStage: "abc";
  // fosterChildId: "2af08ed3-75cc-4e29-91bd-3ccc93509208";
  // id: "3ca9b1a2-3784-49ea-9ed0-2d6d6e710f92";
  // ifaId: "8f52703b-cdaa-4720-8f34-4cce2658de28";
  // isChildHaveSchoolPlacement: true;
  // isSchoolDueToFosterPlaceChange: false;
  // isThisChildSchool: false;

  // notes: "text";
  // personalEducationPlan: "text";
  // schoolBusPhone: "+92133454644";
  
  // schoolYear: "abc";
  // specialEducationNeeds: "text";
  // stageOfEducation: "abc";
  // teacherEmailAddress: "example@example.com";
  // teacherName: "abc";
  // teacherPhone: "+92133454644";
  // teacherRole: "abc";
  // updatedAt: "2023-08-28T15:27:24.000Z";
  // userId: "8f52703b-cdaa-4720-8f34-4cce2658de28";

  const reportsData = data?.data?.getEducationKeyStageReportsRes;

  const defaultValues = {
    isChildHaveSchoolPlacement: "false",
    noToAboveQuestion: reportsData?.noToAboveQuestion,
    school: reportsData?.school,
    schoolType: reportsData?.schoolType,
    personalEducationPlan: reportsData?.personalEducationPlan,
  };

  const childExclusionSchema: any = Yup.object().shape({
    isChildHaveSchoolPlacement: Yup.string().required("Required"),
    noToAboveQuestion: Yup.string().required("Required"),
    schoolType: Yup.string().required("Required"),
    personalEducationPlan: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues, isLoading };
};

export default useViewEducationKeyStage;
