/**
 *  Created by pw on 2020/9/20 3:52 下午.
 */
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import Cookies from 'js-cookie';
import './Header.less';
import { MenuIF } from '@/components/header/types';
import Logo from '../../images/home/logo.png';
import LocationPNG from '../../images/home/location.png';
import UPPNG from '../../images/home/up.png';
import DownPNG from '../../images/home/down.png';
import TELPNG from '../../images/home/tel.png';
import { __MENU_ } from '@/lib/Conts';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function() {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <Slogan />
        <Area />
        <MenuCP />
      </div>
      <ContactUS />
    </div>
  );
}

function Slogan() {
  const handleClick = () => {
    history.push({ pathname: '/' });
  };

  return (
    <div className="header-slogan" onClick={handleClick}>
      <img className="slogna-icon" src={Logo} />
    </div>
  );
}

function Area() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<any>) => {
    setIcon(icon === 'down' ? 'up' : 'down');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [icon, setIcon] = useState('down');
  // const handleClick = () => {
  //   setIcon(icon === 'down' ? 'up' : 'down');
  // };

  return (
    <div className="header-area" onClick={handleClick}>
      <img className="location-png" src={LocationPNG} />
      <div className="location">北京</div>
      <img className="area-arrow" src={icon === 'down' ? DownPNG : UPPNG} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>北京</MenuItem>
        <MenuItem onClick={handleClose}>上海</MenuItem>
        <MenuItem onClick={handleClose}>江苏</MenuItem>
        <MenuItem onClick={handleClose}>浙江</MenuItem>
      </Menu>
    </div>
  );
}

function MenuCP() {
  const defalutMenu = Cookies.getJSON(__MENU_) as MenuIF;
  const defaultMenuStr = defalutMenu?.id ?? 'home';
  const [selectMenu, setSelectMenu] = useState(defaultMenuStr);
  useEffect(() => {
    if (location.pathname === '/') {
      setSelectMenu('home');
    }
    setSelectMenu(defaultMenuStr);
  }, [defaultMenuStr]);
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
    // {
    //   id: 'annualMeeting',
    //   label: '年会',
    //   href: '',
    // },
    {
      id: 'case',
      label: '案例',
      href: '/case',
    },
    // {
    //   id: 'travel',
    //   label: '自由行',
    //   href: '',
    // },
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
      <div className="tel">18511901760</div>
    </div>
  );
}
