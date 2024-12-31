import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar relative bg-[#333] text-[#fff] flex justify-between items-center p-4 h-[80px]">
      <h1 className="font-bold font-mono">LOGO</h1>
      <GiHamburgerMenu
        className="md:hidden cursor-pointer"
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      />
      <ul
        className={`${
          nav ? 'top-[80px]' : 'top-[-80px]'
        } absolute left-0 w-full bg-[#333] flex flex-col md:static md:flex md:flex-row md:w-auto transition-all duration-300`}
      >
        <li className="mr-4">
          <Link to="/" onClick={() => setNav(false)}>Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/about" onClick={() => setNav(false)}>About</Link>
        </li>
        <li className="mr-4">
          <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
