/**
 *  Created by pw on 2020/11/7 10:22 下午.
 */
import React, { useEffect, useRef, useState } from 'react';
import Sticky from 'react-stickynode';
import './MakePlan.less';
import Customization from '@/images/teambuilding/customization.png';
import { OrdersParamsType, saveOrders } from '@/services/orders';
import scrollManager, { ScrollListenerEventName } from '@/lib/ScrollManager';
import { API } from '@/services/API';

export default function() {
  // const handleSubmit = async (values: any) => {
  //   const response = await saveOrders({ ...values });
  //   if (response.status === '0') {
  //     return;
  //   }
  // };

  const defaultVaule = {};
  const [values, setValues] = useState<any>(defaultVaule);
  const handleSubmit = () => {
    console.log(values);
    if (!values?.contact_mobile) {
      alert('请输入电话');
      return;
    }
    saveOrders({ ...values }).then(res => {
      alert('提交成功!');
    });
  };

  const c = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleInputChange = (key: string, value: any) => {
    setValues({ ...values, [key]: value });
  };
  const [footerTop, setFooterTop] = useState(0);

  useEffect(() => {
    const footer = document.getElementById('footer');
    setFooterTop(footer?.offsetTop || 0);
    return () => {};
  }, []);

  return (
    <Sticky top={60} bottomBoundary={footerTop}>
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
          <input
            name={'people_number'}
            className="item"
            placeholder={'出行人数'}
            type={'number'}
            onChange={e =>
              handleInputChange('people_number', Number(e.target.value))
            }
          />
          <input
            name={'price'}
            className="item"
            placeholder={'人均预算'}
            type={'number'}
            onChange={e => handleInputChange('price', Number(e.target.value))}
          />
          <input
            name={'days'}
            className="item"
            placeholder={'团建天数'}
            type={'number'}
            onChange={e => handleInputChange('days', Number(e.target.value))}
          />
          <input
            name={'contact'}
            className="item"
            placeholder={'联系人'}
            onChange={e => handleInputChange('contact', e.target.value)}
          />
          <input
            name={'contact_mobile'}
            className="item"
            placeholder={'联系电话'}
            onChange={e => handleInputChange('contact_mobile', e.target.value)}
          />
          <button className="action" onClick={handleSubmit}>
            提交需求
          </button>
        </div>
      </div>
    </Sticky>
  );
}
