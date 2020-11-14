/**
 *  Created by pw on 2020/11/8 9:53 上午.
 */
import React from 'react';
import './detail.less';
import { CardIF } from '@/pages/teambuilding/types';
import Header from '@/components/header/Header';
import DetailContent from '@/pages/teambuilding/detail/DetailContent';
import Footer from '@/pages/home/Footer';

export default function() {
  return (
    <div className="teambuilding-detail">
      <Header />
      <DetailHeaderCard card={card} />
      <DetailContent />
      <Footer />
    </div>
  );
}

const card = {
  id: 1,
  imgUrl:
    'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
  title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
  tags: ['增强积极性', '减压放松', '奖励旅游'],
  desc: '主题创意 | 1天0晚 | 30～200人',
  rate: '',
  money: 498.0,
  average: 30,
};

interface CardProps {
  card: CardIF;
}

const DetailHeaderCard = (props: CardProps) => {
  const { card } = props;
  return (
    <div className="detail-card-warppper">
      <div className="card">
        <div className="left">
          <img className="img" src={card.imgUrl} />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">{card.title}</div>
            <div className="tag-wrapper">
              {card.tags.map(tag => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="desc">{card.desc}</div>
            <div className="money-wrapper">
              <div className="money">{card.money}</div>
              <div className="unit">元起/人</div>
            </div>
          </div>
          <div className="footer">
            <button className="action">提交需求</button>
          </div>
        </div>
      </div>
    </div>
  );
};
