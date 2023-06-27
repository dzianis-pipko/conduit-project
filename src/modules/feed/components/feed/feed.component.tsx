import React, {useState} from 'react';
import {Container} from '../../../../common/components';
import {ArticleList} from '../article-list/article-list.component';
import {FeedToggle} from '../feed-toggle/feed-toggle.component';
import {useGetGlobalFeedQuery} from '../../api/repository';
import ReactPaginate from 'react-paginate';
import {FEED_PAGE_SIZE} from '../../consts';
import {useSearchParams} from 'react-router-dom';
import {serializeSearchParams} from '../../../../utils/router';
import {TagCloud} from '../tag-cloud/tag-cloud.component';

export const Feed: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 0,
  );
  const handlePageChange = ({selected}: {selected: number}) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({page: String(selected)}));
  };

  const {data, error, isLoading, isFetching} = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  if (isLoading || isFetching) {
    return <Container>Feed Loading...</Container>;
  }

  if (error) {
    return <Container>Error While Loading Feed</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <div className="w-3/4">
          <ArticleList list={data?.articles || []} />
          <nav className="my-6">
            <ReactPaginate
              pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex my-4"
              pageClassName="group"
              pageLinkClassName="px-3 py-2 text-conduit-green bg-white border border-conduit-lightenGray -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-pageHoverBg"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
              onPageChange={handlePageChange}
              forcePage={page}
            />
          </nav>
        </div>
        <div className="w-1/4 pl-3">
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};
