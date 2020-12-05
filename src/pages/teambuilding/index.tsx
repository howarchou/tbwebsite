/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React, { useState, useEffect } from 'react';
import TeambuildingHeader from './TeambuildingHeader';
import TeambuildinngContentList from './TeambuildinngContentList';
import './index.less';
import { getActivities } from '@/services';

export default function() {
  const [data, setData] = useState<API.ListResponsePayload<API.Activity>>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getActivities();
    setData(data);
  };

  if (!data) {
    return null;
  }

  return (
    <div className="teambuild-wrapper">
      {/*<TeambuildingHeader />*/}
      <TeambuildinngContentList data={data} />
    </div>
  );
}
