/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React, { useState, useEffect } from 'react';
import TeambuildinngContentList from './TeambuildinngContentList';
import TeambuildingHeader from './TeambuildingHeader';
import './index.less';
import { getActivities, getSettings } from '@/services';
import { __PAGE_SIZE } from '@/lib/Conts';
import { API } from '@/services/API';

export default function() {
  const [data, setData] = useState<API.ListResponsePayload<API.Activity>>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (param?: API.ListParam & API.SearchFormParams) => {
    const data = await getActivities(param);
    console.log(data);
    setData(data);
  };

  const handlePageChange = (page: number) => {
    fetchData({ page_no: page, page_size: __PAGE_SIZE });
    document.documentElement.scrollTop = 0;
  };

  const handleSearchPageChange = (
    name: string,
    params: API.SearchFormParams,
  ) => {
    // 截一下key传给后端
    const realParams = Object.keys(params).reduce<API.SearchFormParams>(
      (result, item) => {
        if (params[item] !== null) {
          result[item.replace('activity_', '').replace('area', 'province')] =
            params[item];
        }
        return result;
      },
      {},
    );
    console.log('请求', realParams);
    fetchData({ name, ...realParams, page_no: 1, page_size: __PAGE_SIZE });
    document.documentElement.scrollTop = 0;
  };

  if (!data) {
    return null;
  }

  return (
    <div className="teambuild-wrapper">
      <TeambuildingHeader onSearch={handleSearchPageChange} />
      <TeambuildinngContentList data={data} onPageChange={handlePageChange} />
    </div>
  );
}
