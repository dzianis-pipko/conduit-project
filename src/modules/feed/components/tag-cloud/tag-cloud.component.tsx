import React from 'react';
import {TagList} from '../tag-list/tag-list.component';
import {useGetPopularTagsQuery} from '../../api/repository';

export const TagCloud: React.FC = () => {
  const {data, error, isLoading, isFetching} = useGetPopularTagsQuery('');

  if (isLoading || isFetching) {
    return (
      <div className="bg-conduit-tagCloudBg p-3 pt-1.5">
        <p className="mb-2">Loading Popular Tags ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-conduit-tagCloudBg p-3 pt-1.5">
        <p className="mb-2">Error While Loading Popular Tags ...</p>
      </div>
    );
  }

  return (
    <div className="bg-conduit-tagCloudBg p-3 pt-1.5">
      <p className="mb-2">Popular Tags</p>
      <TagList list={data!.tags} itemStyle="DARK" itemAs="a" />
    </div>
  );
};
