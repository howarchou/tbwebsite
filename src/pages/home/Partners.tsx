/**
 *  Created by pw on 2020/9/26 8:09 下午.
 */
import React from 'react';
import './Partners.less';
import { PartnersIF } from '@/types';

const GROUPING_COUNT = 5;

export default function() {
  const cards: PartnersIF[] = [{ logoUrl: '' }];

  const groups = cards.reduce<PartnersIF[][]>((result, current, index) => {
    const remainder = Math.floor(index / GROUPING_COUNT);
    const list = result[remainder] || [];
    list.push(current);
    result[remainder] = list;
    return result;
  }, []);

  return (
    <div className="partners-wrapper">
      <div className="title">合作伙伴</div>
      <img
        className="partners-logo"
        src={
          'https://imetadata.damaotuanjian.com/METADATA/AFBDE8D0-8437-7FDE-CA17-F055036CAC3F-s1_webp'
        }
      />
      {/*{groups.map((group, index) => {*/}
      {/*  return (*/}
      {/*    <div key={index} className="partner-group">*/}
      {/*      {group.map((logo, index) => {*/}
      {/*        return (*/}
      {/*          <div key={index} className="partners-logo">*/}
      {/*            <img />*/}
      {/*          </div>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
}
