import React from 'react';
import {Container} from '../../../../common/components';
import {ArticleList} from '../article-list/article-list.component';

export const Feed: React.FC = () => {
  return (
    <Container>
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};
