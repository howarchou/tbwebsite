/**
 *  Created by pw on 2020/9/20 6:12 下午.
 */
import React, { useState } from 'react';
import './index.less';
import ExamplePNG from '../../images/home/example.png';

interface Props {
  tabs: TabIF[];
}

interface TabIF {
  id: string;
  label: string;
  type: string;
  icon?: string;
  desc?: string;
}

export default function(props: Props) {
  const { tabs = [] } = props;
  const [selectTab, setSelectTab] = useState(tabs[0]);

  return (
    <div className="tab-wrapper">
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            className={`tab-item ${
              selectTab.id === tab.id ? 'tab-item-select' : ''
            }`}
            onClick={() => setSelectTab(tab)}
          >
            {tab.icon ? <img className="tab-icon" src={tab.icon} /> : null}
            <div className="title-wrapper">
              <div className="tab-title">{tab.label}</div>
            </div>
            {selectTab.id === tab.id ? <div className="tab-line" /> : null}
          </div>
        );
      })}
    </div>
  );
}
