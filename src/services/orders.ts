/**
 *  Created by pw on 2020/11/20 10:24 下午.
 */
import { request } from 'umi';
import baseRequest from '@/services/baseRequest';

export interface OrdersParamsType {
  area: number;
  price: number;
  days: number;
  contact: string;
  contact_mobile: string;
  remark: string;
}

export async function saveOrders(
  params: OrdersParamsType,
): Promise<API.OrdersResponse> {
  const { area, price, days, contact, contact_mobile, remark } = params;
  const res = await request('/orders', {
    method: 'POST',
    data: { area, price, days, contact, contact_mobile, remark },
  });
  return res;
}

export default {
  saveOrders,
};
