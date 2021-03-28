/**
 *  Created by pw on 2020/11/21 5:27 下午.
 */
import { __PAGE_SIZE } from '@/lib/Conts';
import baseRequest from '@/services/baseRequest';

export async function getActivities(
  params: API.ListParam = { page_no: 1, page_size: __PAGE_SIZE },
): Promise<API.ListResponsePayload<API.Activity>> {
  const res = await baseRequest<API.ListResponse<API.Activity>>('/activities', {
    params: { ...params },
  });
  return res.payload;
}

export async function getActivitityById(id: string): Promise<API.Activity> {
  const res = await baseRequest<API.BaseResponse<API.Activity>>(
    `/activities/${id}`,
  );
  return res.payload;
}

export async function getSettings(): Promise<API.Activities_Settings[]> {
  const res = await baseRequest<API.ListResponse<API.Activities_Settings>>(
    '/settings',
  );
  return res.payload;
}

export default {
  getActivities,
  getActivitityById,
  getSettings,
};
