import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from '../useDarkMode/useDarkMode';
import logo from '../Navbar/logo.png'

function Footer() {
    useDarkMode();
    return (
        <div className="bg-gray-900 dark:bg-gray-200 font-mono">
        <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
            <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                <img className='pt-5' src={logo} width='75' height='75' alt='benjamin peto logo'/>
                <ul className="flex flex-col md:flex-row mx-auto text-white dark:text-black text-center py-10">
                    <Link to='/'>
                        <li className="p-2 cursor-pointer hover:text-green-500 transform hover:scale-110 transition duration-700 ease-in-out px-6">About</li>
                    </Link>
                    <Link to='/skills'>
                        <li className="p-2 cursor-pointer hover:text-green-500 transform hover:scale-110 transition duration-700 ease-in-out px-6">Skills</li>
                    </Link>
                    <Link to='/projects'>
                        <li className="p-2 cursor-pointer hover:text-green-500 transform hover:scale-110 transition duration-700 ease-in-out px-6">Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="p-2 cursor-pointer hover:text-green-500 transform hover:scale-110 transition duration-700 ease-in-out px-6">Contact</li>
                    </Link>
                </ul>
                <ul className="flex mx-auto text-white dark:text-black text-center">
                    <li className='p-2 cursor-pointer px-7 transform hover:scale-125 transition duration-300 ease-in-out'>
                        <a href='https://www.linkedin.com/in/benjaminpeto/' target='_blank' rel='noreferrer'>
                            <xml version="1.0" encoding="UTF-8" standalone="no">
                                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z" fill="#10B981"/>
                                </svg>
                            </xml>
                        </a>
                    </li>
                    <li className='p-2 cursor-pointer px-7 transform hover:scale-125 transition duration-300 ease-in-out'>
                        <a href='https://github.com/benjaminpeto' target='_blank' rel='noreferrer'>
                            <xml version="1.0" encoding="UTF-8" standalone="no">
                                <svg width="30" height="30" id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path strokeWidth="0" fill="#10B981" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                                </svg>
                            </xml>
                        </a>
                    </li>
                </ul>
                <div className="flex mx-auto text-gray-400 text-center pt-8 text-xs">
                    Designed and coded by Benjamin Peto © 2021
                </div>
            </div>
        </footer>
    </div>
    );
}

export default Footer;