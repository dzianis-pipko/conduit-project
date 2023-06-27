import clsx from 'clsx';
import React from 'react';
import {Link} from 'react-router-dom';

enum TagListStyle {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}
interface TagListProps {
  list: string[];
  itemStyle?: keyof typeof TagListStyle;
  itemAs?: 'li' | 'a';
}

export const TagList: React.FC<TagListProps> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = 'li',
}) => {
  const itemClasses = clsx(
    'font-light text-date border mr-1 mb-0.2 px-tag rounded-tag',
    {
      'border-conduit-lightenGray text-conduit-tag':
        itemStyle === TagListStyle.LIGHT,
      'bg-conduit-tagItemBg text-white border-conduit-tagItemBg hover:bg-conduit-tagItemBgDarken hover:border-conduit-tagItemBgDarken':
        itemStyle === TagListStyle.DARK,
      'hover:text-white hover:no-underline':
        itemStyle === TagListStyle.DARK && itemAs === 'a',
    },
  );
  return (
    <ul className="flex flex-wrap mb-4">
      {list.map(tag => {
        return itemAs === 'li' ? (
          <li key={tag} className={itemClasses}>
            {tag}
          </li>
        ) : (
          <Link to={`/?tag=${tag}`} key={tag} className={itemClasses}>
            {tag}
          </Link>
        );
      })}
    </ul>
  );
};
