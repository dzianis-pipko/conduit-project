import React from 'react';
import {Banner} from '../../../common/components';
import {Feed} from '../components';

export const GlobalFeedPage: React.FC = () => {
  return (
    <main>
      <Banner />
      <Feed />
    </main>
  );
};
