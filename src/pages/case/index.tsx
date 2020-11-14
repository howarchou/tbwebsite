/**
 *  Created by pw on 2020/11/9 9:28 下午.
 */
import React from 'react';
import './index.less';
import Header from '@/components/header/Header';
import Footer from '@/pages/home/Footer';
import CASE_HEADER_BG from '@/images/case/case-header-bg.png';
import Tabs from '@/components/tab';
import { CaseCardIF } from '@/types';
import { history } from 'umi';

const cityTabs = [
  { id: '1', label: '全部', type: 'ALL' },
  { id: '2', label: '北京', type: 'BJ' },
  { id: '3', label: '天津', type: 'TJ' },
  { id: '4', label: '上海', type: 'SH' },
  { id: '5', label: '成都', type: 'CD' },
  { id: '6', label: '西安', type: 'XA' },
];

export default function() {
  return (
    <div className="case-wrapper">
      <Header />
      <img className="case-banner-img" src={CASE_HEADER_BG} />
      <div className="tab-header">
        <div className="tab-header-title">城市案例</div>
        <Tabs tabs={cityTabs} className="case-tab" />
      </div>
      <CaseCardWrapper cards={datas} />
      <Footer />
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
  cards: CaseCardIF[];
  rowCount?: number;
}

const CaseCardWrapper = (props: CaseCardProps) => {
  const { cards, rowCount = 3 } = props;
  const groups: CaseCardIF[][] = cards.reduce((result, card, index) => {
    const remainder = Math.floor(index / rowCount);
    let list: CaseCardIF[] = result[remainder];
    if (!list) {
      list = [];
      result.push(list);
    }
    list.push(card);
    return result;
  }, [] as CaseCardIF[][]);

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
  card: CaseCardIF;
}

const CaseCardComponent = (props: CaseCardComponentProps) => {
  const { card } = props;
  const handleClick = () => {
    history.push('/case-detail');
  };
  return (
    <div className="case-card" onClick={handleClick}>
      <div className="top">
        <img className="img" src={card.imgUrl} />
      </div>
      <div className="bottom">
        <div className="title">{card.title}</div>
        <div className="main-title">{card.mainTitle}</div>
      </div>
    </div>
  );
};
