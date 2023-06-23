import React from 'react';
import {Container} from '../../../../common/components';
import {ArticleList} from '../article-list/article-list.component';
import {FeedToggle} from '../feed-toggle/feed-toggle.component';
import {useGetGlobalFeedQuery} from '../../api/repository';

export const Feed: React.FC = () => {
  const {data, error, isLoading} = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <Container>Feed Loading...</Container>;
  }

  if (error) {
    return <Container>Error While Loading Feed</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};
