/**
 *  Created by pw on 2020/11/7 12:20 下午.
 */
import React, { useEffect, useState } from 'react';
import './TeambuildingHeader.less';
import SEARCH_ICON from '@/images/teambuilding/search.png';
import { getSettings } from '@/services';

export default function() {
  const [settings, setSettings] = useState<API.Activities_Settings[]>();
  const handleSearch = (searchText: string) => {};

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const settings = await getSettings();
    setSettings(settings);
  };

  return (
    <div className="teambuilding-header">
      <SearchInput onSearch={handleSearch} />
      <FilterPanel />
    </div>
  );
}

interface SearchInputProps {
  onSearch: (searchText: string) => void;
  searchBtnLabel?: string;
}

const SearchInput = (props: SearchInputProps) => {
  const { onSearch, searchBtnLabel = '查询' } = props;
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim().length && onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <div className="search_input_wrapper">
      <input className="input" onChange={handleChange} />
      <div className="action" onClick={handleSearch}>
        <img className="icon" src={SEARCH_ICON} />
        <div className="label">{searchBtnLabel}</div>
      </div>
    </div>
  );
};

const filterItems = [
  { title: '团建目的地', tags: ['不限', '行政区', '周边城市', '全部景点'] },
  {
    title: '团建玩法',
    tags: [
      '不限',
      '主题创意',
      '水上运动',
      '户外体验',
      '悠享玩法',
      '草原团建',
      '海岸沙滩',
      '荒岛求生',
      '深海探索',
      '高山呼喊',
      '密室逃生',
    ],
    hasMore: true,
  },
  { title: '团建收益', tags: ['不限', '增强积极性', '强化合作', '提升凝聚力'] },
  { title: '团建天数', tags: ['不限', '半天', '一天', '两天', '三天以上'] },
];

const FilterPanel = () => {
  return (
    <div className="filter-panel-wrapper">
      <div className="filter-panel">
        {filterItems.map((item, index) => {
          return (
            <FilterPanelItem
              key={index}
              title={item.title}
              tags={item.tags}
              hasMore={item.hasMore}
            />
          );
        })}
      </div>
    </div>
  );
};

interface FilterPanelItemProps {
  title: string;
  tags: string[];
  hasMore?: boolean;
}

const FilterPanelItem = (props: FilterPanelItemProps) => {
  const { title, tags = [], hasMore } = props;
  const [defaultTag = ''] = tags;
  const [selectTag, setSelectTag] = useState<string>(defaultTag);
  const handleTagClick = (tag: string) => {
    setSelectTag(tag);
  };
  return (
    <div className="filter-panel-item">
      <div className="title">{title}</div>
      <div className="filter-panel-item-wrapper">
        {tags.map(tag => {
          const cls = tag === selectTag ? 'select-tag' : '';
          return (
            <span
              key={tag}
              className={`tag ${cls}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          );
        })}
      </div>
      {hasMore ? <div className="more">展开更多</div> : null}
    </div>
  );
};
