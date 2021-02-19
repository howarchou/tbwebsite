/**
 *  Created by pw on 2020/11/7 5:58 下午.
 */
import React, { useState } from 'react';
import './TeambuildinngContentList.less';
import { history } from 'umi';
import Rate from '@/components/Rate';
import Pagination from '@/components/pagination';
import { API } from '@/services/API';

interface Props {
  data: API.ListResponsePayload<API.Activity>;
  onPageChange: (page: number) => void;
}

export default function(props: Props) {
  const { data, onPageChange } = props;
  return (
    <div className="teambuilding-content">
      {/*<Header />*/}
      <div className="card-list">
        {data?.data?.map(activity => {
          return <Card key={activity.id} card={activity} />;
        })}
      </div>
      <Pagination
        count={data.total_page}
        onPageChange={onPageChange}
        total_count={data.total_count}
      />
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
    history.push({
      pathname: '/teambuilding-teambuilding-detail',
      query: { id: card.id },
    });
  };
  const desc = [`${card.duration} `, ` ${card.people_number}人`].join('|');
  return (
    <div className="card-warppper" onClick={handleClick}>
      <div className="card">
        <div className="left">
          <img
            className="img"
            alt="封面"
            src={`${card.cover}?x-oss-process=style/activity_list`}
          />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">{card.name}</div>
            <div className="tag-wrapper">
              {card.profits.map(tag => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="desc">{desc}</div>
            <div className="rate">
              <Rate count={5} value={card.stars} precision={0.5} />
            </div>
          </div>
          <div className="footer">
            <div className="money-wrapper">
              <div className="money">{card.price}</div>
              <div className="unit">元起/人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
