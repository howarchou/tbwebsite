/**
 *  Created by pw on 2020/11/23 7:29 下午.
 */
// @ts-ignore
import { request, RequestResponse } from 'umi';

const { environment } = process.env;
export default function<T = any>(
  path: string,
  options?: any,
): Promise<RequestResponse<T>> {
  const basePath = environment === 'pre' ? '/pre' : '/pre';
  return request(`${basePath}${path}`, options);
}
