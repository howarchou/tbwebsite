/**
 *  Created by pw on 2020/11/8 6:11 下午.
 */
import React from 'react';
import './CostInstructions.less';
import { TeambuildingSubtitle } from '@/pages/teambuilding/detail/DetailContent';
import { CostIF } from '@/pages/teambuilding/types';

export default function() {
  const costs = [
    { title: '交通', desc: '来回大巴，油费，过路费，停车，司机餐费' },
    { title: '用餐', desc: '正餐10人/桌，不包含酒水' },
    { title: '门票', desc: '景区门票' },
    { title: '拓展', desc: '拓展活动' },
    { title: '策划', desc: '策划费用' },
    { title: '场地', desc: '场地租用' },
    { title: '物资', desc: '活动物料' },
    { title: '保险', desc: '全程意外保险' },
    { title: '领队', desc: '全场领队跟随' },
    { title: '横幅', desc: '活动定制横幅' },
    { title: '用水', desc: '没人每日两瓶' },
  ];
  const notCost = [
    {
      desc:
        '因交通延阻、罢工、天气、飞机、机器故障、航班取消或更改时间等不可抗力原因所导致的额外费用',
    },
    { desc: '一切个人消费及费用包含中未提及的任何费用' },
    { desc: '一切个人消费及费用包含中未提及的任何费用' },
  ];
  return (
    <div className="cost-instructions">
      <TeambuildingSubtitle title={'费用说明'} />
      <div className="cost-list">
        <CostContent mainTitle={'费用包含'} costs={costs} />
        <CostContent mainTitle={'费用不包含'} costs={notCost} />
      </div>
    </div>
  );
}

interface CostContentProps {
  mainTitle: string;
  costs: CostIF[];
}

const CostContent = (props: CostContentProps) => {
  const { costs, mainTitle } = props;
  return (
    <div className="content">
      <div className="title">{mainTitle}</div>
      {costs.map((cost, index) => {
        return (
          <div key={index} className="item">
            {cost.title ? (
              <div className="item-title">{`${cost.title}：`}</div>
            ) : (
              <div className="item-circle" />
            )}
            <div className="desc">{cost.desc}</div>
          </div>
        );
      })}
    </div>
  );
};
