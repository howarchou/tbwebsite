/**
 *  Created by pw on 2020/11/29 2:58 下午.
 */
import React from 'react';
import Rating from 'rc-rate';
import 'rc-rate/assets/index.css';
import './index.less';

import { RateProps } from 'rc-rate/es/Rate';

interface Props extends RateProps {
  label?: string;
}

export function Rate(props: Props) {
  const { value, count, disabled = true, className = '' } = props;
  const cls = 'rate-wrapper ' + className || '';
  return (
    <Rating
      className={cls}
      value={value}
      count={count}
      disabled={disabled}
      style={{ color: '#fda399' }}
    />
  );
}

export default function RateContainer(props: Props) {
  const { label, ...others } = props;
  return (
    <div className="rate-container">
      {label ? <div className="rate-container-label">{label}</div> : null}
      <Rate {...others} />
    </div>
  );
}
