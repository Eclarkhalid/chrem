import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = process.env.NEXT_PUBLIC_VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi', // Corrected from `reducePath` to `reducerPath`
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey!);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params: { articleUrl: string | number | boolean; }) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
