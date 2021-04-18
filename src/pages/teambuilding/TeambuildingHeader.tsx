/**
 *  Created by pw on 2020/11/7 12:20 下午.
 */
import React, { useEffect, useReducer, useState } from 'react';
import './TeambuildingHeader.less';
import SEARCH_ICON from '@/images/teambuilding/search.png';
import * as Storage from '@/lib/storage';
import { getSettings } from '@/services';
import { API } from '@/services/API';

interface Props {
  onSearch: (searchText: string, params: API.SearchFormParams) => void;
}

type SearchFormActions = 'UPDATE' | 'FETCH';

interface SearchFormActionType {
  type: SearchFormActions;
  payload: {
    [key: string]: any;
  };
}

export default function(props: Props) {
  const { onSearch } = props;
  // const handleSearch = (searchText: string) => {};
  function reducer(state: API.SearchFormParams, action: SearchFormActionType) {
    console.log('出发了reducer', action);

    switch (action.type) {
      case 'UPDATE':
        // onSearch('', {
        //   ...state,
        // });
        return {
          ...state,
          ...action.payload,
        };
        break;
      case 'FETCH':
        onSearch('', {
          ...state,
        });
        break;
      default:
        break;
    }
  }
  const [searchForm, dispatch] = useReducer(reducer, {
    activity_area: null,
    activity_duration: null,
    activity_method: null,
    activity_profit: null,
  });

  return (
    <div className="teambuilding-header">
      <SearchInput
        onSearch={(searchText: string) => onSearch(searchText, searchForm)}
      />
      <FilterPanel dispatch={dispatch} />
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
    // if (searchText.trim().length && onSearch) {
    onSearch(searchText);
    // }
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

interface FilterPanelProps {
  dispatch: React.Dispatch<SearchFormActionType>;
}

const FilterPanel = (props: FilterPanelProps) => {
  const [settings, setSettings] = useState<API.Activities_Settings>({
    activity_area: [],
    activity_duration: [],
    activity_method: [],
    activity_profit: [],
  });
  const { dispatch } = props;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const settings = await getSettings();
    // 过滤一下城市
    settings.activity_area = settings.activity_area.filter(
      a => a.value === Storage.get(Storage.STORAGE_KEY_AREA),
    );
    setSettings(settings);
  };

  // settings转成这个结构
  // const filterItems = Object.keys(settings).map(
  //   key => {

  //   }
  // );
  const sort = [
    { title: '团建目的地', key: 'activity_area' },
    { title: '团建玩法', key: 'activity_method' },
    { title: '团建收益', key: 'activity_profit' },
    { title: '团建天数', key: 'activity_duration' },
  ];
  const filterItems = sort.map(item => ({
    ...item,
    tags: [{ text: '不限', value: null }].concat(settings[item.key]),
  }));

  return (
    <div className="filter-panel-wrapper">
      <div className="filter-panel">
        {filterItems.map((item, index) => {
          switch (item.key) {
            case 'activity_area':
              return (
                <FilterPanelCityItem
                  dispatch={dispatch}
                  key={index}
                  tagKey={item.key}
                  title={item.title}
                  tags={item.tags}
                  hasMore={false}
                />
              );
              break;
            case 'activity_profit':
              return (
                <FilterPanelMutilItem
                  dispatch={dispatch}
                  key={index}
                  tagKey={item.key}
                  title={item.title}
                  tags={item.tags}
                  hasMore={false}
                />
              );
              break;

            default:
              return (
                <FilterPanelItem
                  dispatch={dispatch}
                  key={index}
                  tagKey={item.key}
                  title={item.title}
                  tags={item.tags}
                  hasMore={false}
                />
              );
              break;
          }
        })}
      </div>
    </div>
  );
};

interface FilterPanelItemProps {
  title: string;
  tagKey: string;
  tags: API.TagItem[];
  hasMore?: boolean;
  dispatch: React.Dispatch<SearchFormActionType>;
}

const FilterPanelItem = (props: FilterPanelItemProps) => {
  const { title, tagKey, tags = [], hasMore, dispatch } = props;
  const [defaultTag] = tags;
  const [selectTag, setSelectTag] = useState<number | null>(defaultTag.value);
  const handleTagClick = (value: number | null) => {
    setSelectTag(value);
    console.log('更新', tagKey, value);
    dispatch({
      type: 'UPDATE',
      payload: {
        [tagKey]: value,
      },
    });
    dispatch({
      type: 'FETCH',
      payload: null,
    });
  };

  return (
    <div className="filter-panel-item">
      <div className="title">{title}</div>
      <div className="filter-panel-item-wrapper">
        {tags.map(tag => {
          const cls = tag.value === selectTag ? 'select-tag' : '';
          return (
            <span
              key={tag.value}
              className={`tag ${cls}`}
              onClick={() => handleTagClick(tag.value)}
            >
              {tag.text}
            </span>
          );
        })}
      </div>
      {hasMore ? <div className="more">展开更多</div> : null}
    </div>
  );
};

/**
 * 城市组件
 * @param props
 * @returns
 */
const FilterPanelCityItem = (props: FilterPanelItemProps) => {
  const { title, tagKey, tags = [], hasMore, dispatch } = props;
  const [defaultTag] = tags;
  const [selectTag, setSelectTag] = useState(defaultTag.value);
  const [area, setArea] = useState<number | null>();
  const currentTag = tags.find(t => t.value === selectTag);
  console.log(currentTag);
  const handleTagClick = (value: number | null) => {
    setSelectTag(value);
    // dispatch({
    //   type: 'UPDATE',
    //   payload: {
    // area: selectTag,
    // },
    // });
    dispatch({
      type: 'FETCH',
      payload: {},
    });
  };
  const handleAreaClick = (value: number | null) => {
    setArea(value);
    dispatch({
      type: 'UPDATE',
      payload: {
        area: value,
      },
    });
    dispatch({
      type: 'FETCH',
      payload: {},
    });
  };

  return (
    <div className="filter-panel-item">
      <div className="title">{title}</div>
      <div className="filter-panel-item-wrapper">
        {tags.map(tag => {
          const cls = selectTag === tag.value ? 'select-tag' : '';
          return (
            <span
              key={tag.value}
              className={`tag ${cls}`}
              onClick={() => handleTagClick(tag.value)}
            >
              {tag.text}
            </span>
          );
        })}
        {currentTag?.items ? (
          <div>
            {currentTag.items.map(tag => (
              <span
                key={tag.value}
                className={`tag ${area === tag.value ? 'select-tag' : ''}`}
                onClick={() => handleAreaClick(tag.value)}
              >
                {tag.text}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {hasMore ? <div className="more">展开更多</div> : null}
    </div>
  );
};

/**
 * 多选组件
 * @param props
 * @returns
 */
const FilterPanelMutilItem = (props: FilterPanelItemProps) => {
  const { title, tagKey, tags = [], hasMore, dispatch } = props;
  const [defaultTag] = tags;
  const [selectTags, setSelectTags] = useState(new Set([defaultTag.value]));
  const handleTagClick = (value: number | null) => {
    // 不限
    if (value === null) {
      selectTags.clear();
      selectTags.add(null);
    } else {
      // 全部
      selectTags.delete(null);
    }
    if (selectTags.has(value)) {
      // 取消
      selectTags.delete(value);
      setSelectTags(selectTags);
    } else {
      // 添加
      setSelectTags(selectTags.add(value));
    }
    console.log('更新多选', selectTags);
    dispatch({
      type: 'UPDATE',
      payload: {
        profits: Array.from(selectTags).toString(),
      },
    });
    dispatch({
      type: 'FETCH',
      payload: {},
    });
  };

  return (
    <div className="filter-panel-item">
      <div className="title">{title}</div>
      <div className="filter-panel-item-wrapper">
        {tags.map(tag => {
          const cls = selectTags.has(tag.value) ? 'select-tag' : '';
          return (
            <span
              key={tag.value}
              className={`tag ${cls}`}
              onClick={() => handleTagClick(tag.value)}
            >
              {tag.text}
            </span>
          );
        })}
      </div>
      {hasMore ? <div className="more">展开更多</div> : null}
    </div>
  );
};
