/**
 *  Created by pw on 2020/11/8 6:42 下午.
 */
import React, { Component } from 'react';
import './WarmTips.less';
import { TeambuildingSubtitle } from '@/pages/teambuilding/teambuilding-detail/DetailContent';

interface Props {
  detail: API.Activity;
}

export default function(props: Props) {
  const { detail } = props;
  const WarmTips = [
    '跟团产品需您全程跟团，期间不可出现离团及脱团行为，请您予以配合。如您擅自离团，视为您单方面违约，需承担已损失的机票、车费、住宿费，旅行社有权在您违约后终止您的后继行程及服务，包括您的回程机票，之后发生的任何事情均需您自行全权负责。',
  ];
  return (
    <div className="WarmTips-wrapper">
      <TeambuildingSubtitle title={'温馨提示'} />
      <div
        className="booking-content"
        dangerouslySetInnerHTML={{ __html: detail.warm_tips }}
      />
      {/*{WarmTips.map((booking, index) => {*/}
      {/*  return (*/}
      {/*    <div key={index} className="booking-item">*/}
      {/*      <div className="item-circle" />*/}
      {/*      <div className="desc">{booking}</div>*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
}
