/**
 *  Created by pw on 2020/11/8 12:25 下午.
 */
import React, { useState } from 'react';
import './Route.less';
import { TeambuildingSubtitle } from './DetailContent';
import BUS_ICON from '@/images/teambuilding/bus.png';
import { ScheduleIF } from '../types';
import moment from 'moment';

interface Props {
  schedules: API.Schedules;
}

export default function(props: Props) {
  const { schedules } = props;
  return (
    <div className="teambuild-route">
      <TeambuildingSubtitle title={'行程安排'} />
      <div className="content">
        <RouteNavigation days={schedules.sections} />
        <Schedule schedules={schedules.sections} />
      </div>
    </div>
  );
}

const schedules = [
  {
    id: '1',
    title: '房山十渡风景区',
    sub_title: '',
    icon: '',
    date: moment().valueOf(),
    items: [
      {
        day: 1,
        supplier: 1,
        title: '集合',
        time: moment().valueOf(),
        icon: '',
        supplierProject: '公司指定地点集合，统一乘车前往目的地',
        imgUrls: [
          'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3073940262,1480212600&fm=26&gp=0.jpg',
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346282507,2171850944&fm=26&gp=0.jpg',
        ],
      },
      {
        day: 2,
        supplier: 1,
        title: '集合',
        time: moment().valueOf(),
        icon: '',
        supplierProject: '乘车前往活动现场',
        imgUrls: [
          'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3073940262,1480212600&fm=26&gp=0.jpg',
        ],
      },
      {
        day: 3,
        supplier: 1,
        title: '破冰行动',
        time: moment().valueOf(),
        icon: '',
        supplierProject: '乘车前往活动现场现场，开始',
        imgUrls: [
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346282507,2171850944&fm=26&gp=0.jpg',
        ],
      },
    ],
  },
];

interface RouteNavigationProps {
  days: string[];
}

const RouteNavigation = (props: RouteNavigationProps) => {
  const { days = [] } = props;
  const [selectItem, setSelectItem] = useState(0);
  const handleClick = (index: number) => {
    setSelectItem(index);
  };
  if (!days || !days.length) {
    return null;
  }
  return (
    <div className="route-navigation">
      {days.map((_, index) => {
        const cls = selectItem === index ? `navigation-item-select` : '';
        return (
          <span
            key={index}
            className={`navigation-item ${cls}`}
            onClick={() => handleClick(index)}
          >{`D${index + 1}`}</span>
        );
      })}
    </div>
  );
};

interface ScheduleProps {
  schedules: ScheduleIF[];
}

const Schedule = (props: ScheduleProps) => {
  const { schedules = [] } = props;
  if (!schedules || !schedules.length) {
    return null;
  }
  return (
    <div className="schedule-wrapper">
      {schedules.map((schedule, index) => {
        return (
          <div key={schedule.id} className="schedule">
            <div className="start">
              <div className="left">
                <div className="day-en">{`D${index + 1}`}</div>
                <div className="day-ch">{`第${index}天`}</div>
              </div>
              <div className="middle">
                <div className="start-icon" />
                <div className="line" />
              </div>
              <div className="right">
                <div className="text">指定地点</div>
                <img className="icon" src={schedule.icon} alt="图标" />
                <div className="text">{schedule.title}</div>
              </div>
            </div>
            {schedule.items.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="middle">
                    <img className="icon" src={item.icon} alt="图标" />
                    <div className="line" />
                  </div>
                  <div className="right">
                    <div className="title">{`${moment(item.time).format(
                      'HH:mm',
                    )}${item.title}`}</div>
                    <div className="card">
                      <div className="sub-title">{item.supplierProject}</div>
                      <ScheduleImages pictures={item.pictures} />
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
};

interface ScheduleImagesProps {
  pictures?: string[];
}

function ScheduleImages(props: ScheduleImagesProps) {
  const { pictures = [] } = props;
  if (!pictures.length) {
    return null;
  }
  const length = 2;
  const data = [];
  let jIndex = 1;
  for (let index = 0; index < pictures.length; index = jIndex) {
    data.push(pictures.slice(index, index + length));
    jIndex = jIndex * length;
  }
  return (
    <div className="img-wrapper">
      {data.map((items, id) => {
        return (
          <div key={id} className="row">
            {items.map((img, index) => {
              return (
                <img
                  key={index}
                  alt={`图片`}
                  className="img"
                  src={`${img}?x-oss-process=style/activity_schedule`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
