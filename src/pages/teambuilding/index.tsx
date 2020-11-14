/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React from 'react';
import TeambuildingHeader from './TeambuildingHeader';
import TeambuildinngContentList from './TeambuildinngContentList';
import './index.less';

export default function() {
  return (
    <div className="teambuild-wrapper">
      <TeambuildingHeader />
      <TeambuildinngContentList />
    </div>
  );
}
