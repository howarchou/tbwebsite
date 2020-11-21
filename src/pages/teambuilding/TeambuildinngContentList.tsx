/**
 *  Created by pw on 2020/11/7 5:58 下午.
 */
import React, { useState } from 'react';
import './TeambuildinngContentList.less';
import { CardIF } from './types';
import { history } from 'umi';

interface Props {
  data: API.ListResponsePayload<API.Activity>;
}

export default function(props: Props) {
  const { data } = props;
  return (
    <div className="teambuilding-content">
      <Header />
      <div className="card-list">
        {data.data.map(activity => {
          return <Card key={activity.id} card={activity} />;
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

interface CardProps {
  card: API.Activity;
}

const Card = (props: CardProps) => {
  const { card } = props;
  const handleClick = () => {
    history.push({ pathname: '/teambuilding-detail', query: { id: card.id } });
  };
  return (
    <div className="card-warppper" onClick={handleClick}>
      <div className="card">
        <div className="left">
          <img className="img" src={card.cover} />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">{card.name}</div>
            <div className="tag-wrapper">
              {card.tags.split(',').map(tag => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="desc">{card.description}</div>
            <div className="rate" />
          </div>
          <div className="footer">
            <div className="money-wrapper">
              <div className="money">{card.price}</div>
              <div className="unit">元起/人</div>
            </div>
            <div className="average">{`${card.price}人均价`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
