/**
 *  Created by pw on 2020/10/8 9:06 下午.
 */
import React from 'react';
import Header from '@/components/Header/Header';
import TeambuildingHeader from './TeambuildingHeader';
import TeambuildinngContentList from './TeambuildinngContentList';
import Footer from '@/pages/home/Footer';
import './index.less';

export default function() {
  return (
    <div className="teambuild-wrapper">
      <Header />
      <TeambuildingHeader />
      <TeambuildinngContentList />
      <Footer />
    </div>
  );
}
