/**
 *  Created by pw on 2020/11/14 2:08 下午.
 */
declare namespace API {
  export interface BaseResponse<T> {
    message: string;
    payload: T;
  }

  export interface ListResponse<T> {
    message: string;
    payload: ListResponsePayload<T>;
  }

  export interface ListResponsePayload<T> {
    data: T[];
    page_no: number;
    page_size: number;
    total_count: number;
    total_page: number;
  }

  export interface ListParam {
    page_no: number;
    page_size: number;
  }
  export interface Home_Banner {
    cover: string;
    link: string;
    name: string;
    type: 'video' | 'image';
  }

  export interface Home_HotPots {}

  export interface Home_Logos {}

  export interface Activities {}

  export interface Activities_ID {}
}
