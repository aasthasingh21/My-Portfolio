import React from 'react';
import SecondImage from '../assets/9394(1).jpg';
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> {/*  md:flex-row is responsible for coming in align after width < 768px */}
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Developer</h2>
                <p className='text-gray-500 mx-w-md py-4 text-xl'>
                    Recent Electronics and Telecommunication Engineering graduate seeking excellence in Software Development. Actively pursuing opportunities in Full Stack Development and related fields to contribute technical skills and innovation to dynamic projects.
                </p>
                <div className='flex justify-center'>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'> {/* we give class group to button and then use in span as we have to make the arrow rotate when we hover on entire button and not only on arrow */}
                            <BsArrowRightShort size={30}/>
                        </span>
                    </Link> {/* we change the button to link to use it to portfolio page */}
                </div>
            </div>

            <div className='w-4/5 '>
                <img src={SecondImage} alt="My Profile" 
                className='rounded-full mx-auto w-2/3 md:w-full'/>
            </div>
            
        </div>
    </div>
  )
}

export default Home;
