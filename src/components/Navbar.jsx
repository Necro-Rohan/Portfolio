import React, { useState } from 'react'
import { Instagram, Linkedin, Github, Menu, X} from "lucide-react";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);


  return (
    <>
      <div className=" w-screen h-[80px] z-40 bg-transparent sticky drop-shadow-lg">
        <div className=" sm:px-4 md:px-4 xl:px-10 flex justify-between items-center w-full h-full ">
          <div className="flex items-center justify-center">
            <h1 className="px-2 py-1.5 m-1 font-extralight sm:text-2xl xl:text-3xl xl:mt-5 text-nowrap text-[#878e96]">
              {"< "}
              <span className="text-3xl sm:text-5xl xl:text-7xl text-white passions-conflict-regular text-center">
                Rohan Kumar
              </span>
              {" />"}
            </h1>
          </div>
          {/* Pages link */}
          <div className="sm:flex items-center sm:space-x-4 md:space-x-6 lg:space-x-8">
            <ul className="hidden lg:flex space-x-10 text-[#878e96] font-bold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
            {/* Icons */}
            <div className="hidden md:flex space-x-2 mr-2">
              <a
                href="https://www.instagram.com/rohan_gupta_c53/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-kumar-2b2ab9326/"
                className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Necro-Rohan"
                className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>
            </div>
            {/* Hamburger navbar */}
            <div className="lg:hidden m-4 font-bold z-30">
              {navOpen ? (
                <X
                  onClick={() => setNavOpen(false)}
                  className="text-white text-3xl cursor-pointer"
                />
              ) : (
                <Menu
                  onClick={() => setNavOpen(true)}
                  className="text-3xl text-white cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 md:w-1/2 h-3/5 bg-[#262626] flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 z-20 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          onClick={() => setNavOpen(false)}
          href="#"
          className="text-white text-2xl"
        >
          Home
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#"
          className="text-white text-2xl"
        >
          About
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#"
          className="text-white text-2xl"
        >
          Skills
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#"
          className="text-white text-2xl"
        >
          Projects
        </a>

        <div className="flex space-x-4 mt-6 md:hidden">
          <a
            href="https://www.instagram.com/rohan_gupta_c53/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-kumar-2b2ab9326/"
            className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Necro-Rohan"
            className="p-3 text-white text-3xl rounded-full bg-[#262626] border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-110 hover:shadow-lg"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
