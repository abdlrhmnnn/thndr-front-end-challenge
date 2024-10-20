import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TickerDetailsResponse, TickerListResponse, TickerType} from './types';
import {
  API_Key,
  mapTickerDetailsResponseToTickerType,
  mapTickerListResponseToTickerListResponse,
} from './utils';

export const api = createApi({
  reducerPath: 'tickers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.polygon.io/v3/reference/tickers',
  }),
  endpoints: builder => ({
    getTickersList: builder.query<TickerListResponse, {searchQuery: string}>({
      query: ({searchQuery}) => {
        let query = `?&active=true&limit=20&apiKey=${API_Key}`;
        if (searchQuery) {
          query += `&search=${searchQuery}`;
        }
        return query;
      },
      transformResponse: (response: TickerListResponse) => {
        const formattedResponse =
          mapTickerListResponseToTickerListResponse(response);

        return formattedResponse;
      },
    }),

    getNextTickersList: builder.query<TickerListResponse, string | undefined>({
      query: nextURL => ({
        url: nextURL ? `${nextURL}&apiKey=${API_Key}&limit=20` : '',
      }),
      transformResponse: (response: TickerListResponse) => {
        const formattedResponse =
          mapTickerListResponseToTickerListResponse(response);

        return formattedResponse;
      },
    }),

    getTickerDetails: builder.query<TickerType, string>({
      query: ticker => ({
        url: `/${ticker}?apiKey=${API_Key}`,
      }),
      transformResponse: (response: TickerDetailsResponse) => {
        const formattedResponse =
          mapTickerDetailsResponseToTickerType(response);

        return formattedResponse.results;
      },
    }),
  }),
});

export const {
  useGetTickersListQuery,
  useLazyGetNextTickersListQuery,
  useGetTickerDetailsQuery,
} = api;
export default api;
