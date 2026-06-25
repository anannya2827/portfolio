import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'E-Commerce Platform', desc: 'A full-stack online store featuring cart state management and Stripe checkouts.', tech: ['React', 'Tailwind', 'Node.js'] },
    { title: 'Task Dashboard', desc: 'A productivity Kanban board app utilizing local storage and beautiful drag-and-drop mechanics.', tech: ['React', 'Context API', 'CSS'] },
    { title: 'Weather Analytics', desc: 'Fetches global operational data reporting current weather metrics utilizing REST APIs.', tech: ['JavaScript', 'React', 'OpenWeather API'] }
  ];

  return (
    <div id='projects' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <p className='text-[#00df9a] font-bold uppercase tracking-wider text-xl mb-2'>Portfolio</p>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>Recent Work Projects</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {projectList.map((project, index) => (
            <div key={index} className='border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 flex flex-col justify-between p-6 bg-gray-50'>
              <div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>{project.title}</h3>
                <p className='text-gray-600 text-sm mb-4'>{project.desc}</p>
              </div>
              <div>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className='bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded'>{t}</span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <button className='text-sm font-bold text-[#00df9a] hover:underline'>Live Demo</button>
                  <button className='text-sm font-bold text-gray-500 hover:underline'>GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;