import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "REFERENCE-DATA-MANAGEMENT";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceDataManagementTableApi: builder.query({
      query: ({ params }: any) => ({
        url: `/admin/references/categories`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),

    deleteReferenceDataManagementCategoriesById: builder.mutation({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `/admin/references/categories/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetReferenceDataManagementTableApiQuery,
  useDeleteReferenceDataManagementCategoriesByIdMutation,
} = contactApi;
