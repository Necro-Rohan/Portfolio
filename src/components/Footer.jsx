import React from 'react'
import { Instagram, Linkedin, Github} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center px-10 py-10 bg-black/50 text-white mt-10">
      <div className="flex flex-row w-full max-w-5xl justify-center gap-2 md:mb-6">
        <div className="hidden sm:flex flex-col w-full md:w-1/4 mb-6 md:mb-0">
          <h3>About Me</h3>
          <p className="text-gray-400 text-sm mt-2">
            A passionate developer focused on creating innovative solutions and
            meaningful user experiences.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/5 mb-6 md:mb-0 justify-center items-center">
          <h3>Quick Links</h3>
          <ul className="list-none mt-2 text-gray-400 text-sm">
            <li className="py-0.5 hover:text-white hover:font-medium">
              <a href="#home">Home</a>
            </li>
            <li className="py-0.5 hover:text-white hover:font-medium">
              <a href="#projects">Projects</a>
            </li>
            <li className="py-0.5 hover:text-white hover:font-medium">
              <a href="#experience">Experience</a>
            </li>
            <li className="py-0.5 hover:text-white hover:font-medium">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col w-full md:w-1/4 mb-6 md:mb-0 justify-center items-center">
          <h3>Skills</h3>
          <ul className="list-none mt-2 text-gray-400 text-sm">
            <li className="py-0.5 ">Full Stack Development</li>
            <li className="py-0.5 ">AI & Machine Learning</li>
            <li className="py-0.5 ">Competitive Programming</li>
            <li className="py-0.5 ">Database Management</li>
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-1/7 mb-6 md:mb-0 items-center">
          <h3>Connect</h3>
          <ul className="list-none mt-2 flex space-x-4 text-gray-400">
            <li>
              <a
                href="https://www.instagram.com/rohan_gupta_c53/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-medium hover:text-white"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rohan-kumar-2b2ab9326/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-medium hover:text-white"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Necro-Rohan"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:font-medium hover:text-white"
              >
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-px w-[80%] my-4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div>
        <p className="text-gray-500 text-sm text-center">
          &copy; {currentYear} Rohan Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
