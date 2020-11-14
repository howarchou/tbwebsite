/**
 *  Created by pw on 2020/11/11 11:30 下午.
 */
import React, { useEffect } from 'react';
import { history } from 'umi';
import './layout-wrapper.less';
import Header from '@/components/header/Header';
import Footer from '@/pages/home/Footer';
import Quickavigation from '@/components/quicknavigation';

export default function(props: any) {
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home');
    }
  }, []);
  return (
    <div className="layout-wrapper">
      <Header />
      {props.children}
      <Footer />
      <Quickavigation />
    </div>
  );
}
