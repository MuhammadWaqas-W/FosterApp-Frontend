import { baseAPI } from "@root/services/baseApi";
export const ChildComplaintsReport = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllComplaintsListData: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/child-reports/child-complaint/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_COMPLAINTS_REPORT"],
    }),
    // getSingleEducationInfoData: builder.query({
    //   query: ({ educationInfoId }: any) => ({
    //     url: `education-records/education-info/${educationInfoId}`,
    //     method: "GET",
    //     params: educationInfoId,
    //   }),
    // }),
    // postEducationInfoData: builder.mutation({
    //   //check the str of body here
    //   query: ({ body, fosterChildId }: any) => ({
    //     url: `education-records/education-info/${fosterChildId}`,
    //     method: "POST",
    //     body: body,
    //   }),
    //   invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    // }),
    // patchEducationInfoData: builder.mutation({
    //   query: (apiDataParameter: any) => ({
    //     url: `education-records/education-info/${apiDataParameter?.pathParams?.educationInfoId}`,
    //     method: "PATCH",
    //     body: apiDataParameter?.body,
    //   }),
    //   invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    // }),
    deleteComplaintsReportData: builder.mutation({
      query: ({ id }: any) => ({
        url: `/child-reports/child-complaint/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_COMPLAINTS_REPORT"],
    }),
  }),
});
export const {
  useGetAllComplaintsListDataQuery,
  useLazyGetAllComplaintsListDataQuery,
  //   useGetSingleEducationInfoDataQuery,
  //   useLazyGetSingleEducationInfoDataQuery,
  //   usePostEducationInfoDataMutation,
  //   usePatchEducationInfoDataMutation,
    useDeleteComplaintsReportDataMutation,
} = ChildComplaintsReport;
