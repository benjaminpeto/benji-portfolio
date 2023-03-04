import React from 'react';
import { Link } from 'react-router-dom';
import Bio from './Bio';
import resume from '../Buttons/benjamin_peto_CV_gen.pdf';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import profile from './profile.jpg';
import './about.css';

function About() {
    return (
			<>
				<Bio />
				<section
					id="introduction"
					className="bg-code dark:bg-lightcode bg-cover bg-fixed flex flex-wrap content-center w-full md:h-screen"
				>
					<div className="bg-gray-700 dark:bg-gray-300 dark:text-gray-300 bg-opacity-50 dark:bg-opacity-20 backdrop-filter backdrop-blur-sm h-auto md:flex rounded-xl p-8 md:p-4 mx-6 sm:mx-14 md:mx-auto wrapper md:mt-0 mt-20 mb-5 md:mb-0 md:w-5/6 lg:w-3/4 2xl:w-1/2 justify-center">
						<Zoom delay={700}>
							<img
								className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mt-auto mb-auto shadow-md"
								src={profile}
								alt="benjamin peto profile"
								height="400"
								width="400"
							/>
						</Zoom>
						<Fade left cascade>
							<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
								<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 font-mono font-bold pt-0 md:pt-2 text-2xl md:text-5xl text-shadow">
									About me
								</h1>
								<p className="text-white dark:text-black font-sans pb-1 text-justify text-sm md:text-base">
									As passionate Frontend Developer with experience in developing
									and maintaining high-quality frontend components and features
									for a variety of websites. With expertise in TypeScript,
									React, NextJS, TailwindCSS, Storybook, and Kontent CMS, I have
									successfully contributed to the migration of over 100 websites
									from Drupal to NextJS with Headless CMS from Kontent.ai. I am
									a detail-oriented problem solver who is comfortable
									troubleshooting and resolving bugs to ensure a seamless user
									experience across multiple devices and platforms. My focus is
									on developing generic and reusable code to maintain
									consistency and streamline future development. I am also
									committed to staying up-to-date with the latest trends and
									technologies in frontend development and contributing to the
									overall growth of the team. I am excited about the opportunity
									to become a full stack developer and motivated to learn new
									skills in backend development.
								</p>
								<p className="text-white dark:text-black font-sans pb-1 text-justify text-sm md:text-base mt-3">
									When I am not working, I enjoy spending time outdoors,
									surfing, hiking, and exploring new places. I also like to read
									about technology and attend tech meetups to network and learn
									from others in the industry.
								</p>
								<p className="text-white dark:text-black font-bold font-sans pb-1 text-justify text-sm md:text-base mt-3">
									If you would like to know more about me or are simply curious,
									go ahead and download my CV or get in touch.
								</p>
								<p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 text-lg md:text-2xl font-bold md:text-left text-center">
									Let's work together!
								</p>
								<Link
									to="/projects"
									className="relative p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md sm:mr-4"
								>
									<span className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 absolute"></span>
									<span className="relative pb-1 pt-2 px-6 transition-all ease-out bg-gray-900 dark:bg-gray-300 rounded-md group-hover:bg-opacity-0 duration-500">
										<span className="relative inline-flex text-white dark:text-black">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 mr-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
											Projects
										</span>
									</span>
								</Link>
								<a
									href={resume}
									download="benjamin_peto_CV_gen.pdf"
									className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
								>
									<span className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 absolute"></span>
									<span className="relative pb-1 pt-2 px-6 transition-all ease-out bg-gray-900 dark:bg-gray-300 rounded-md group-hover:bg-opacity-0 duration-500">
										<span className="relative inline-flex text-white dark:text-black">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 mr-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>
											Download CV
										</span>
									</span>
								</a>
							</div>
						</Fade>
					</div>
				</section>
			</>
		);
}

export default About;