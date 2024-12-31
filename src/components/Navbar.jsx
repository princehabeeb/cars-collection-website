import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }
  return (
    <nav className="navbar relative  bg-[#333] text-[#fff] flex justify-between items-center md:p-4  h-[80px]">
        <h1 className='font-bold font-mono'>LOGO</h1>
        <GiHamburgerMenu className=' md:hidden' onClick={toggleNav} />
        <ul className={`${nav ? 'mt-[100px]' : 'mt-[-300px]' } flex absolute bg-[#333] flex-col md:flex-row md:relative  w-full`}>
            <li className='mr-4'>
                <Link to="/">Home</Link>
            </li>
            <li className='mr-4'>
                <Link to="/about">About</Link>
            </li>
            <li className='mr-4'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar