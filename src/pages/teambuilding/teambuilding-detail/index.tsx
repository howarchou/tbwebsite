/**
 *  Created by pw on 2020/11/8 9:53 上午.
 */
import React, { useState, useEffect } from 'react';
import './detail.less';
import DetailContent from '@/pages/teambuilding/teambuilding-detail/DetailContent';
import { getActivitityById } from '@/services';
import Activity_Time_Icon from '@/images/teambuilding/activity_time.png';
import Activity_People_Icon from '@/images/teambuilding/activity_people.png';

interface Props {
  location?: any;
}

export default function(props: Props) {
  const { location } = props;
  const id = location?.query?.id;
  const [detail, setDetail] = useState<API.Activity>();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const detail = await getActivitityById(id);
    setDetail(detail);
  };

  if (!detail) {
    return null;
  }

  return (
    <div className="teambuilding-detail">
      <DetailHeaderCard detail={detail} />
      <DetailContent detail={detail} />
    </div>
  );
}

interface CardProps {
  detail: API.Activity;
}

const DetailHeaderCard = (props: CardProps) => {
  const { detail } = props;
  return (
    <div className="detail-card-warppper">
      <div className="card">
        <div className="left">
          <img className="img" src={detail.cover} />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">{detail.name}</div>
            <div className="tag-wrapper">
              {detail.profits.map(tag => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="desc">
              <div className="desc-item">
                <img className="desc-img" src={Activity_Time_Icon} />
                <div className="desc-text">{`${detail.duration}天`}</div>
              </div>
              <div className="desc-item">
                <img className="desc-img" src={Activity_People_Icon} />
                <div className="desc-text">{`${detail.people_number}人`}</div>
              </div>
            </div>
            <div className="money-wrapper">
              <div className="money">{detail.price}</div>
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
