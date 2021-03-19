/**
 *  Created by pw on 2020/11/14 10:47 下午.
 */
import React, { useState } from 'react';
import './index.less';
import { OrdersParamsType, saveOrders } from '@/services/orders';

export default function(props: Props) {
  const id = props.id;
  const defaultVaule = { activity_id: id };
  const [values, setValues] = useState<any>(defaultVaule);
  const handleSubmit = () => {
    debugger;
    console.log(values);
    if (!values?.contact_mobile) {
      alert('请输入电话');
      return;
    }
    const response = saveOrders({ ...values });
  };

  const handleOnSelectChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleInputChange = (key: string, value: any) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <div className="demand-wrapper">
      <div className="content">
        <div className="row">
          {/*<select*/}
          {/*  className="item"*/}
          {/*  name={'people_number'}*/}
          {/*  placeholder="出行人数"*/}
          {/*  onChange={e => handleOnSelectChange('people_number', e.target.value)}*/}
          {/*>*/}
          {/*  <option value={'2'}>2人</option>*/}
          {/*  <option value={'5'}>5人</option>*/}
          {/*  <option value={'10+'}>10人以上</option>*/}
          {/*</select>*/}
          <input
            className="item"
            name={'people_number'}
            type={'number'}
            placeholder={'出行人数'}
            onChange={e =>
              handleInputChange('people_number', Number(e.target.value))
            }
          />
          {/*<select*/}
          {/*  className="item"*/}
          {/*  name={'price'}*/}
          {/*  placeholder="人均预算"*/}
          {/*  onChange={e => handleOnSelectChange('price', e.target.value)}*/}
          {/*>*/}
          {/*  <option value={'100'}>100元</option>*/}
          {/*  <option value={'500'}>500元</option>*/}
          {/*  <option value={'1000+'}>1000元以上</option>*/}
          {/*</select>*/}
          <input
            name={'price'}
            className="item"
            placeholder={'人均预算'}
            type={'number'}
            onChange={e => handleInputChange('price', Number(e.target.value))}
          />
        </div>
        <div className="row">
          {/*<select*/}
          {/*  className="item"*/}
          {/*  name={'days'}*/}
          {/*  placeholder="团建天数"*/}
          {/*  onChange={e => handleOnSelectChange('days', e.target.value)}*/}
          {/*>*/}
          {/*  <option value={'1'}>1天</option>*/}
          {/*  <option value={'2'}>2天</option>*/}
          {/*  <option value={'3'}>3天</option>*/}
          {/*  <option value={'3+'}>3天以上</option>*/}
          {/*</select>*/}
          <input
            name={'days'}
            className="item"
            placeholder={'团建天数'}
            type={'number'}
            onChange={e => handleInputChange('days', Number(e.target.value))}
          />
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
            name={'contact_mobile'}
            placeholder={'联系电话'}
            onChange={e => handleInputChange('contact_mobile', e.target.value)}
          />
          {/*<input*/}
          {/*  className="item"*/}
          {/*  name={'wx'}*/}
          {/*  placeholder={'微信号'}*/}
          {/*  onChange={e => handleInputChange('wx', e.target.value)}*/}
          {/*/>*/}
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
