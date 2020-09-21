/**
 *  Created by pw on 2020/9/20 5:15 下午.
 */
import React, { useState, useEffect } from 'react';
import './index.less';

interface Props {
  images: string[];
}

export default function(props: Props) {
  const { images } = props;
  let [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    play();
    return () => {
      clearInterval(timerId as any);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    setCurrentIndex(currentIndex);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
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
    <div className="wrap">
      <ul className="list">
        {images.map((item, i) => (
          <li
            key={i}
            className={`item ${i === currentIndex ? 'active' : ''}`}
            onMouseOver={mouseHoverImg}
            onMouseLeave={mouseLeaveImg}
          >
            <img src={item} alt="" />
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
