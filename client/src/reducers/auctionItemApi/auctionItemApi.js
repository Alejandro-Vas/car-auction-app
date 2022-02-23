import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { API_BASEPATH } = process.env.CONFIG;

export const auctionItemApi = createApi({
  reducerPath: 'auctionsItem',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASEPATH,
  }),
  endpoints: (builder) => ({
    getAuctionItem: builder.query({
      query: (id = '') => `auction/${id}`,
    }),
  }),
});

export const { useGetAuctionItemQuery } = auctionItemApi;
