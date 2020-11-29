/**
 *  Created by pw on 2020/11/8 6:42 下午.
 */
import React, { Component } from 'react';
import './Bookings.less';
import { TeambuildingSubtitle } from '@/pages/teambuilding/teambuilding-detail/DetailContent';

export default function() {
  const bookings = [
    '跟团产品需您全程跟团，期间不可出现离团及脱团行为，请您予以配合。如您擅自离团，视为您单方面违约，需承担已损失的机票、车费、住宿费，旅行社有权在您违约后终止您的后继行程及服务，包括您的回程机票，之后发生的任何事情均需您自行全权负责。',
    '在旅游行程中，个别景点景区、餐厅、休息区等场所存在商场等购物场所，上述场所非旅行社安排的指定购物场所。本公司提醒旅游者根据自身需要，理性消费并索要必要票据。如产生消费争议，请自行承担相关责任义务，由此带来的不便，敬请谅解！',
    '目的地可能有部分私人经营的娱乐、消费场所，此类组织多数无合法经营资质，存在各种隐患。为了您的安全和健康考虑，本公司提醒您，谨慎消费；',
    '本产品行程实际出行中，导游、司机可能会根据天气、交通等情况，对您的行程进行适当调整（如调整景点游览顺序等），以确保行程顺利进行。如因不可抗力等因素确实无法执行原行程计划，对于因此而造成的费用变更，我社实行多退少补，敬请配合；',
    '行程中的赠送项目，如因交通、天气等不可抗因素导致不能赠送的、或因您个人原因不能参观的，费用不退，敬请谅解；',
    '全程请您妥善保管好您的身份证件及贵重物品，以免因遗失等情况影响了旅行；',
    '因玉龙雪山冰川大索道实行限票制，旺季（暑假、寒假、春节等节假日）期间出行不保证上大索道，如实际出行时上不了大索道则退门票差价，望知晓。',
  ];
  return (
    <div className="booking-wrapper">
      <TeambuildingSubtitle title={'预定须知'} />
      {bookings.map((booking, index) => {
        return (
          <div key={index} className="booking-item">
            <div className="item-circle" />
            <div className="desc">{booking}</div>
          </div>
        );
      })}
    </div>
  );
}
