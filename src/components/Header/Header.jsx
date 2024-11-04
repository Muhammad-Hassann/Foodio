import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import {Logo} from '../index';
import { path } from 'framer-motion/client';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < prevScrollPos) {
      setShowHeader(true); 
    } else {
      setShowHeader(false); 
    }

    setPrevScrollPos(currentScrollPos); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const leftmenu = [
    {
      id: 1,
      name: 'Menu',
      path: '/menu',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
  ];

  const rightmenu = [
    {
      id: 3,
      name: 'Order Online',
      path: '/order-online',
    },
    
    {
      id: 4,
      name: 'Book Now',
      path: '/book-now',
    },
  ];

  return (
    <header
      className={`fixed h-screen md:h-28 left-0 top-0 z-40 md:bg-transparent md:backdrop-blur-sm w-full px-4 gap-4 ${
        showHeader ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-200`}
    >
     
      <nav className="w-full flex justify-between items-center">
        <ul className="hidden lg:flex justify-around w-2/5 py-8">
          {leftmenu.map((item) => (
            <li
              key={item.id}
              className="text-xl mt-2 font-semibold text-white font-narrow"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        
        <Logo className='md:px-12 md:mt-2 p-4 flex-2 lg:w-1/5 w-[200px]' />
      <div className='lg:hidden flex p-4'>
        <MobileHeader links={leftmenu.concat(rightmenu)}/>
        </div>
        <ul className="hidden lg:flex justify-around w-2/5 py-8">
          {rightmenu.map((item, index) => (
            <li
              key={item.id}
              className={`${
                index === 1
                  ? 'px-4 py-2 rounded-lg text-xl font-narrow bg-yellow text-purple font-bold '
                  : 'text-xl mt-2 font-semibold text-white font-narrow'
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
