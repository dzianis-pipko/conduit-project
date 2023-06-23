import React from 'react';

interface TagListProps {
  list: string[];
}

export const TagList: React.FC<TagListProps> = ({list}) => {
  return (
    <ul className="flex mb-4">
      {list.map(tag => (
        <li
          key={tag}
          className="font-light text-date border border-conduit-lightenGray text-conduit-tag mr-1 mb-0.2 px-tag rounded-tag">
          {tag}
        </li>
      ))}
    </ul>
  );
};
