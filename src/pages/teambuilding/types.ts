/**
 *  Created by pw on 2020/11/8 9:55 上午.
 */
export interface CardIF {
  id: number;
  imgUrl: string;
  title: string;
  tags: string[];
  desc: string;
  rate: string;
  money: number;
  average: number;
}

export interface ScheduleIF {
  id: string;
  title: string;
  sub_title: string;
  date: number;
  icon: string;
  items: TeamBuilding_Schedule_Item[];
}

export interface TeamBuilding_Schedule_Item {
  title: string;
  day: number;
  time: number;
  supplier: number;
  supplierProject: string;
  imgUrls: string[];
}

export interface CostIF {
  title?: string;
  desc: string;
}
