import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Logo } from '../index';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowHeader(currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const leftmenu = [
    { id: 1, name: 'Menu', path: '/menu' },
    { id: 2, name: 'About', path: '/about' },
  ];

  const rightmenu = [
    { id: 3, name: 'Order Online', path: '/order-online' },
    { id: 4, name: 'Book Now', path: '/book-now' },
  ];

  return (
    <header
      className={`fixed w-full left-0 top-0 z-40 transition-opacity duration-200 ${
        showHeader ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <nav className="w-full flex justify-between items-center px-4 lg:px-8 py-4 lg:py-8">
        {/* Left menu for desktop */}
        <ul className="hidden lg:flex justify-around w-2/5">
          {leftmenu.map((item) => (
            <li key={item.id} className="text-xl font-semibold text-white">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Logo className="md:px-12 md:mt-2 lg:w-1/5 w-[200px]" />

        {/* Right menu for desktop */}
        <ul className="hidden lg:flex justify-around w-2/5">
          {rightmenu.map((item, index) => (
            <li
              key={item.id}
              className={`text-xl font-semibold ${
                index === 1
                  ? 'bg-yellow text-purple font-bold px-4 py-2 rounded-lg'
                  : 'text-white'
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} className="z-20 text-4xl text-yellow">
            {menuOpen ? <RxCross2 /> : <IoReorderThree />}
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center lg:hidden">
            <div className="flex flex-col items-center gap-8 text-white text-3xl font-bold">
              {leftmenu.concat(rightmenu).map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={handleMenuToggle}
                  className="hover:underline transition duration-300 hover:text-yellow"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
