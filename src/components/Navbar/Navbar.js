import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import useDarkMode from "../useDarkMode/useDarkMode";
import Slide from 'react-reveal/Slide';
import logo from './logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const hide = () => setIsOpen(false);
  return (
    <div>
      <Slide top delay={400}>
        <nav className="bg-gray-900 dark:bg-gray-200 font-mono fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 absolute">
              <Link to ='/'>
                <img
                    className="h-14 w-11 pt-2"
                    src={logo}
                    height='50'
                    widht='50'
                    alt="benjamin peto's logo"
                  /> 
              </Link>
          </div>
          <div className="flex items-center justify-end h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-middle space-x-4">
                    <Link
                      to="/"
                      className=" text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-100 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 px-3 pt-3 pb-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>

                    <Link
                      to="/skills"
                      className="text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-100 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 px-3 pt-3 pb-2 rounded-md text-sm font-medium"
                    >
                      Skills
                    </Link>

                    <Link
                      to="/projects"
                      className="text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-100 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 px-3 pt-3 pb-2 rounded-md text-sm font-medium"
                    >
                      Projects
                    </Link>

                    <Link
                      to="/contact"
                      className="relative p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 absolute"></span>
                                <span className="relative px-3 py-2 transition-all ease-out bg-gray-900 dark:bg-gray-200 rounded-md group-hover:bg-opacity-0 duration-500">
                                    <span className="relative inline-flex text-white dark:text-gray-900">
                                        Hire Me
                                    </span>
                                </span>
                    </Link>
                    <span onClick={() => setTheme(colorTheme)} className='w-10 h-10 bg-gray-800 dark:bg-white rounded-full shadow-md cursor-pointer flex items-center justify-center text-yellow-400'>
                      {colorTheme === 'dark' ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden space-x-4">
              <span onClick={() => setTheme(colorTheme)} className='w-10 h-10 bg-gray-800 dark:bg-white rounded-full shadow-md cursor-pointer flex items-center text-yellow-400 mx-auto justify-center'>
                        {colorTheme === 'dark' ?
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg> 
                        }
                  </span>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-black dark:bg-white inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 focus:ring-white dark:focus:ring-gray-400"
                  ari-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-1000 transform"
            enterFrom="opacity-0 scale-80"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-80"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {/* <span onClick={() => setTheme(colorTheme)} className='w-10 h-10 bg-gray-800 dark:bg-white rounded-full shadow-md cursor-pointer flex items-center justify-center mx-auto text-yellow-400'>
                        {colorTheme === 'dark' ?
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg> 
                        }
                  </span> */}
                  <Link
                    to="/"
                    className="text-gray-300 dark:text-gray-600 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 block px-3 py-2 rounded-md font-medium text-center"
                    onClick={hide}>
                    About
                  </Link>

                  <Link
                    to="/skills"
                    className="text-gray-300 dark:text-gray-600 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 block px-3 py-2 rounded-md font-medium text-center"
                    onClick={hide}>
                    Skills
                  </Link>

                  <Link
                    to="/projects"
                    className="text-gray-300 dark:text-gray-600 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 block px-3 py-2 rounded-md text-center font-medium"
                    onClick={hide}>
                    Projects
                  </Link>

                  <Link
                    to="/contact"
                    className="text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 hover:text-white block px-3 py-2 rounded-md text-center font-medium"
                    onClick={hide}>
                    Hire Me
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </Slide>
    </div>
  );
}

export default Navbar;