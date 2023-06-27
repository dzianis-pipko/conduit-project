import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '../../../core/axios-base-query';
import {GlobalFeedInDTO} from './dto/global-feed.in';
import {FEED_PAGE_SIZE} from '../consts';
import {PopularTagsInDTO} from './dto/popular-tags.in';

interface GlobalFeedPage {
  page: number;
  tag: string | null;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: builder => ({
    getGlobalFeed: builder.query<GlobalFeedInDTO, GlobalFeedPage>({
      query: ({page, tag}) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
    }),
    getPopularTags: builder.query<PopularTagsInDTO, any>({
      query: () => ({url: '/tags'}),
    }),
  }),
});

export const {useGetGlobalFeedQuery, useGetPopularTagsQuery} = feedApi;
