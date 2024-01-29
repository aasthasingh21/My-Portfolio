import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>

            <p className='text-2xl mt-10'>
                Hello, I'm Aastha Mahesh Singh, taking my first steps into the world of software development. I'm especially drawn to Full Stack Development and have been getting hands-on by working on different projects. My approach is all about diving deep into the details of software development, learning its ins and outs.
            </p>

            <br />

            <p className='text-2xl'>
                When it comes to my projects, I'm laser-focused on making them not just work but also user-friendly. I love playing around with different technologies and frameworks to bring ideas to life. Even though I'm just starting out in my career, I'm super excited about jumping into interesting projects and taking on real-world challenges to grow as a developer.
            </p>
        </div>
    </div>
  )
}

export default About;
