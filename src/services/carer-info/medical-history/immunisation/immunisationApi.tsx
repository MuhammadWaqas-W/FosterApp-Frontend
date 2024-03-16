import { baseAPI } from "@root/services/baseApi";
const TAGS = "HEALTH_AND_SAFETY_IMMUNIZATION";
export const immunisationApi: any = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getImmunisationListData: builder.query({
      query: ({ params, fosterCarerId }: any) => ({
        url: `carer-Info/immunization?fosterCarerId=${fosterCarerId}`,
        method: "GET",
        params,
      }),
      providesTags: [TAGS],
    }),
    deleteImmunisationList: builder.mutation({
      query: (immunisationId: any) => ({
        url: `carer-Info/immunization/${immunisationId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAGS],
    }),
    postImmunisationData: builder.mutation({
      query: ({ formData, fosterCarerId }: any) => ({
        url: `carer-Info/immunization?fosterCarerId=${fosterCarerId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [TAGS],
    }),
    getImmunisationById: builder.query({
      query: (immunisationId: any) =>
        `carer-Info/immunization/${immunisationId}`,
      providesTags: [TAGS],
    }),
    putImmunisationData: builder.mutation({
      query: ({ fosterCarerId, immunisationId, formData }: any) => ({
        url: `carer-Info/immunization/${immunisationId}?fosterCarerId=${fosterCarerId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: [TAGS],
    }),
    getImmunisationDocumentListData: builder.query({
      query: ({ fosterCarerId, immunisationId, params }: any) => ({
        url: `carer-Info/documents/getall/${immunisationId}?fosterCarerId=${fosterCarerId}`,
        method: "GET",
        params,
      }),
      providesTags: [TAGS],
    }),
    postImmunisationDocumentData: builder.mutation({
      query: ({ immunisationId, fosterCarerId, formData }: any) => ({
        url: `carer-Info/immunization-documents/${immunisationId}?fosterCarerId=${fosterCarerId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags:[TAGS] 
    }),
  }),
});

export const {
  useGetImmunisationListDataQuery,
  useDeleteImmunisationListMutation,
  usePostImmunisationDataMutation,
  useGetImmunisationByIdQuery,
  usePutImmunisationDataMutation,
  useGetImmunisationDocumentListDataQuery,
  usePostImmunisationDocumentDataMutation,
} = immunisationApi;
