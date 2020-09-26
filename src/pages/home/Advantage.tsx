/**
 *  Created by pw on 2020/9/26 6:39 下午.
 */
import React from 'react';
import './Advantage.less';
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import TEAM_IMAGE from '../../images/home/team.png';
import PLAN_IMAGE from '../../images/home/plan.png';
import SERVICE_IMAGE from '../../images/home/service.png';

export default function() {
  const cards = [
    {
      id: '1',
      title: '团队',
      imageUrl: TEAM_IMAGE,
      desc:
        'Adipiscing elit. Suspendisse ipsum urna, fermentum id tempus nec, cursus vitae velit. Proin luctus nunc ut leo dignissim tempor. ',
    },
    {
      id: '2',
      title: '方案',
      imageUrl: PLAN_IMAGE,
      desc:
        'Adipiscing elit. Suspendisse ipsum urna, fermentum id tempus nec, cursus vitae velit. Proin luctus nunc ut leo dignissim tempor.',
    },
    {
      id: '3',
      title: '服务',
      imageUrl: SERVICE_IMAGE,
      desc:
        'Adipiscing elit. Suspendisse ipsum urna, fermentum id tempus nec, cursus vitae velit. Proin luctus nunc ut leo dignissim tempor.',
    },
  ];
  return (
    <div className="advantage-wrapper">
      <HomeSectionTitle
        title={'我们的优势'}
        desc={'精益求精，专业靠谱的团建策划师。精心打磨，亲自体验的团建产品'}
      />
      <div className="advantage-card-wrapper">
        {cards.map(card => {
          return (
            <div key={card.id} className="advantage-card">
              <img className="image" src={card.imageUrl} />
              <div className="title">{card.title}</div>
              <div className="desc">{card.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
