/**
 *  Created by pw on 2020/11/21 5:27 下午.
 */
import { request } from 'umi';
import baseRequest from '@/services/baseRequest';

export async function getActivities(): Promise<
  API.ListResponsePayload<API.Activity>
> {
  const res = await baseRequest<API.ListResponse<API.Activity>>('/activities');
  return res.payload;
}

export async function getActivitityById(id: string): Promise<API.Activity> {
  const res = await baseRequest<API.BaseResponse<API.Activity>>(
    `/activities/${id}`,
  );
  return res.payload;
}

export default {
  getActivities,
  getActivitityById,
};
