/**
 *  Created by pw on 2020/11/11 11:30 下午.
 */
import React, { useEffect } from 'react';
import { history } from 'umi';
import './layout-wrapper.less';
import Header from '@/components/header/Header';
import Footer from '@/pages/home/Footer';
import Quickavigation from '@/components/quicknavigation';
const { environment } = process.env;

export default function(props: any) {
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/');
    }
  }, []);
  return (
    <div className="layout-wrapper">
      {environment !== 'pre' ? <Header /> : null}
      {props.children}
      {environment !== 'pre' ? <Footer /> : null}
      {environment !== 'pre' ? <Quickavigation /> : null}
    </div>
  );
}
