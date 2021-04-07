/**
 *  Created by pw on 2020/11/7 12:20 下午.
 */
import React, { useEffect, useState } from 'react';
import './TeambuildingHeader.less';
import SEARCH_ICON from '@/images/teambuilding/search.png';
import { getSettings } from '@/services';
import { API } from '@/services/API';

export default function() {
  const handleSearch = (searchText: string) => {};

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

const FilterPanel = () => {
  const [settings, setSettings] = useState<API.Activities_Settings[]>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const settings = await getSettings();
    setSettings(settings);
  };

  const filterItems = [
    { title: '团建目的地', tags: ['不限', '北京', '上海'] },
    {
      title: '团建玩法',
      tags: [
        '不限',
        '团队旅行',
        '常规拓展',
        '高空拓展',
        '趣味拓展',
        '水上闯关',
      ],
    },
    {
      title: '团建收益',
      tags: [
        '不限',
        '增强积极性',
        '强化合作',
        '提升凝聚力',
        '磨练意志',
        '提升荣誉感',
        '新员融入',
        '高效沟通',
        '卓越领导力',
        '企业文化导入',
        '鼓舞士气',
        '挑战自我',
        '执行力打造',
        '奖励旅游',
        '减压放松',
      ],
      hasMore: true,
    },
    {
      title: '团建天数',
      tags: [
        '不限',
        '半天',
        '一天',
        '两天',
        '三天',
        '四天',
        '五天',
        '六天',
        '七天',
        '七天以上',
      ],
    },
  ];

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
