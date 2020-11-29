/**
 *  Created by pw on 2020/9/20 5:15 下午.
 */
import React, { useState, useEffect } from 'react';
import './index.less';
// @ts-ignore
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

interface Props {
  className?: string;
  banners: API.Home_Banner[];
}

export default function(props: Props) {
  const { className = '', banners = [] } = props;
  let [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const hasImage = !!banners.filter(banner => (banner.type = 'image')).length;
    if (hasImage) {
      play();
    }
    return () => {
      clearInterval(timerId as any);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex === banners.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    setCurrentIndex(currentIndex);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      currentIndex = banners.length - 1;
    } else {
      currentIndex--;
    }
    setCurrentIndex(currentIndex);
  };

  // 当鼠标停留在图片上时
  const mouseHoverImg = () => {
    clearInterval(timerId as any);
  };
  const mouseLeaveImg = () => {
    play();
  };

  const play = () => {
    const timerId: NodeJS.Timeout = setInterval(() => {
      handleNext();
    }, 3000);
    setTimerId(timerId);
  };

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className={`wrap ${className}`}>
      <ul className="list">
        {banners.map((item, i) => (
          <li
            key={i}
            className={`item ${i === currentIndex ? 'active' : ''}`}
            onMouseOver={mouseHoverImg}
            onMouseLeave={mouseLeaveImg}
          >
            {item.type === 'video' ? (
              <VideoBanner banner={item} />
            ) : (
              <img src={item.cover} alt="" />
            )}
          </li>
        ))}
      </ul>
      {banners.length > 1 ? (
        <button
          className="btn left"
          onClick={handlePrev}
          onMouseOver={mouseHoverImg}
          onMouseLeave={mouseLeaveImg}
        >
          &lt;
        </button>
      ) : null}
      {banners.length > 1 ? (
        <button
          className="btn rigth"
          onClick={handleNext}
          onMouseOver={mouseHoverImg}
          onMouseLeave={mouseLeaveImg}
        >
          &gt;
        </button>
      ) : null}
    </div>
  );
}

interface HomeBannerVideoProps {
  banner: API.Home_Banner;
}

export function VideoBanner(props: HomeBannerVideoProps) {
  const { banner } = props;
  return (
    <div className="home-banner-video">
      <Video
        fluid={false}
        autoPlay
        loop
        muted
        controls={['PlayPause', 'Volume']}
        poster={banner.cover}
      >
        <source src={banner.link} />
      </Video>
    </div>
  );
}
