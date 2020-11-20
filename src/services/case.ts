/**
 *  Created by pw on 2020/11/20 10:24 下午.
 */
import { request } from 'umi';

export async function getCases(): Promise<API.Case_Data> {
  const res = await request<API.BaseResponse<API.Case_Data>>('/h5/cases');
  return res.payload;
}

export async function getCaseById(id: string): Promise<API.Case_Detail> {
  const res = await request<API.BaseResponse<API.Case_Detail>>(
    `/h5/cases/${id}`,
  );
  return res.payload;
}

export default {
  getCases,
  getCaseById,
};
