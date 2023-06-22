import React from 'react';
import {NavLink} from 'react-router-dom';

export const FeedToggle: React.FC = () => {
  return (
    <div className="h-8">
      <ul>
        <li>
          <NavLink
            to={'/'}
            className="bg-white border-b-2 border-conduit-green py-2 px-4">
            Global Feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
