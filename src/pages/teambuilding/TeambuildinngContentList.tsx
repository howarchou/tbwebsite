/**
 *  Created by pw on 2020/11/7 5:58 下午.
 */
import React, { useState } from 'react';
import './TeambuildinngContentList.less';
import { CardIF } from './types';
import { history } from 'umi';

export default function() {
  return (
    <div className="teambuilding-content">
      <Header />
      <div className="card-list">
        {cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

const Header = () => {
  const [sortType, setSortType] = useState('default');
  const handleSortType = (sortType: string) => {
    setSortType(sortType);
  };
  return (
    <div className="header">
      <div
        className={`label ${sortType === 'default' ? 'select-label' : ''}`}
        onClick={() => handleSortType('default')}
      >
        默认排序
      </div>
      <div className="line" />
      <div
        className={`label ${sortType === 'price' ? 'select-label' : ''}`}
        onClick={() => handleSortType('price')}
      >
        价格
      </div>
    </div>
  );
};

const cards: CardIF[] = [
  {
    id: 1,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
  {
    id: 2,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
  {
    id: 3,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
  {
    id: 4,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
  {
    id: 5,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
  {
    id: 6,
    imgUrl:
      'http://www.taopic.com/uploads/allimg/120629/201758-12062910421057.jpg',
    title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦!快来参加吧',
    tags: ['增强积极性', '减压放松', '奖励旅游'],
    desc: '主题创意 | 1天0晚 | 30～200人',
    rate: '',
    money: 498.0,
    average: 30,
  },
];

interface CardProps {
  card: CardIF;
}

const Card = (props: CardProps) => {
  const { card } = props;
  const handleClick = () => {
    console.log(card);
    history.push({ pathname: '/teambuilding-detail' });
  };
  return (
    <div className="card-warppper" onClick={handleClick}>
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
            <div className="rate" />
          </div>
          <div className="footer">
            <div className="money-wrapper">
              <div className="money">{card.money}</div>
              <div className="unit">元起/人</div>
            </div>
            <div className="average">{`${card.average}人均价`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
