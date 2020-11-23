/**
 *  Created by pw on 2020/11/21 5:27 下午.
 */
import { request } from 'umi';

export async function getActivities(): Promise<
  API.ListResponsePayload<API.Activity>
> {
  const res = await request<API.ListResponse<API.Activity>>('/h5/activities');
  return res.payload;
}

export async function getActivitityById(id: string): Promise<API.Activity> {
  const res = await request<API.BaseResponse<API.Activity>>(
    `/h5/activities/${id}`,
  );
  return res.payload;
}

export default {
  getActivities,
  getActivitityById,
};
