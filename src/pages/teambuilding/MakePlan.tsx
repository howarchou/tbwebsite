/**
 *  Created by pw on 2020/11/7 10:22 下午.
 */
import React from 'react';
import './MakePlan.less';
import Customization from '@/images/teambuilding/customization.png';

export default function() {
  return (
    <div className="make-plan">
      <div className="title-wrapper">
        <div className="title">
          <img className="img" src={Customization} />
          团建方案定制
        </div>
      </div>
      <div className="content">
        <select className="item" placeholder="出行人数">
          <option>2人</option>
          <option>5人</option>
          <option>10人以上</option>
        </select>
        <select className="item" placeholder="人均预算">
          <option>100元</option>
          <option>500元</option>
          <option>1000元以上</option>
        </select>
        <select className="item" placeholder="团建天数">
          <option>1天</option>
          <option>2天</option>
          <option>3天</option>
          <option>3天以上</option>
        </select>
        <input className="item" placeholder={'联系人'} />
        <input className="item" placeholder={'联系电话'} />
        <input className="item" placeholder={'验证码'} />
        <input className="item" placeholder={'微信号'} />
        <div className="action">提交需求</div>
      </div>
    </div>
  );
}
