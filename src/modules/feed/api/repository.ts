import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '../../../core/axios-base-query';
import {GlobalFeedIn} from './dto/global-feed.in';
import {FEED_PAGE_SIZE} from '../consts';

interface GlobalFeedPage {
  page: number;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: builder => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedPage>({
      query: ({page}) => ({
        url: '/articles',
        method: 'get',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
        },
      }),
    }),
  }),
});

export const {useGetGlobalFeedQuery} = feedApi;
