import React from 'react';
import HireMeBtn from '../Buttons/HireMeBtn';
import './about.css';
import emoji from './emoji.png';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

function Bio() { 
    return (
        <>
            <section id='welcome' className='h-full text-gray-200 dark:text-gray-900 flex-wrap content-center w-full'>
                <div className='flex flex-row h-screen'>
                    <div className='flex flex-col w-9/12 bg-gray-900 dark:bg-gray-200 justify-center align-middle mx-auto px-6 md:px-28 lg:px-48 xl:px-64 2xl:px-96'>
                        <Slide left>
                            <h1 className="text-white dark:text-gray-900 text-2xl sm:text-3xl font-sans font-thin tracking-wide">Hello, </h1><h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600 text-4xl sm:text-6xl py-6 md:py-2">My name is Benji</h2>
                            <h2 className='text-green-400 font-mono font-bold pt-0 md:pt-2 text-base md:text-xl'>Front-end Developer,  <span className='text-blue-500 font-thin'>aspiring to be a Full-stack</span></h2>
                            <div className='pt-8'>
                                <Pulse right delay={2500} duration={1500} count={3}>
                                    <HireMeBtn /> 
                                </Pulse>
                            </div>  
                        </Slide>
                    </div>
                    <div className='flex flex-col justify-center align-middle w-3/12 bg-green-500'>
                        <Tada delay={1200}>
                            <img className='-ml-8 sm:-ml-12 md:-ml-16 xl:-ml-24 2xl:-ml-36' src={emoji} height='300' width='300' alt='emoji character of Benji'/>
                        </Tada>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bio;