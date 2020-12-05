/**
 *  Created by pw on 2020/11/8 11:03 上午.
 */
import React from 'react';
import './DetailContent.less';
import Tab from '@/components/tab';
import Feature from '@/pages/teambuilding/teambuilding-detail/Feature';
import Route from '@/pages/teambuilding/teambuilding-detail/Route';
import CostInstructions from '@/pages/teambuilding/teambuilding-detail/CostInstructions';
import Bookings from '@/pages/teambuilding/teambuilding-detail/Bookings';

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
      <Feature feature={detail.feature} places={detail.places} />
      <Route schedules={detail.schedules} />
      <CostInstructions />
      <Bookings detail={detail} />
    </div>
  );
}

const PlannerIntroduce = (props: Props) => {
  const { detail } = props;
  return (
    <div className="planner-introduce">
      <div className="left">
        <img className="img" src={detail?.feature?.picture} />
        <div className="name">{detail?.planner}</div>
        <div className="position">团建策划师</div>
      </div>
      <div className="right">
        <div className="desc">{detail?.feature?.desc}</div>
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
