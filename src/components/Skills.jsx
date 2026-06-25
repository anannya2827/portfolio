import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5 & CSS3', level: '90%' },
    { name: 'JavaScript (ES6+)', level: '85%' },
    { name: 'React.js', level: '85%' },
    { name: 'Tailwind CSS', level: '95%' },
    { name: 'Node.js & Express', level: '70%' },
    { name: 'Git & GitHub', level: '80%' },
  ];

  return (
    <div id='skills' className='w-full text-white bg-[#0e1111] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-[#00df9a] font-bold uppercase tracking-wider text-xl mb-4'>Skills</p>
        <h2 className='text-3xl font-bold mb-8'>My Technical Toolkit</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-neutral-900 p-6 rounded-lg shadow-md'>
              <div className='flex justify-between font-bold mb-2'>
                <span>{skill.name}</span>
                <span className='text-[#00df9a]'>{skill.level}</span>
              </div>
              <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden'>
                <div className='bg-[#00df9a] h-full rounded-full transition-all duration-1000' style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;