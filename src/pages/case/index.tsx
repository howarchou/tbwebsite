/**
 *  Created by pw on 2020/11/9 9:28 下午.
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import CASE_HEADER_BG from '@/images/case/case-header-bg.png';
import Tabs, { TabIF } from '@/components/tab';
import { CaseCardIF } from '@/types';
import { history } from 'umi';
import { getCases } from '@/services';

const cityTabs = [
  { id: '1', label: '全部', type: 'ALL' },
  { id: '2', label: '北京', type: 'BJ' },
  { id: '3', label: '天津', type: 'TJ' },
  { id: '4', label: '上海', type: 'SH' },
  { id: '5', label: '成都', type: 'CD' },
  { id: '6', label: '西安', type: 'XA' },
];

export default function() {
  const [caseData, setCaseData] = useState<API.Case_Data>({});
  const [cases, setCases] = useState<API.Case_Item[]>([]);
  const [tabs, setTabs] = useState<TabIF[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const caseData = await getCases();
    const tabs = Object.keys(caseData).map(key => {
      return { id: key, label: key };
    });
    setTabs(tabs);
    setCaseData(caseData);
    const [first] = tabs;
    const cases = caseData[first.id];
    setCases(cases);
  };

  const handleTabClick = (tab: TabIF) => {
    const selectCases = caseData[tab.id];
    setCases(selectCases);
  };

  return (
    <div className="case-wrapper">
      <img className="case-banner-img" src={CASE_HEADER_BG} />
      <div className="tab-header">
        <div className="tab-header-title">城市案例</div>
        <Tabs tabs={tabs} className="case-tab" onTabClick={handleTabClick} />
      </div>
      <CaseCardWrapper caseData={cases} />
    </div>
  );
}

const datas: CaseCardIF[] = [
  {
    id: 1,
    imgUrl:
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3098225828,3578316064&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 2,
    imgUrl:
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013005,59993956&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 3,
    imgUrl:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1847962290,2103888385&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 4,
    imgUrl:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3148773802,3944093263&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 5,
    imgUrl:
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2230258885,1912203010&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 6,
    imgUrl:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2629755971,1229856290&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 7,
    imgUrl:
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1349461026,2657095262&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 8,
    imgUrl:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3349845619,3058625439&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
  {
    id: 9,
    imgUrl:
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2737589136,3402335547&fm=26&gp=0.jpg',
    title: '主题团建',
    mainTitle: '58同城  |  纳斯卡巨画半日主题',
  },
];

interface CaseCardProps {
  caseData: API.Case_Item[];
  // cards: CaseCardIF[];
  rowCount?: number;
}

const CaseCardWrapper = (props: CaseCardProps) => {
  const { caseData, rowCount = 3 } = props;
  const groups: API.Case_Item[][] = caseData.reduce((result, card, index) => {
    const remainder = Math.floor(index / rowCount);
    let list: API.Case_Item[] = result[remainder];
    if (!list) {
      list = [];
      result.push(list);
    }
    list.push(card);
    return result;
  }, [] as API.Case_Item[][]);

  return (
    <div className="case-card-wrapper">
      {groups.map((group, index) => {
        return (
          <div key={index} className="group-row">
            {group.map(card => {
              return <CaseCardComponent key={card.id} card={card} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

interface CaseCardComponentProps {
  card: API.Case_Item;
}

const CaseCardComponent = (props: CaseCardComponentProps) => {
  const { card } = props;
  const handleClick = () => {
    history.push({ pathname: '/case-detail', query: { id: card.id } });
  };
  return (
    <div className="case-card" onClick={handleClick}>
      <div className="top">
        <img className="img" src={card.cover} />
      </div>
      <div className="bottom">
        <div className="title">{card.title}</div>
        <div className="main-title">{card.name}</div>
      </div>
    </div>
  );
};
