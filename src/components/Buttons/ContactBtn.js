import React from 'react';
import { Link } from 'react-router-dom';

function ContactBtn() {
    return (
        <Link
        to="/contact"
        className="md:ml-4 inline-flex text-black hover:text-gray-200 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 border-0 py-2 px-6 mb-2 focus:outline-none rounded-full text-lg font-mono mx-auto md:mx-0 md:transform hover:scale-110 transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>Contact Me
        </Link>
    );
}

export default ContactBtn;