/**
 *  Created by pw on 2020/9/20 6:41 下午.
 */
import React from 'react';
import './HomeCard.less';
import { history } from '@@/core/history';
const GROUPING_COUNT = 4;

interface Props {
  cards: API.Activity[];
}

export default function(props: Props) {
  const { cards = [] } = props;
  const groups = cards.reduce<API.Activity[][]>((result, current, index) => {
    const remainder = Math.floor(index / GROUPING_COUNT);
    const list = result[remainder] || [];
    list.push(current);
    result[remainder] = list;
    return result;
  }, []);

  const handleClick = (card: API.Activity) => {
    history.push({
      pathname: '/teambuilding-teambuilding-detail',
      query: { id: card.id },
    });
  };

  return (
    <div className="home-card-wrapper">
      {groups.map((group, key) => {
        return (
          <div key={key} className="card-group">
            {group.map(card => {
              return (
                <div key={card.id} className="card-wrapper">
                  <img className="img" src={card.cover} />
                  <div className="card-content">
                    <div className="card-title">{card.name}</div>
                    <div className="tag-wrapper">
                      {card.profits.map(tag => {
                        return (
                          <div key={tag} className="tag">
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div className="card-desc">
                      <div className="desc">{card.description}</div>
                      <div className="price">{`￥${card.price}`}</div>
                    </div>
                    <div
                      className="card-action"
                      onClick={() => handleClick(card)}
                    >
                      去看看
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
