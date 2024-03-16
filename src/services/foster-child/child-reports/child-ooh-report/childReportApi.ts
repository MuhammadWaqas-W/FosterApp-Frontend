import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const childReportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    childReportListList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `child-reports/ooh-report/list/${payload.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
    postChildReportList: builder.mutation({
      query: (payload: any) => ({
        url: `child-reports/ooh-report`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
    singleChildReportList: builder.query({
      query: (oohId: any) => `child-reports/ooh-report/${oohId}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
    patchChildReportList: builder.mutation({
      query: ({ oohId, ...formData }: any) => ({
        url: `child-reports/ooh-report/${oohId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
    deleteChildReportList: builder.mutation({
      query: (oohId: any) => ({
        url: `child-reports/ooh-report/${oohId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
  }),
});
export const {
  useChildReportListListQuery,
  useLazyChildReportListListQuery,
  usePostChildReportListMutation,
  usePatchChildReportListMutation,
  useDeleteChildReportListMutation,
} = childReportApi;
