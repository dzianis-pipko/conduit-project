import React from 'react';
import {Banner, Header} from './common/components';
import {Feed} from './modules/feed/components';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Feed />
      </main>
    </div>
  );
};
