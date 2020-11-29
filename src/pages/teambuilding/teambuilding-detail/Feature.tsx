/**
 *  Created by pw on 2020/11/8 11:45 上午.
 */
import React, { Component } from 'react';
import { TeambuildingSubtitle } from './DetailContent';
import './Feature.less';

interface Props {
  feature: API.Feature;
  places: any;
}

export default function(props: Props) {
  const { feature } = props;
  return (
    <div className="teambuilding-feature">
      <TeambuildingSubtitle title={'团建特色'} />
      <div className="theme">
        <div className="title">{feature.title}</div>
        <img className="img" src={feature.picture} />
        <div className="theme-desc">{feature.desc}</div>
      </div>
      <div className="place">
        <div className="title">团建场地</div>
        <div className="img-wrapper">
          <img
            className="img"
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3833146671,4161342894&fm=26&gp=0.jpg"
          />
          <img
            className="img"
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3560105378,3420935565&fm=26&gp=0.jpg"
          />
        </div>
        <div className="place-dec">
          <div className="sub-title">秦皇岛</div>
          <div className="dec">
            相信很多秦皇岛人与小编一样，对这项活动那是相当的热爱。什么是赶海呢？赶海就是居住在海边的人们根据潮涨潮落的规律，赶在潮落的时机，到海岸的滩涂和礁石上打捞或采集海产品。说通俗点，就是去海边捡海鲜啦！
          </div>
        </div>
      </div>
    </div>
  );
}
