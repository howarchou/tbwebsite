/**
 *  Created by pw on 2020/11/14 10:47 下午.
 */
import React from 'react';
import './index.less';

export default function() {
  return (
    <div className="demand-wrapper">
      <div className="content">
        <div className="row">
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
        </div>
        <div className="row">
          <select className="item" placeholder="团建天数">
            <option>1天</option>
            <option>2天</option>
            <option>3天</option>
            <option>3天以上</option>
          </select>
          <input className="item" placeholder={'联系人'} />
        </div>
        <div className="row">
          <input className="item" placeholder={'联系电话'} />
          <input className="item" placeholder={'微信号'} />
        </div>
        <div className="row">
          <textarea className="item item-textarea" placeholder="其它备注" />
        </div>

        <div className="action">提交需求</div>
      </div>
    </div>
  );
}
