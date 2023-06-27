import clsx from 'clsx';
import React from 'react';
import {NavLink, useSearchParams} from 'react-router-dom';

export const FeedToggle: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  const globalFeetClasses = clsx(
    'bg-white border-conduit-green py-2 px-4 hover:text-black/60 hover:no-underline',
    {
      'text-black/30': tag,
      'border-b-2': !tag,
    },
  );
  return (
    <div className="h-8">
      <ul>
        <li>
          <NavLink to={'/'} className={globalFeetClasses}>
            Global Feed
          </NavLink>
          {tag && (
            <p className="bg-white border-b-2 border-conduit-green py-2 px-4 inline text-conduit-green">
              # {tag}
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};
