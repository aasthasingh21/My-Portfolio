import React from 'react';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import reactImage from '../assets/react.png';
import html from '../assets/html.png';
import expressjs from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import javaImage from '../assets/java.png'


const Experience = () => {

    const images = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'reactJs',
            style: 'shadow-cyan-500'
        },
        {
            id: 5,
            src: node,
            title: 'nodeJs',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: expressjs,
            title: 'expressJs',
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            src: mongodb,
            title: 'mongoDb',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: mysql,
            title: 'mySql',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: javaImage,
            title: 'Java',
            style: 'shadow-yellow-500'
        },

    ]

  return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
            <div className='max-w-screen-lg p-4 pt-40 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div >
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technical Skills</p>
                    <p className='py-6 text-xl'>A glimpse into my technical toolkit.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {images.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Experience;
