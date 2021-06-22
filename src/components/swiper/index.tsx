import React, { FC, useEffect, useRef, useState } from 'react';
import './index.less';

interface TSwipperProps {
  banners: string[];
  autoplay?: boolean;
  interval?: number;
}

const Swiper: FC<TSwipperProps> = (props: TSwipperProps) => {
  const { banners = [], autoplay } = props;
  const [sliderTran, setSliderTran] = useState<any>();

  const swiperRef = useRef<any>();

  const indexRef = useRef<number>(0);
  const pauseRef = useRef<boolean>(false);

  const intervalRef = useRef<number>();

  const sliderWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const count = banners.length;

  useEffect(() => {
    if (banners.length > 1) {
      const $wrapper = swiperRef.current;
      const children = $wrapper.children;
      const firstChild: HTMLElement = children[0];
      $wrapper.appendChild(firstChild.cloneNode(true));

      [...children].forEach(el => {
        el.style.width = sliderWidth + 'px';
      });

      if (autoplay) {
        autoPlaySwiper();
      } else {
        clearInter();
      }
    }
    return clearInter;
  }, [banners, autoplay]);

  const swiperPlay = (dir: 'left' | 'right') => {
    //prev
    if (dir === 'left') {
      if (indexRef.current === count) {
        swiperPadding(0);
        indexRef.current = 0;
      }
      indexRef.current++;
    }
    //next
    if (dir === 'right') {
      if (indexRef.current === 0) {
        swiperPadding(-sliderWidth * count);
        indexRef.current = count;
      }
      indexRef.current--;
    }
    setTimeout(() => {
      setSliderTran({
        transform: `translate3d(${-sliderWidth * indexRef.current}px, 0, 0)`,
      });
    }, 100);
  };

  const swiperPadding = (distance: number) => {
    setSliderTran({
      transition: 'none',
      transform: `translate3d(${distance}px, 0, 0)`,
    });
    setTimeout(() => {
      setSliderTran({
        transform: `translate3d(${distance}px, 0, 0)`,
      });
    }, 50);
  };
  const clearInter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // 当鼠标停留在图片上时
  const mouseHoverImg = () => {
    pauseRef.current = true;
  };
  const mouseLeaveImg = () => {
    pauseRef.current = false;
  };
  const autoPlaySwiper = () => {
    clearInter();
    intervalRef.current = window.setInterval(() => {
      //如果是暂停
      if (!pauseRef.current) swiperPlay('left');
    }, props.interval || 5000);
  };

  if (count === 0) {
    return null;
  }

  return (
    <div className="swiper">
      <div className="slider">
        <ul
          className="list"
          style={sliderTran}
          ref={swiperRef}
          onMouseOver={mouseHoverImg}
          onMouseLeave={mouseLeaveImg}
        >
          {banners.map((item, i) => (
            <li className="item" key={i}>
              <img src={item} alt="" />
            </li>
          ))}
        </ul>
      </div>
      {count > 1 ? (
        <button className="btn left" onClick={() => swiperPlay('left')}>
          &lt;
        </button>
      ) : null}
      {count > 1 ? (
        <button className="btn rigth" onClick={() => swiperPlay('right')}>
          &gt;
        </button>
      ) : null}
    </div>
  );
};

export default Swiper;
