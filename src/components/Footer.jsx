import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#000300] text-gray-500 border-t border-zinc-800 py-8 text-center text-sm'>
      <p>&copy; {new Date().getFullYear()} DEV.PORTFOLIO. All rights reserved.</p>
      <div className='flex justify-center gap-6 mt-2'>
        <a href="#" className='hover:text-[#00df9a]'>GitHub</a>
        <a href="#" className='hover:text-[#00df9a]'>LinkedIn</a>
        <a href="#" className='hover:text-[#00df9a]'>Twitter</a>
      </div>
    </div>
  );
};

export default Footer;