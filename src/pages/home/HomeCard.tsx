/**
 *  Created by pw on 2020/9/20 6:41 下午.
 */
import React from 'react';
import './HomeCard.less';

interface Props {
  cards: CardIF[];
}

interface CardIF {
  id: string;
  imgUrl: string;
  title: string;
  tags: string[];
  price: string;
  desc: string;
}

export default function(props: Props) {
  const { cards = [] } = props;
  const groups = cards.reduce<CardIF[][]>((result, current, index) => {
    const remainder = Math.floor(index / 4);
    const list = result[remainder] || [];
    list.push(current);
    result[remainder] = list;
    return result;
  }, []);
  return (
    <div className="home-card-wrapper">
      {groups.map(group => {
        return (
          <div className="card-group">
            {group.map(card => {
              return (
                <div key={card.id} className="card-wrapper">
                  <img className="img" src={card.imgUrl} />
                  <div className="card-content">
                    <div className="card-title">{card.title}</div>
                    <div className="tag-wrapper">
                      {card.tags.map(tag => {
                        return (
                          <div key={tag} className="tag">
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div className="card-desc">
                      <div className="desc">{card.desc}</div>
                      <div className="price">{card.price}</div>
                    </div>
                    <div className="card-action">去看看</div>
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
