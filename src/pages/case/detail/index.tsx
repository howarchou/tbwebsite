/**
 *  Created by pw on 2020/11/9 10:49 下午.
 */
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/pages/home/Footer';
import './index.less';
import Shuffing from '@/components/Shuffling';
import SubTitleCompomment from '@/components/Header/SubTitleCompomment';

const images = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605192138&di=191586f2af1b395c72d4406977df5fab&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F0a742a178141f763fb845a3ecee1e9ba.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605214561&di=f4d55af21449ffc70431276b2c36f9e1&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F18816%2F18815745.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605247386&di=d320e2be8a6864c9b187cfea21f6f168&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130710%2F11346320_091116493116_2.jpg',
];

const imageList = [
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2699946349,799427101&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3978727070,842245921&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3549625992,3709728390&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3626771373,2095768620&fm=15&gp=0.jpg',
];

export default function() {
  return (
    <div className="case-detail-wrapper">
      <Header />
      <Shuffing images={images} className="shuffing-wrapper" />
      <div className="content-wrapper">
        <div className="case-detail-header">
          <div className="title">腾讯视频 | 向前冲主题团建</div>
          <div className="desc">团建案例2019-09-15 浏览 987</div>
        </div>
        <div className="content">
          <div className="left">
            {imageList.map((img, index) => {
              return <img key={index} className="img" src={img} />;
            })}
          </div>
          <div className="right">
            <div className="row-wrapper">
              <SubTitleCompomment title="活动概述" />
              <div className="row">
                <div className="item">
                  <img className="img" />
                  <div className="label">人数：20人</div>
                </div>
                <div className="item">
                  <img className="img" />
                  <div className="label">天数：两天一晚</div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img className="img" />
                  <div className="label">车程：2小时</div>
                </div>
                <div className="item">
                  <img className="img" />
                  <div className="label">地点：隐居乡里</div>
                </div>
              </div>
            </div>
            <div className="row-wrapper">
              <SubTitleCompomment title="案例行程" />
              <CaseTrip days={caseTrips} />
            </div>
            <div className="row-wrapper">
              <SubTitleCompomment title="相关产品" />
              <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const caseTrips = [
  {
    day: 1,
    items: [
      { time: '10:00', content: '集合出发' },
      { time: '12:00', content: '到达目的地' },
      { time: '13:00', content: '就餐' },
      { time: '14:00', content: '爬山' },
      { time: '18:00', content: '就餐' },
    ],
  },
  {
    day: 2,
    items: [
      { time: '10:00', content: '集合出发' },
      { time: '12:00', content: '到达目的地' },
      { time: '13:00', content: '就餐' },
      { time: '14:00', content: '爬山' },
      { time: '18:00', content: '就餐' },
    ],
  },
];

interface CaseTripProps {
  days: CaseTripDayIF[];
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
  const { days } = props;
  return (
    <div className="case-trip-wrapper">
      {days.map((day, index) => {
        return (
          <div key={index} className="day-wrapper">
            <div className="top">{`D${index + 1}`}</div>
            {day.items.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="base-label">{item.time}</div>
                  <div className="middle">
                    <div className="top-line" />
                    <div className="circle" />
                    <div className="bottom-line" />
                  </div>
                  <div className="base-label right-label">{item.content}</div>
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
