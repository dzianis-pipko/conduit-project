import React from 'react';
import {Banner, Header} from './common/components';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
};
