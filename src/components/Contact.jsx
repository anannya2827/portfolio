import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-[#000300] py-16 px-4 text-white text-center'>
      <div className='max-w-[600px] mx-auto'>
        <p className='text-[#00df9a] font-bold uppercase tracking-wider text-xl mb-2'>Get In Touch</p>
        <h2 className='text-3xl font-bold mb-6'>Let's Work Together</h2>
        <form className='flex flex-col gap-4 text-black' onSubmit={(e) => e.preventDefault()}>
          <input className='p-3 rounded-md outline-none bg-zinc-900 text-white border border-gray-700' type="text" placeholder='Your Name' required />
          <input className='p-3 rounded-md outline-none bg-zinc-900 text-white border border-gray-700' type="email" placeholder='Your Email' required />
          <textarea className='p-3 rounded-md outline-none bg-zinc-900 text-white border border-gray-700 h-[150px] resize-none' placeholder='Your Message...' required></textarea>
          <button className='bg-[#00df9a] text-black rounded-md font-medium p-3 hover:bg-[#00c285] transition-all duration-300'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;