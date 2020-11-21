/**
 *  Created by pw on 2020/11/8 11:03 上午.
 */
import React from 'react';
import './DetailContent.less';
import Tab from '@/components/tab';
import Feature from '@/pages/teambuilding/detail/Feature';
import Route from '@/pages/teambuilding/detail/Route';
import CostInstructions from '@/pages/teambuilding/detail/CostInstructions';
import Bookings from '@/pages/teambuilding/detail/Bookings';
import Planner_IMG from '@/images/teambuilding/planer.png';

const tabs = [
  { id: 'feature', label: '团建特色', type: 'feature' },
  { id: 'route', label: '行程结束', type: 'route' },
  { id: 'cost', label: '费用说明', type: 'cost' },
  { id: 'notice', label: '预定须知', type: 'notice' },
];

interface Props {
  detail: API.Activity;
}

export default function(props: Props) {
  const { detail } = props;
  return (
    <div className="detail-content-wrapper">
      <Tab tabs={tabs} />
      <PlannerIntroduce detail={detail} />
      <Feature feature={detail.feature} places={detail.price} />
      <Route schedules={detail.schedules} />
      <CostInstructions />
      <Bookings />
    </div>
  );
}

const PlannerIntroduce = (props: Props) => {
  const { detail } = props;
  return (
    <div className="planner-introduce">
      <div className="left">
        <img className="img" src={Planner_IMG} />
        <div className="name">牛丽</div>
        <div className="position">团建策划师</div>
      </div>
      <div className="right">
        <div className="desc">
          关于泰国普吉岛，这个多面风情的岛屿，常年位于境外旅游热搜榜前列，第一次去的人，容易被它的热带海岛风情和高性价比吸引到想再二刷；第N次去的人，更是因为每次都能发现普吉的新玩法，让人想再多宠幸一遍。
        </div>
      </div>
    </div>
  );
};

interface TeambuildingSubtitleProps {
  title: string;
}

export const TeambuildingSubtitle = (props: TeambuildingSubtitleProps) => {
  const { title } = props;
  return (
    <div className="teambuild-sub-title">
      <div className="line" />
      <div className="sub-title">{title}</div>
    </div>
  );
};
