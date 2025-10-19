import React from 'react'
import CoadFoad from '../assets/CoadFoad.png'
import GrindSystem from '../assets/GrindSystem.png'
import MontyHall from '../assets/MontyHallSimulator.png'
import RockPaperScissors from '../assets/RockPaperScissors2.png'
import { Minus, Github, LaptopMinimalCheck } from "lucide-react";

const ProjectList = [
  {
    title: "CoadFoad",
    description:
      "A basic coding tutorial learning platform where users can learn HTML, CSS, Python, Bash from Scratch. It also has a code editor where users can practice their coding skills.",
    image: CoadFoad,
    github: "https://github.com/Necro-Rohan/CodeFoad",
    liveDemo: "https://codefoad.vercel.app/",
    TechStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Rock Paper Scissors",
    description:
      "A classic game of Rock Paper Scissors implemented in Javascript using interactive elements. Users can play against the computer and see their score after each round.",
    image: RockPaperScissors,
    github: "https://github.com/Necro-Rohan/Rock-Paper-Scissor",
    liveDemo: "https://rock-paper-scissor-puce-five.vercel.app/",
    TechStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Monty Hall Simulator",
    description:
      "A web application that simulates the Monty Hall problem, a famous probability puzzle. Users can choose to switch or stay with their initial choice and see how it affects their chances of winning.",
    image: MontyHall,
    github: "https://github.com/Necro-Rohan/Monty-Hall-Game",
    liveDemo: "https://monty-hall-game-jade.vercel.app/",
    TechStack: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Grind System",
    description:
      "A tactical life optimizer inspired by the Solo Leveling universe. It helps users track and improve their physical, mental, and personal growth through interactive tasks, progress bars, and personalized feedback.",
    image: GrindSystem,
    github: "https://github.com/Necro-Rohan/GrindSystem",
    liveDemo: "https://grind-system.vercel.app/",
    TechStack: ["HTML", "CSS", "JavaScript", "React"],
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full max-w-5xl mx-auto text-center py-20 px-4 sm:px-10"
    >
      <div className="group relative mb-12 text-center inline-block">
        <h3 className="relative text-2xl md:text-4xl font-semibold text-gray-200 inline-flex items-center gap-2">
          What I've Built <Minus className="inline text-5xl text-rose-500" />
          <LaptopMinimalCheck className="inline size-7 md:size-10 ml-1 group-hover:text-blue-500" />
          <span className="absolute left-0 bottom-[-8px] h-[2px] bg-blue-500 w-2/3"></span>
        </h3>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-3xl overflow-hidden shadow-lg transition hover:shadow-xl p-6 flex flex-col hover:!scale-105 hover:bg-black/20 duration-300"
          >
            <div className="w-full h-60 rounded-2xl overflow-hidden mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-md text-gray-400 max-w-2xl mx-auto text-start font-light">
              {project.description}
            </p>
            <div>
              <p className='"text-md text-gray-300 max-w-2xl mx-auto text-start mt-4 mb-1 font-light"'>
                Tech Stack:
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.TechStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-black/40 text-white px-5 py-2 rounded-full hover:bg-white/15 hover:!scale-105 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex text-center justify-center gap-3 mt-auto ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-blue-500 font-medium px-6 py-3 rounded-full hover:!scale-105 transition"
              >
                <Github size={20} /> Source Code
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block px-3 md:px-6 py-3 font-semibold border-1 text-white rounded-full shadow-lg hover:scale-105 hover:border-blue-500 transform transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
