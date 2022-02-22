import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { API_BASEPATH } = process.env.CONFIG;

export const auctionsListApi = createApi({
  reducerPath: 'auctionsList',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASEPATH,
  }),
  endpoints: (builder) => ({
    getAuctionsList: builder.query({
      query: (model = '') => `filterAuctions?search=${model}`,
    }),
  }),
});

export const { useGetAuctionsListQuery } = auctionsListApi;
