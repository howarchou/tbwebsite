/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React, { useState, useEffect } from 'react';
// import { Stic } from 'react-sticky'
import { StickyContainer } from 'react-sticky';
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

  const fetchData = async (param?: API.ListParam) => {
    const data = await getActivities(param);
    console.log(data);
    setData(data);
  };

  const handlePageChange = (page: number) => {
    fetchData({ page_no: page, page_size: __PAGE_SIZE });
    document.documentElement.scrollTop = 0;
  };

  const handleSearchPageChange = (name: string) => {
    fetchData({ name: name, page_no: 1, page_size: __PAGE_SIZE });
    document.documentElement.scrollTop = 0;
  };

  if (!data) {
    return null;
  }

  return (
    <StickyContainer>
      <div className="teambuild-wrapper">
        <TeambuildingHeader onSearch={handleSearchPageChange} />
        <TeambuildinngContentList data={data} onPageChange={handlePageChange} />
      </div>
    </StickyContainer>
  );
}
