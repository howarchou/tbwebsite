/**
 *  Created by pw on 2020/11/7 10:22 下午.
 */
import React, { useState } from 'react';
import './MakePlan.less';
import Customization from '@/images/teambuilding/customization.png';
import { OrdersParamsType, saveOrders } from '@/services/orders';
import { Input, TextField } from '@material-ui/core';
import { API } from '@/services/API';

export default function() {
  const handleSubmit = async (values: any) => {
    const response = await saveOrders({ ...values });
    if (response.status === '0') {
      return;
    }
  };

  return (
    <div className="make-plan">
      <div className="title-wrapper">
        <div className="title">
          <img className="img" src={Customization} />
          团建方案定制
        </div>
      </div>
      <div className="content">
        {/*<select className="item" placeholder="出行人数">*/}
        {/*  <option>2人</option>*/}
        {/*  <option>5人</option>*/}
        {/*  <option>10人以上</option>*/}
        {/*</select>*/}
        {/*<select className="item" placeholder="人均预算">*/}
        {/*  <option>100元</option>*/}
        {/*  <option>500元</option>*/}
        {/*  <option>1000元以上</option>*/}
        {/*</select>*/}
        {/*<select className="item" placeholder="团建天数">*/}
        {/*  <option>1天</option>*/}
        {/*  <option>2天</option>*/}
        {/*  <option>3天</option>*/}
        {/*  <option>3天以上</option>*/}
        {/*</select>*/}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="area"
            className="item"
            placeholder={'出行人数'}
          />
          <input
            type="text"
            name="price"
            className="item"
            placeholder={'人均预算'}
          />
          <input
            type="text"
            name="days"
            className="item"
            placeholder={'团建天数'}
          />
          <input
            type="text"
            name="contact"
            className="item"
            placeholder={'联系人'}
          />
          <input
            type="text"
            name="contact_mobile"
            className="item"
            placeholder={'联系电话'}
          />
          <button type="submit" className="action">
            提交需求
          </button>
          {/*<input type="text" name="area" className="item" placeholder={'验证码'} />*/}
          {/*<input type="text" name="area" className="item" placeholder={'微信号'} />*/}
          {/*<div className="action">提交需求</div>*/}
        </form>
      </div>
    </div>
  );
}
