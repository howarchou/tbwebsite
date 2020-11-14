/**
 *  Created by pw on 2020/9/20 5:15 下午.
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

interface Props {
  className?: string;
  banners: API.Home_Banner[];
}

export default function(props: Props) {
  const { className = '', banners } = props;
  let [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    play();
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
              <HomeBannerVideo banner={item} />
            ) : (
              <img src={item.cover} alt="" />
            )}
          </li>
        ))}
      </ul>
      <button
        className="btn left"
        onClick={handlePrev}
        onMouseOver={mouseHoverImg}
        onMouseLeave={mouseLeaveImg}
      >
        &lt;
      </button>
      <button
        className="btn rigth"
        onClick={handleNext}
        onMouseOver={mouseHoverImg}
        onMouseLeave={mouseLeaveImg}
      >
        &gt;
      </button>
    </div>
  );
}

interface HomeBannerVideoProps {
  banner: API.Home_Banner;
}

export function HomeBannerVideo(props: HomeBannerVideoProps) {
  const { banner } = props;
  return (
    <div className="home-banner-video">
      <Player>
        <source src={banner.cover} />
      </Player>
    </div>
  );
}
