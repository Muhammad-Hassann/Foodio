import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function FullPageMenu({ links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="icon text-4xl cursor-pointer text-yellow z-50 fixed top-5 right-5" onClick={handleClick}>
        {menuOpen ? <RxCross2 /> : <IoReorderThree />}
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex justify-center items-center">
          <div className="flex flex-col items-center gap-12">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={handleClick}
                className="text-white text-4xl font-bold hover:underline transition duration-300 underline-offset-8 hover:text-yellow"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FullPageMenu;
