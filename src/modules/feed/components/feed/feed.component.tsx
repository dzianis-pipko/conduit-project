import React from 'react';
import {Container} from '../../../../common/components';
import {ArticleList} from '../article-list/article-list.component';
import {FeedToggle} from '../feed-toggle/feed-toggle.component';

export const Feed: React.FC = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};
