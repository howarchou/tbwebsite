/**
 *  Created by pw on 2020/11/8 9:53 上午.
 */
import React, { useRef, useState, useEffect } from 'react';
import './detail.less';
import DetailContent from '@/pages/teambuilding/teambuilding-detail/DetailContent';
import { getActivitityById } from '@/services';
import Activity_Time_Icon from '@/images/teambuilding/activity_time.png';
import Activity_People_Icon from '@/images/teambuilding/activity_people.png';
import { API } from '@/services/API';
import Swiper, { SwipeRef } from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';

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

  const swiperRef = useRef<SwipeRef>(null);
  const [index, setIndex] = useState<any>();
  const swiperData = [detail.cover, detail.cover];

  const swipeTo = () => {
    const swiperInstance = swiperRef.current;
    const currPage: string = index * 1 + '';
    swiperInstance?.swipeTo(parseInt(currPage, 10));
  };

  const prev = () => {
    const swiperInstance = swiperRef.current;
    swiperInstance?.prev();
  };

  const next = () => {
    const swiperInstance = swiperRef.current;
    swiperInstance?.next();
  };

  const onChange = (currPage: number, prevPage: number) => {
    // console.log(currPage, prevPage);
  };
  return (
    <div className="detail-card-warppper">
      <div className="card">
        <div className="left">
          {/*<img*/}
          {/*  className="img"*/}
          {/*  alt={`封面`}*/}
          {/*  src={`${detail.cover}?x-oss-process=style/detail_cover`}*/}
          {/*/>*/}
          <Swiper
            className="demo-swiper-container"
            autoPlay={3000}
            selectedIndex={0}
            showIndicators={true}
            indicator={null}
            showDots={false}
            dots={null}
            direction="horizontal"
            loop={true}
            ref={swiperRef}
            onChange={onChange}
          >
            {swiperData.map((item: string, key) => (
              <img className="img" src={item} alt="" />
            ))}
          </Swiper>
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
                <div className="desc-text">{detail.duration}</div>
              </div>
              <div className="desc-item">
                <img className="desc-img" src={Activity_People_Icon} />
                <div className="desc-text">{`${detail.people_number}人`}</div>
              </div>
            </div>
            <div className="money-wrapper">
              <div className="money">{detail.price}</div>
              <div className="unit">元起/人</div>
              <div className="price">30人均价</div>
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
