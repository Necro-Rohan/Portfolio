import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { CircleArrowRight } from "lucide-react";
import myImg from '../assets/rohan.jpeg';
import Resume from "../assets/Resume-Rohan Kumar (7).pdf";


const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-start justify-center h-[85%] text-center px-4 text-white mb-4">
      <div className="flex flex-col items-start justify-center w-[100%] md:w-[50%]">
        <div className="flex justify-center w-[100%] ">
          <h2 className="text-1xl md:text-2xl font-small md:font-bold text-gray-250 bg-[radial-gradient(circle,#662d59_0%,#341d61_100%)] rounded-full border-1 border-gray-300 px-4 py-2 mb-2 text-center ">
            Design. Code. Create.
          </h2>
        </div>
        <div className="text-1xl md:text-2xl font-bold text-gray-100 m-2 px-2 w-[100%] ">
          Hi! 👋 I'm{" "}
          <span className="block text-2xl md:text-5xl font-extrabold text-white ">
            Rohan Kumar
          </span>
          <span className="text-gray-300 text-base font-medium">
            a passionate
          </span>
          <div className="text-red-400 italic m-0.5 md:m-2">
            <Typewriter
              words={[
                "Frontend Developer",
                "Problem Solver",
                "Aspiring Data Engineer",
                "Competitive Programmer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] mt-0">
          <p className="text-md md:text-lg text-gray-300 max-w-[350px] md:max-w-[500px] p-0 mb-3">
            specialized in building beautiful, precise web applications that are
            easy and enjoyable for people to use.
          </p>
          <div className="hidden md:block md:text-center mt-1 md:mt-4 max-w-[350px] md:max-w-[500px]">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block px-3 md:px-6 py-3 font-semibold border-1  rounded-full shadow-lg hover:scale-105 hover:border-blue-500 transform transition duration-300"
            >
              View CV
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-kumar-2b2ab9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block px-2 ml-1 md:px-6 py-3 font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-blue-500"
            >
              Let's Connect{" "}
              <CircleArrowRight className="inline-block ml-1 mb-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex items-center justify-center mt-12 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-blue-500 opacity-40 rounded-[40%_60%_70%_30%/40%_30%_70%_60%] animate-float-slow blur-2xl"></div>

          <img
            src={myImg}
            alt="Rohan Kumar"
            className="relative w-full h-full object-cover shadow-2xl animate-float blob-shape"
          />
        </div>
      </div>
      <div className="md:hidden text-center mt-4  mx-auto">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block px-3 md:px-6 py-3 font-semibold border-1  rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          View CV
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block px-2 ml-1 md:px-6 py-3 font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-blue-500"
        >
          Let's Connect <CircleArrowRight className="inline-block ml-1 mb-1" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
