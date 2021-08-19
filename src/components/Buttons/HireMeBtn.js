import React from 'react';
import { Link } from 'react-router-dom';

function HireMeBtn() {

    return (
        <Link to="/contact" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 absolute"></span>
            <span className="relative px-5 pt-3 pb-2 transition-all ease-out bg-gray-900 dark:bg-gray-200 rounded-md group-hover:bg-opacity-0 duration-500">
                <span className="relative inline-flex text-white dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                        Hire Me
                </span>
            </span>
        </Link>
    );
}

export default HireMeBtn;