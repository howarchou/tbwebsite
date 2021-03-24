/**
 *  Created by pw on 2020/11/8 11:45 上午.
 */
import React, { Component } from 'react';
import { TeambuildingSubtitle } from './DetailContent';
import './Feature.less';
import { API } from '@/services/API';

interface Props {
  feature: API.Feature;
  places?: API.Place[];
}

export default function(props: Props) {
  const { feature, places } = props;
  const showTheme = feature?.picture || feature?.desc;
  return (
    <div className="teambuilding-feature" id="anchor1">
      <TeambuildingSubtitle title={'团建特色'} />
      {showTheme ? (
        <div className="theme">
          <div className="title">团建主题</div>
          {feature?.picture ? (
            <img className="img" src={feature.picture} alt={'团建特色图片'} />
          ) : null}
          {feature?.desc ? (
            <div className="theme-desc">{feature.desc}</div>
          ) : null}
        </div>
      ) : null}
      {places?.map((place, index) => {
        return (
          <div key={index} className="place">
            <div className="title">团建场地</div>
            <div className="img-wrapper">
              {place.pictures.map(picture => {
                return (
                  <div className="img-div">
                    <img
                      className="img"
                      src={`${picture}?x-oss-process=style/activity_place`}
                      alt={`场地`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="place-dec">
              <div className="sub-title">{place.foreword}</div>
              <div className="dec">{place.later}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
