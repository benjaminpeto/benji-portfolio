import React from "react";
import { applications } from "./Technologies";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";

function Skills() {
  return (
    <section id="skills" className="h-full bg-gray-900 dark:bg-gray-200 pt-12 2xl:py-24">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 inline-block mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="grey"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <Slide up cascade duration={500}>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600 mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base text-gray-300 dark:text-gray-600 font-mono leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.
            </p>
          </Slide>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {Object.keys(applications).map((skill) => (
            <Rotate bottom left cascade delay={500}>
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 dark:bg-gray-400 rounded flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="title-font font-medium text-white dark:text-black">
                    {applications[skill].name}
                  </span>
                </div>
              </div>
            </Rotate>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
