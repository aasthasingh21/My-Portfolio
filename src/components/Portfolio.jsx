import React from 'react';
import gmailClone from '../assets/portfolio/GmailClone.png';
import filesharing from '../assets/portfolio/filesharing.png';
import crudApp from '../assets/portfolio/CrudReact.png';
import cynthia from '../assets/portfolio/cynthiaUgwu.png';
import instaClone from '../assets/portfolio/Instaclone.png';
import sidcup from '../assets/portfolio/sidCup.png';
import usability from '../assets/portfolio/usabilityhub.png';

// add your photos and import later on

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: gmailClone,
            demoLink: 'https://gmailclone-q568.onrender.com',
            codeLink: 'https://github.com/aasthasingh21/mern-stack-gmail-clone',
            description: <p>Gmail-Clone : It is a MERN stack project, with seamless functionalities like composing, sending, and managing emails. Implemented features such as drafting, starring, and deleting, showcasing a comprehensive understanding of full-stack development.</p>
        },
        {
            id: 2,
            src: filesharing,
            demoLink: 'https://filesharingapp-xegb.onrender.com/',
            codeLink: 'https://github.com/aasthasingh21/mern-stack-file-sharing-application',
            description: <p>File sharing app: It is a MERN stack mini project allowing users to upload files and generate shareable links for easy direct downloads, demonstrating a seamless and efficient file-sharing experience..</p>
            
        },
        {
            id: 3,
            src: crudApp,
            demoLink: 'https://timely-sorbet-9c73c6.netlify.app/',
            codeLink: 'https://github.com/aasthasingh21/react-crud-application',
            description: <p>CRUD app: using React, Redux, and React Toolkit, styled with Bootstrap for an intuitive UI.The app facilitates seamless user management, including search functionality and gender-based categorization, showcasing proficiency in modern front-end technologies.</p>
        },
        {
            id: 4,
            src: cynthia,
            demoLink: 'https://aasthasingh21.github.io/cynthia-ugwu-clone/',
            codeLink: 'https://github.com/aasthasingh21/cynthia-ugwu-clone',
            description: <p>Recreated the Cynthia Ugwu website using HTML, CSS, and JavaScript, incorporating GSAP animations and Locomotive Scroll. The project showcases a skillful blend of front-end technologies, delivering a visually appealing and dynamic user experience.</p>
        },
        {
            id: 5,
            src: instaClone,
            demoLink: 'https://instaclone-zoip.onrender.com/',
            codeLink: 'https://github.com/aasthasingh21/instagram-clone',
            description: <p>Instaclone: Backend-driven Instagram clone using Express.js, Express Generator, and MongoDB. Features robust authentication, profile editing, image uploading, likes, and user search, while maintaining a sleek UI with Tailwind CSS.(due to a hoisting problem, the app may not be accessible) </p>
        },
        {
            id: 6,
            src: sidcup,
            demoLink: 'https://aasthasingh21.github.io/sidcup-family-golf-clone/',
            codeLink: 'https://github.com/aasthasingh21/sidcup-family-golf-clone',
            description: <p>Recreated the Sidcup Family Golf Club website with HTML, CSS, and JavaScript, featuring GSAP animations for dynamic visual elements. Meticulously crafted without Locomotive Scroll, the project highlights proficiency in front-end development.</p>
        },
        {
            id: 7,
            src: usability,
            demoLink: 'https://aasthasingh21.github.io/usabilityhub-clone/',
            codeLink: 'https://github.com/aasthasingh21/usabilityhub-clone',
            description: <p>Effectively replicated the UsabilityHub website using HTML and CSS, focusing on responsive design for a seamless user experience across various devices. </p>
        },
        
    ]
   

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit'>
      <div className='max-w-screen-lg p-4 pt-40 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6 text-xl '>Here are a few projects that mark steps in my coding journey - still learning, still growing.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-12 sm:px-0'> 
            {projects.map(({id, src, demoLink, codeLink, description }) => (
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <div className='relative group hover:scale-110 ease-in-out p-4'>
                        <img src={src} alt="img" className='rounded-md duration-200 transition-transform transform' />
                        <p className='text-white absolute inset-0 bg-gradient-to-b from-gray to-gray-800 bg-opacity-400 hidden group-hover:flex items-center justify-center rounded-md p-2'>{description}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href={demoLink} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a href={codeLink} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div> 
                </div>  
            ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio;
