import React from 'react';

const Hero = () => {
  return (
    <div id='home' className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4'>
      <p className='text-[#00df9a] font-bold p-2 uppercase tracking-widest'>Welcome to my world</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Hi, I'm a Developer.</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-4xl sm:text-3xl text-xl font-bold text-gray-500 py-4'>
          Building elegant, fast, and responsive web applications.
        </p>
      </div>
      <div className='flex justify-center gap-4 mt-4'>
        <a href="#projects" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00c285] transition-all block'>View My Work</a>
        <a href="#" className='border border-[#00df9a] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df9a] hover:text-black transition-all block'>Download Resume</a>
      </div>
    </div>
  );
};

export default Hero;