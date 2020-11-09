/**
 *  Created by pw on 2020/9/20 3:52 下午.
 */
import React, { useState } from 'react';
import { history } from 'umi';
import Cookies from 'js-cookie';
import './Header.less';
import { MenuIF } from '@/components/Header/types';
import Logo from '../../images/home/logo.png';
import LocationPNG from '../../images/home/location.png';
import UPPNG from '../../images/home/up.png';
import DownPNG from '../../images/home/down.png';
import TELPNG from '../../images/home/tel.png';

export default function() {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <Slogan />
        <Area />
        <Menu />
      </div>
      <ContactUS />
    </div>
  );
}

function Slogan() {
  return (
    <div className="header-slogan">
      <img className="slogna-icon" src={Logo} />
    </div>
  );
}

function Area() {
  const [icon, setIcon] = useState('down');
  const handleClick = () => {
    setIcon(icon === 'down' ? 'up' : 'down');
  };

  return (
    <div className="header-area" onClick={handleClick}>
      <img className="location-png" src={LocationPNG} />
      <div className="location">北京</div>
      <img className="area-arrow" src={icon === 'down' ? DownPNG : UPPNG} />
    </div>
  );
}

const __MENU_ = '__MENU__';

function Menu() {
  const defalutMenu = Cookies.getJSON(__MENU_) as MenuIF;
  const defaultMenuStr = defalutMenu?.id ?? 'home';
  const [selectMenu, setSelectMenu] = useState(defaultMenuStr);
  const menus: MenuIF[] = [
    {
      id: 'home',
      label: '首页',
      href: '/',
    },
    {
      id: 'teambuilding',
      label: '团建',
      href: '/teambuilding',
    },
    {
      id: 'annualMeeting',
      label: '年会',
      href: '',
    },
    {
      id: 'case',
      label: '案例',
      href: '/case',
    },
    {
      id: 'travel',
      label: '自由行',
      href: '',
    },
    {
      id: 'partners',
      label: '合作伙伴',
      href: '/partner',
    },
    {
      id: 'about',
      label: '关于我们',
      href: '/about',
    },
  ];

  const handleOnClick = (item: MenuIF) => {
    const menu = menus.find(m => m.id === item.id) as MenuIF;
    setSelectMenu(menu.id);
    history.push({ pathname: menu.href });
    Cookies.set(__MENU_, menu);
  };

  return (
    <div className="header-menu">
      {menus.map(item => {
        return (
          <div
            key={item.id}
            className={`menu-item-wrapper ${
              selectMenu === item.id ? 'menu-item-wrapper-select' : ''
            }`}
            onClick={() => handleOnClick(item)}
          >
            <div className="menu-item">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function ContactUS() {
  return (
    <div className="contact-us">
      <img className="tel-icon" src={TELPNG} />
      <div className="tel">010-8866886</div>
    </div>
  );
}
