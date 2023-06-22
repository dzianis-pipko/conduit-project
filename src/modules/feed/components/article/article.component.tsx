import React from 'react';
import {Link} from 'react-router-dom';
import {FavoriteButton} from '../favorite-button/favorite-button.component';
import {TagList} from '../tag-list/tag-list.component';

export const Article: React.FC = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={'/@nokwin'}>
              <img
                src="https://api.realworld.io/images/demo-avatar.png"
                alt="defoult-avatar"
                className="inline-block w-8 h-8 rounded-full"
              />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link to={'/@nokwin'} className="font-medium">
                This is lorem ipsum text
              </Link>
              <span className="text-conduit-gray text-date">
                December 9, 2022
              </span>
            </div>
          </div>
          <FavoriteButton />
        </div>
        <Link to={'/article/qwert'} className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-darkestGray">
            Try to transmit the HTTP card, maybe it will override the multi-byte
            hard drive!
          </h1>
          <p className="text-conduit-darkenGray font-light mb-3.5 text-base">
            Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel
            quo. Earum odit rem natus totam atque cumque. Sint dolorem facere
            non.
          </p>
          <div className="flex justify-between">
            <span className="text-conduit-gray text-date font-light">
              Read more...
            </span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};
