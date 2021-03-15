/**
 *  Created by pw on 2020/11/14 10:47 下午.
 */
import React, { useState } from 'react';
import './index.less';

export default function() {
  const defaultVaule = { people: '2', budget: '100', day: '1' };
  const [values, setValues] = useState<any>(defaultVaule);
  const handleSubmit = () => {
    console.log(values);
    if (!values?.tel) {
      alert('请输入电话');
      return;
    }
  };

  const handleOnSelectChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleInputChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <div className="demand-wrapper">
      <div className="content">
        <div className="row">
          <select
            className="item"
            name={'people'}
            placeholder="出行人数"
            onChange={e => handleOnSelectChange('people', e.target.value)}
          >
            <option value={'2'}>2人</option>
            <option value={'5'}>5人</option>
            <option value={'10+'}>10人以上</option>
          </select>
          <select
            className="item"
            name={'budget'}
            placeholder="人均预算"
            onChange={e => handleOnSelectChange('budget', e.target.value)}
          >
            <option value={'100'}>100元</option>
            <option value={'500'}>500元</option>
            <option value={'1000+'}>1000元以上</option>
          </select>
        </div>
        <div className="row">
          <select
            className="item"
            name={'day'}
            placeholder="团建天数"
            onChange={e => handleOnSelectChange('day', e.target.value)}
          >
            <option value={'1'}>1天</option>
            <option value={'2'}>2天</option>
            <option value={'3'}>3天</option>
            <option value={'3+'}>3天以上</option>
          </select>
          <input
            className="item"
            name={'contact'}
            placeholder={'联系人'}
            onChange={e => handleInputChange('contact', e.target.value)}
          />
        </div>
        <div className="row">
          <input
            className="item"
            name={'tel'}
            placeholder={'联系电话'}
            onChange={e => handleInputChange('tel', e.target.value)}
          />
          <input
            className="item"
            name={'wx'}
            placeholder={'微信号'}
            onChange={e => handleInputChange('wx', e.target.value)}
          />
        </div>
        <div className="row">
          <textarea
            className="item item-textarea"
            name={'remark'}
            placeholder="其它备注"
            onChange={e => handleInputChange('remark', e.target.value)}
          />
        </div>

        <div className="action" onClick={handleSubmit}>
          提交需求
        </div>
      </div>
    </div>
  );
}
