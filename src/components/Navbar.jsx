import React, { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-semibold'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>DEV.PORTFOLIO</h1>
      <ul className='hidden md:flex whitespace-nowrap gap-8'>
        <li className='p-2 cursor-pointer hover:text-[#00df9a] transition-all'><a href="#home">Home</a></li>
        <li className='p-2 cursor-pointer hover:text-[#00df9a] transition-all'><a href="#about">About</a></li>
        <li className='p-2 cursor-pointer hover:text-[#00df9a] transition-all'><a href="#skills">Skills</a></li>
        <li className='p-2 cursor-pointer hover:text-[#00df9a] transition-all'><a href="#projects">Projects</a></li>
        <li className='p-2 cursor-pointer hover:text-[#00df9a] transition-all'><a href="#contact">Contact</a></li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className='block md:hidden cursor-pointer z-50'>
        {nav ? '✕' : '☰'}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 p-4 pt-24 z-40' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b border-gray-600'><a onClick={() => setNav(false)} href="#home">Home</a></li>
        <li className='p-4 border-b border-gray-600'><a onClick={() => setNav(false)} href="#about">About</a></li>
        <li className='p-4 border-b border-gray-600'><a onClick={() => setNav(false)} href="#skills">Skills</a></li>
        <li className='p-4 border-b border-gray-600'><a onClick={() => setNav(false)} href="#projects">Projects</a></li>
        <li className='p-4'><a onClick={() => setNav(false)} href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;