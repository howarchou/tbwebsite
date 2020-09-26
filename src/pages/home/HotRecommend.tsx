/**
 *  Created by pw on 2020/9/26 5:47 下午.
 */
import React from 'react';
import './HotRecommend.less';
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import { HotImageCardIF } from '@/types';

const GROUPING_COUNT = 3;

export default function() {
  return (
    <div className="hot-recommend">
      <HomeSectionTitle
        title={'当季热门目的地'}
        desc={'一年四季，都有适合你去的地方'}
      />
      <HotImageCard />
    </div>
  );
}

function HotImageCard() {
  const cards: HotImageCardIF[] = [
    {
      id: '1',
      imageUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
      address: '吐鲁番',
      tags: ['火焰山', '葡萄', '维吾尔族'],
    },
    {
      id: '2',
      imageUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
      address: '吐鲁番',
      tags: ['火焰山', '葡萄', '维吾尔族'],
    },
    {
      id: '3',
      imageUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
      address: '吐鲁番',
      tags: ['火焰山', '葡萄', '维吾尔族'],
    },
    {
      id: '4',
      imageUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
      address: '吐鲁番',
      tags: ['火焰山', '葡萄', '维吾尔族'],
    },
    {
      id: '5',
      imageUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660058652,4248332137&fm=26&gp=0.jpg',
      address: '吐鲁番',
      tags: ['火焰山', '葡萄', '维吾尔族'],
    },
  ];

  const groups = cards.reduce<HotImageCardIF[][]>((result, current, index) => {
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
            {group.map(card => {
              return <ImageCard key={card.id} imageCard={card} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

interface ImageCardProps {
  imageCard: HotImageCardIF;
}

function ImageCard(props: ImageCardProps) {
  const { imageCard } = props;
  return (
    <div className="image-card">
      <img className="image" src={imageCard.imageUrl} />
      <div className="tag-wrapper">
        <div className="main-tag">{imageCard.address}</div>
        {imageCard.tags?.length
          ? imageCard.tags.map((tag, index) => {
              return (
                <div key={index} className="assist-tag-wrapper">
                  <div className="assist-tag">{tag}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
