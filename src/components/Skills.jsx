import React from "react";
import { Minus } from "lucide-react";

const skills = [
  // This time, we only need the original skills array, not the duplicated one.
  {
    name: "HTML",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bash",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "GitHub",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Python",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MySQL",
    level: "Basic",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "TypeScript",
    level: "Basic",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "PostgreSQL",
    level: "Basic",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative z-10 flex flex-col items-center justify-start text-center px-4 text-white w-full"
    >
      <div className="w-full mx-auto text-center space-y-8 shadow-lg p-10">
        <div className="relative inline-block">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
            What I Use to Build Stuff <Minus className="inline text-5xl" /> 👨🏼‍💻
          </h3>
          <p className=" mt-2 w-2/3 h-[1.5px] bg-blue-500"></p>
        </div>
        <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
          You've got the idea; I've got the tools to make it happen. Here are
          the powerful tools and technologies I use to bring your ideas to life.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full aspect-square bg-gray-900/50 rounded-xl p-4 shadow-sm transform transition-all duration-300 hover:!scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
              <div className="flex flex-col items-center justify-center h-full gap-1.5 md:gap-3">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <h3 className="text-sm md:text-base font-semibold text-white text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
