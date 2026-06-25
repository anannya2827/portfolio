import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold uppercase tracking-wider text-xl'>About Me</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-800'>Passionate About Problem Solving</h1>
          <p className='text-gray-600 mt-2 text-lg leading-relaxed'>
            I am a self-taught Frontend Developer specialized in building robust software architectures using React, modern JavaScript ecosystems, and utility-first CSS frameworks like Tailwind. 
          </p>
          <p className='text-gray-600 mt-4 text-lg leading-relaxed'>
            My goal is to always write clean, maintainable code while crafting pixel-perfect, accessible user experiences. When I'm not coding, I love contributing to open-source or learning system designs.
          </p>
        </div>
        <div className='w-full h-[350px] bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-400 border border-dashed border-gray-400'>
          [Your Profile Picture Placeholder]
        </div>
      </div>
    </div>
  );
};

export default About;