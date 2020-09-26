/**
 *  Created by pw on 2020/9/26 8:49 下午.
 */
import React from 'react';
import QRCODR_PNG from '../../images/home/QRCode.png';
import './Footer.less';

export default function() {
  const handleSubmit = () => {};

  return (
    <div className="footer-wrapper">
      <form className="left" onSubmit={handleSubmit}>
        <div className="row">
          <input className="input" placeholder="出行人数" />
          <input className="input" placeholder="人均预算" />
        </div>
        <div className="row">
          <input className="input" placeholder="团建天数" />
          <input className="input" placeholder="联系人" />
        </div>
        <div className="row">
          <input className="input" placeholder="联系电话" />
          <input className="input" placeholder="验证码" />
        </div>
        <div className="row">
          <textarea className="textarea" placeholder="其它备注..." />
        </div>
        <button className="sumbit">提交</button>
      </form>
      <div className="right">
        <div className="top">
          <div className="row">
            <div className="content">商务合作：yy@yuyuetuanj.com</div>
            <div className="content">加入我们：yy@yuyuetuanj.com</div>
          </div>
          <div className="row">
            <div className="content">联系我们：yy@yuyuetuanj.com</div>
            <div className="content">ICP证：yy@yuyuetuanj.com</div>
          </div>
          <div className="row">
            <div className="content">
              ©️ 2019-2020 yuyuetuanjian.com版权所有
            </div>
          </div>
        </div>
        <div className="bottom">
          <img className="img" src={QRCODR_PNG} />
          <img className="img" src={QRCODR_PNG} />
        </div>
      </div>
    </div>
  );
}
