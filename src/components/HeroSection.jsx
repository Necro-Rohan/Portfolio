import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { CircleArrowRight } from "lucide-react";



const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-[85%] text-center px-4 text-white mb-10">
      <div className="flex justify-center w-[80%] md:w-[50%]">
        <h2 className="text-1xl md:text-2xl font-small md:font-bold text-gray-250 bg-[radial-gradient(circle,#662d59_0%,#341d61_100%)] border-1 border-gray-300 px-4 py-2 mb-6 text-center ">
          Design. Code. Create.
        </h2>
      </div>
      <div className="text-2xl md:text-4xl font-bold text-gray-100 mb-4 px-2 w-[85%] md:w-[50%] ">
        Hello, I'm Rohan <span className="hidden lg:inline">Kumar</span>{" "}
        <div>
          <Typewriter
            words={[
              "Frontend Developer",
              "Problem Solver",
              "Aspiring Data Engineer",
              "Competitive Programmer",
            ]}
            loop={true} // repeats infinitely
            cursor // shows the blinking cursor
            cursorStyle="|" // style of the cursor
            typeSpeed={100} // speed of typing (ms per character)
            deleteSpeed={50} // speed of deleting text
            delaySpeed={1000} // delay before typing next word
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[80%] md:w-[50%]">
        <p className="text-lg text-gray-300 max-w-[350px] md:max-w-[500px] px-0 mx-0">
          I'm a passionate developer. I love making ideas actually work.{" "}
          <span className="hidden md:inline">
            For me, the fun is connecting the dots: building a clean front-end
            for people to use, then diving into the back-end to write the smart
            code that makes it click.
          </span>
        </p>
        <div className="text-center mt-2 md:mt-4 max-w-[350px] md:max-w-[500px]">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-3 md:px-6 py-3 font-semibold border-1  rounded-full shadow-lg hover:scale-105 transform transition duration-300"
          >
            View CV
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-2 ml-1 md:px-6 py-3 font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Let's Connect{" "}
            <CircleArrowRight className="inline-block ml-1 mb-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
