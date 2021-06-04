/**
 *  Created by pw on 2020/9/26 8:49 下午.
 */
import React, { useState } from 'react';
import './Footer.less';
import { saveOrders } from '@/services/orders';
import TextField from '@material-ui/core/TextField';
import SubmitDialog from '@/components/submitDialog';

export default function() {
  const defaultVaule = {};
  const [values, setValues] = useState<any>(defaultVaule);
  const [submitSuccessOpen, setSubmitSuccessOpen] = useState(false);
  const handleSubmit = () => {
    console.log(values);
    if (!values?.contact_mobile) {
      alert('请输入电话');
      return;
    }
    saveOrders({ ...values }).then(res => {
      // alert('提交成功!');
      window._agl && window._agl.push(['track', ['success', { t: 3 }]]);
      setTimeout(function() {
        handleSubmitSuccessOpen();
      }, 100);
    });
  };

  const c = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleInputChange = (key: string, value: any) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmitSuccessOpen = () => setSubmitSuccessOpen(true);

  const handleSubmitSuccessClose = () => setSubmitSuccessOpen(false);

  return (
    <div className={`footer-wrapper`} id="footer">
      <div className="footer-content">
        <div className="left">
          <div className="row">
            <input
              name={'people_number'}
              className="input"
              placeholder={'出行人数'}
              type={'number'}
              onChange={e =>
                handleInputChange('people_number', Number(e.target.value))
              }
            />
            <input
              name={'price'}
              className="input"
              placeholder={'人均预算'}
              type={'number'}
              onChange={e => handleInputChange('price', Number(e.target.value))}
            />
          </div>
          <div className="row">
            <input
              name={'days'}
              className="input"
              placeholder={'团建天数'}
              type={'number'}
              onChange={e => handleInputChange('days', Number(e.target.value))}
            />
            <input
              name={'contact'}
              className="input"
              placeholder={'联系人'}
              onChange={e => handleInputChange('contact', e.target.value)}
            />
          </div>
          <div className="row">
            <input
              name={'contact_mobile'}
              className="input2"
              placeholder={'联系电话'}
              onChange={e =>
                handleInputChange('contact_mobile', e.target.value)
              }
            />
          </div>
          <div className="row">
            <textarea
              className="textarea"
              name={'remark'}
              placeholder="其它备注..."
              onChange={e => handleInputChange('remark', e.target.value)}
            />
          </div>
          <button className="sumbit" onClick={handleSubmit}>
            提交需求
          </button>
        </div>
        <div className="right">
          <div className="top">
            <div className="row">
              <div className="content">商务合作：021-65667525</div>
              <div className="content">加入我们：yy@yuyuetuanjian.cn</div>
            </div>
            <div className="row">
              <div className="content">联系我们：021-65667525</div>
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
      <SubmitDialog
        close={handleSubmitSuccessClose}
        open={submitSuccessOpen}
      ></SubmitDialog>
    </div>
  );
}
