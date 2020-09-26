/**
 *  Created by pw on 2020/9/20 6:02 下午.
 */
import React from 'react';
import './Recommend.less';
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import Tabs from '@/components/Tab';
import HomeCard, { CardIF } from '@/pages/home/HomeCard';

const tabs = [
  { id: '1', label: '清凉一夏', type: '' },
  { id: '2', label: '户外探险', type: '' },
  { id: '3', label: '年会狂欢', type: '' },
  { id: '4', label: '运动一下', type: '' },
];

const defalutCard: CardIF = {
  id: '1',
  imgUrl:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600609478347&di=5e54e1163a10748ed1d3a227507c300a&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Fprd%2F9e%2F98%2F9e98a0e5fab2a4b91d8953ecd4ccc088_w450_h300_c1_t0.jpg',
  title: '【十度玻璃栈桥】感受清凉一夏，还有美食哦',
  tags: ['增强积极性', '减压放松', '奖励旅游'],
  price: '498',
  desc: '1天0晚 | 30～200人',
};

export default function() {
  const cards: any = Array(8)
    .fill(0)
    .map((_, id) => {
      return { ...defalutCard, id: `${id}` };
    });
  return (
    <div className="recommend-wrapper">
      <HomeSectionTitle
        title={'优选团建'}
        desc={'一年四季，都有适合你去的地方'}
      />
      <Tabs tabs={tabs} />
      <HomeCard cards={cards} />
    </div>
  );
}
