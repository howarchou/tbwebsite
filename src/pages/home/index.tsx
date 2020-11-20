/**
 *  Created by pw on 2020/9/20 3:51 下午.
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import Shuffing from '@/components/shuffling';
import Recommend from '@/pages/home/Recommend';
import HotRecommend from '@/pages/home/HotRecommend';
import Advantage from '@/pages/home/Advantage';
import HomeData from '@/pages/home/HomeData';
import Partners from '@/pages/home/Partners';
import { getBanners, getHotPots, getLogos, getRecommends } from '@/services';

const images = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605192138&di=191586f2af1b395c72d4406977df5fab&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F0a742a178141f763fb845a3ecee1e9ba.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605214561&di=f4d55af21449ffc70431276b2c36f9e1&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F18816%2F18815745.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600605247386&di=d320e2be8a6864c9b187cfea21f6f168&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130710%2F11346320_091116493116_2.jpg',
];

export default () => {
  const [banners, setBanner] = useState<API.Home_Banner[]>([]);
  const [hotPots, setHotPots] = useState<API.Home_HotPots>([]);
  const [logos, setLogos] = useState<API.Home_Logos>();
  const [recommends, setRecommends] = useState<API.Recommend[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const banners = await getBanners();
    setBanner(banners);
    const hotPots = await getHotPots();
    setHotPots(hotPots);
    const logos = await getLogos();
    setLogos(logos);
    const recommends = await getRecommends();
    setRecommends(recommends);
  };

  return (
    <div className="home-wrapper">
      <Shuffing banners={banners} />
      <Recommend />
      <HotRecommend />
      <Advantage />
      <HomeData />
      <Partners />
    </div>
  );
};
