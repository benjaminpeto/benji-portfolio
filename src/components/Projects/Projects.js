import React from 'react';
import { project } from './data.js';
import '../About/about.css';
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';


function Projects() {
    return (
        <section id='projects' className='flex justify-center bg-gray-900 dark:bg-gray-200'>
            <div className="flex flex-wrap h-full pt-20 lg:w-3/4">
                <div className="text-center mb-12 mx-auto">
                    <RubberBand>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block mb-4" fill="none" viewBox="0 0 24 24" stroke="grey">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600 mb-4">
                            Projects
                        </h1>
                        <p className="text-base text-gray-300 dark:text-gray-600 font-mono leading-relaxed xl:w-2/4 md:w-3/4 mx-auto">
                            Look around my websites, and web applications to see what I've made so far, what technologies I used, and how I wrote my codes.
                        </p>
                    </RubberBand>
                </div>
            {project.map((project) => (
                <Flip left delay={400} duration={1500} cascade>
                    <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-100 p-4 py-8"
                    rel='noreferrer'
                    target='_blank'>
                        <div className="flex relative shadow-2xl">
                        <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            height='200'
                            width='auto'
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 dark:border-gray-400 bg-gray-900 dark:bg-gray-200 opacity-0 hover:opacity-90 transform transition duration-500 ease-in-out">
                            <h1 className="title-font text-lg font-medium text-white dark:text-gray-900 mb-3">
                            {project.title}
                            </h1>
                            <div className="flex flex-wrap pb-2">
                                {project.libraries.map((libraries) => (
                                    <h2 className='px-1 mx-1 border border-solid border-green-600 rounded-md text-green-500 font-mono text-xs' key={libraries}>{libraries}</h2>
                                ))}
                            </div>
                            <p className="leading-relaxed text-gray-200 dark:text-gray-900 text-sm mb-4">{project.description}</p>
                            <form action={project.source}  target='_blank'>
                                <input type="submit" value="Source Code" className='font-mono text-green-500 border border-solid border-green-500 bg-gray-900 dark:bg-gray-200 hover:bg-green-500 dark:hover:bg-green-500 hover:text-gray-900 focus:outline-none transform hover:scale-110 transition duration-300 ease-in-out p-2 cursor-pointer' />
                            </form>
                        </div>
                    </div>
                </a>
                </Flip>
            ))}
        </div>
      </section>
    );
}

export default Projects;