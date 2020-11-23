/**
 *  Created by pw on 2020/11/9 10:49 下午.
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import Shuffing from '@/components/shuffling';
import SubTitleCompomment from '@/components/header/SubTitleCompomment';
import { getCaseById } from '@/services';
import moment from 'moment';

interface Props {
  location?: any;
}

export default function(props: Props) {
  const { location } = props;
  const id = location?.query?.id;
  const [detail, setDetail] = useState<API.Case_Detail>({} as API.Case_Detail);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const caseData = await getCaseById(id);
    setDetail(caseData);
  };

  const banners = detail?.banners?.map(banner => {
    return { cover: banner, link: '', name: '', type: 'image' };
  });

  return (
    <div className="case-detail-wrapper">
      <Shuffing
        banners={banners as API.Home_Banner[]}
        className="shuffing-wrapper"
      />
      <div className="content-wrapper">
        <div className="case-detail-header">
          <div className="title">{detail?.title}</div>
          <div className="desc">{`团建案例${moment(detail?.date).format(
            'YYYY-MM-DD',
          )} 浏览 987`}</div>
        </div>
        <div className="content">
          <div className="left">
            {detail?.photos?.map((img, index) => {
              return <img key={index} className="img" src={img} />;
            })}
          </div>
          <div className="right">
            <div className="row-wrapper">
              <SubTitleCompomment title="活动概述" />
              <div className="row">
                <div className="item">
                  <img className="img" />
                  <div className="label">{`人数：${detail?.people}人`}</div>
                </div>
                <div className="item">
                  <img className="img" />
                  <div className="label">{`天数：${detail?.days}`}</div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img className="img" />
                  <div className="label">{`车程：${detail?.distance}`}</div>
                </div>
                <div className="item">
                  <img className="img" />
                  <div className="label">{`地点：${detail?.address}`}</div>
                </div>
              </div>
            </div>
            <div className="row-wrapper">
              <SubTitleCompomment title="案例行程" />
              <CaseTrip days={detail?.schedule} />
            </div>
            <div className="row-wrapper">
              <SubTitleCompomment title="相关产品" />
              <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CaseTripProps {
  days: API.Schedule[];
}

interface CaseTripDayIF {
  day: number;
  items: CaseTripDayItem[];
}

interface CaseTripDayItem {
  time: string;
  content: string;
}

const CaseTrip = (props: CaseTripProps) => {
  const { days = [] } = props;
  if (!days || !days.length) {
    return null;
  }
  return (
    <div className="case-trip-wrapper">
      {days.map((day, index) => {
        return (
          <div key={index} className="day-wrapper">
            <div className="top">{`D${index + 1}`}</div>
            {day.items.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="base-label">
                    {moment(item.time).format('HH:mm')}
                  </div>
                  <div className="middle">
                    <div className="top-line" />
                    <div className="circle" />
                    <div className="bottom-line" />
                  </div>
                  <div className="base-label right-label">{item.text}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div className="related-product">
      <img
        className="img"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3169484118,2099452222&fm=26&gp=0.jpg"
      />
      <div className="title">58同城 | 纳斯卡巨画半日主题</div>
      <div className="desc-wrapper">
        <div className="label">1天0晚 | 30～200人</div>
        <div className="price-wrapper">
          <div className="price">489</div>
          <div className="unit">元起/人</div>
        </div>
      </div>
      <div className="action">去看看</div>
    </div>
  );
};
