/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React, { useState, useEffect } from 'react';
import TeambuildingHeader from './TeambuildingHeader';
import TeambuildinngContentList from './TeambuildinngContentList';
import './index.less';
import { getActivities } from '@/services';
import { __PAGE_SIZE } from '@/lib/Conts';

export default function() {
  const [data, setData] = useState<API.ListResponsePayload<API.Activity>>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (param?: API.ListParam) => {
    const data = await getActivities(param);
    setData(data);
  };

  const handlePageChange = (page: number) => {
    fetchData({ page_no: page, page_size: __PAGE_SIZE });
  };

  if (!data) {
    return null;
  }

  return (
    <div className="teambuild-wrapper">
      {/*<TeambuildingHeader />*/}
      <TeambuildinngContentList data={data} onPageChange={handlePageChange} />
    </div>
  );
}
