/**
 *  Created by pw on 2020/11/14 2:05 下午.
 */
import { request } from 'umi';

export async function getBanners(): Promise<API.Home_Banner[]> {
  const res = await request<API.BaseResponse<API.Home_Banner[]>>('/h5/banners');
  return res.payload?.map(line => {
    return { ...line, type: 'video' };
  });
}

export async function getHotPots(): Promise<API.Home_HotPots> {
  const res = await request<API.BaseResponse<API.Home_HotPots>>('/h5/hotspots');
  return res.payload;
}

export async function getLogos(): Promise<API.Home_Logos> {
  const res = await request<API.BaseResponse<API.Home_Logos>>('/h5/logos');
  return res.payload;
}

export async function getRecommends(): Promise<API.Recommend[]> {
  const res = await request<API.BaseResponse<API.Recommend[]>>(
    '/h5/recommends',
  );
  return res.payload;
}

export default {
  getBanners,
  getHotPots,
  getLogos,
  getRecommends,
};
