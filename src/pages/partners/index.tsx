/**
 *  Created by pw on 2020/11/8 6:54 下午.
 */
import React, { useState } from 'react';
import './index.less';

export default function() {
  return (
    <div className="partners-wrapper">
      <PartnersHeader />
      <PartnerForm />
    </div>
  );
}

const PartnersHeader = () => {
  return (
    <div className="partner-header">
      <div className="partner-header-img"></div>
      {/*<div className="content">*/}
      {/*  <div className="content-wrapper">*/}
      {/*    <div className="title">欢迎成为</div>*/}
      {/*    <div className="sub-title">鱼悦团建网的合作伙伴</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

const PartnerForm = () => {
  return (
    <form className="partner-form">
      <div className="row">
        <div className="label">
          <span className="col">*</span>合作伙伴:
        </div>
        <div className="right-wrapper">
          <RadioGroup
            radios={[
              { label: '个人', value: 'person' },
              { label: '公司', value: 'company' },
            ]}
          />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <span className="col">*</span>业务类型:
        </div>
        <div className="right-wrapper ">
          <RadioGroup
            radioClass={'radio-wrapper-width'}
            radios={[
              { label: '酒店/宾馆', value: 'hotel' },
              { label: '农家院', value: 'farmyard' },
              { label: '基地', value: 'base' },
              { label: '特色场地', value: 'place' },
              { label: '拓展老师/教练/培训师', value: 'teacher' },
              { label: '领队/导游', value: 'tourGuide' },
              { label: '租车/大巴士', value: 'bus' },
              { label: '景区/景点', value: 'attractions' },
              { label: '搭建/策划', value: 'planning' },
              { label: '摄影/摄像', value: 'photography' },
              { label: '道具租赁', value: 'propsRental' },
              { label: '印刷制作', value: 'printing' },
              { label: '培训机构', value: 'training' },
              { label: '旅行社', value: 'travelAgency' },
              { label: '活动执行', value: 'activitiesPerformed' },
              { label: '其它(备注)', value: 'other' },
            ]}
          />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <span className="col">*</span>联系人:
        </div>
        <input className="right-wrapper right-input" placeholder="姓名" />
      </div>
      <div className="row">
        <div className="label">
          <span className="col">*</span>联系电话:
        </div>
        <input className="right-wrapper right-input" placeholder="11位手机号" />
      </div>
      <div className="row">
        <div className="label">
          <span className="col">*</span>验证码:
        </div>
        <input className="right-wrapper right-input" placeholder="验证码" />
      </div>
      <div className="row">
        <div className="label">
          <span className="margin5"> </span>备注:
        </div>
        <textarea
          className="right-wrapper right-input textarea"
          placeholder="在这里你可以补充你想要表达的内容"
          rows={6}
        />
      </div>
      <div className="action">提交基本信息</div>
    </form>
  );
};

interface RadioIF {
  label: string;
  value: string;
}

interface RadioGroupProps {
  radios: RadioIF[];
  rowCount?: number;
  radioClass?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { radios = [], rowCount = 4, radioClass = '' } = props;
  const [selectRadio, setRadio] = useState<RadioIF>(radios[0]);
  const handleChange = (radio: RadioIF) => {
    setRadio(radio);
  };
  const groups = radios.reduce((result, radio, index) => {
    const remainder = Math.floor(index / rowCount);
    let list: RadioIF[] = result[remainder];
    if (!list) {
      list = [];
      result.push(list);
    }
    list.push(radio);
    return result;
  }, [] as any);
  return (
    <div className="radio-group">
      {groups.map((radios: RadioIF[], index: number) => {
        return (
          <div key={index} className="group-row">
            {radios.map((radio, index) => {
              return (
                <div
                  key={index}
                  className={`radio-wrapper ${radioClass}`}
                  onClick={() => handleChange(radio)}
                >
                  <input
                    type="radio"
                    value={radio.value}
                    checked={radio.value === selectRadio.value}
                  />
                  <div className="radio-label">{radio.label}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
