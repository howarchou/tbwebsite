/**
 *  Created by pw on 2020/9/26 5:47 下午.
 */
import React from 'react';
import './HotRecommend.less';
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import { HotImageCardIF } from '@/types';
import { API } from '@/services/API';

const GROUPING_COUNT = 3;

interface Props {
  data: API.Home_HotPots[];
}

export default function(props: Props) {
  const { data } = props;

  return (
    <div className="hot-recommend">
      <HomeSectionTitle title={'当季热门目的地'} />
      <HotImageCard data={data} />
    </div>
  );
}

function HotImageCard(props: Props) {
  const { data = [] } = props;

  const groups = data.reduce<API.Home_HotPots[][]>((result, current, index) => {
    const remainder = Math.floor(index / GROUPING_COUNT);
    const list = result[remainder] || [];
    list.push(current);
    result[remainder] = list;
    return result;
  }, []);

  return (
    <div className="hot-image-wrapper">
      {groups.map((group, key) => {
        return (
          <div key={key} className="hot-image-group">
            {group.map((card, index) => {
              return <ImageCard key={index} imageCard={card} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

interface ImageCardProps {
  imageCard: API.Home_HotPots;
}

function ImageCard(props: ImageCardProps) {
  const { imageCard } = props;
  return (
    <div className="image-card">
      <img className="image" src={imageCard.cover} />
      {/*<div className="tag-wrapper">*/}
      {/*  <div className="main-tag">{imageCard.address}</div>*/}
      {/*  {imageCard.tags?.length*/}
      {/*    ? imageCard.tags.map((tag, index) => {*/}
      {/*        return (*/}
      {/*          <div key={index} className="assist-tag-wrapper">*/}
      {/*            <div className="assist-tag">{tag}</div>*/}
      {/*          </div>*/}
      {/*        );*/}
      {/*      })*/}
      {/*    : null}*/}
      {/*</div>*/}
    </div>
  );
}
