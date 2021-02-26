/**
 *  Created by pw on 2020/9/26 8:49 下午.
 */
import React from 'react';
import './Footer.less';

interface Props {
  className?: string;
}

export default function(props: Props) {
  const { className = '' } = props;
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={`footer-wrapper ${className}`}>
      <div className="footer-content">
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
          <button className="sumbit">提交需求</button>
        </form>
        <div className="right">
          <div className="top">
            <div className="row">
              <div className="content">商务合作：17777814299</div>
              <div className="content">加入我们：yy@yuyuetuanjian.cn</div>
            </div>
            <div className="row">
              <div className="content">联系我们：18511901760</div>
              <div className="content">ICP证：京ICP备2020038271号</div>
            </div>
            <div className="row">
              <div className="content">
                &copy;2019-2020 yuyuetuanjian.cn版权所有
              </div>
            </div>
          </div>
          <div className="bottom">
            <img
              className="img"
              src={'http://img.yuyuetuanjian.cn/asset/about/qrcode.jpg'}
            />
            <img
              className="img"
              src={'http://img.yuyuetuanjian.cn/asset/about/qrcode.jpg'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
