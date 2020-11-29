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

  export interface Recommend {}

  export interface Activities {}

  export interface Activities_ID {}

  export interface Case_Data {
    [key: string]: Case_Item[];
  }

  export interface Case_Item {
    id: string;
    cover: string;
    name: string;
    title: string;
    city: string;
  }

  export interface Case_Detail {
    id: string;
    city: number;
    name: string;
    title: string;
    date: number;
    people: string;
    days: string;
    distance: string;
    address: string;
    schedule: Schedule[];
    logo: string;
    banners: string[];
    cover: string;
    photos: string[];
    activity: Activity;
    sort: number;
    status: number;
  }

  export interface Item {
    time: number;
    text: string;
  }

  export interface Schedule {
    day: number;
    items: Item[];
  }

  export interface Schedules {
    activity_id: number;
    sections?: any;
  }

  export interface Feature {
    title: string;
    picture: string;
    desc: string;
  }

  export interface Activity {
    id: string;
    name: string;
    area: number;
    address: string;
    method: number;
    profit: number;
    duration: number;
    hold_min: number;
    hold_max: number;
    price: number;
    planner: string;
    mobile: string;
    description: string;
    cover: string;
    tags: string;
    cost_statement: string;
    safety_notes: string;
    booking_notes: string;
    warm_tips: string;
    stars: string;
    sort?: any;
    status?: any;
    fees?: any;
    schedules: Schedules;
    places?: any;
    themes?: any;
    feature: Feature;
  }
}