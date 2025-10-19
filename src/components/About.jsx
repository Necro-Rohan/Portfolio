import React from 'react'
import img from '../assets/Education_soaring_img.png'
import { Minus, BookOpen, CircleUser, UserCircle } from "lucide-react";

const timeline = [
  {
    year: "2024 - Present",
    title: "B.Tech in Computer Science",
    organization: "Newton School of Technology, Pune",
  },
  {
    year: "2021 - 2023",
    title: "Higher Secondary Education (Science Stream - PCM)",
    organization: "S.N.S. College Hajipur (Vaishali)",
  },
  {
    year: "2016 - 2021",
    title: "Secondary Education",
    organization: "Jawahar Navodaya Vidyalaya, Wafapur Sharma, Vaishali, Bihar",
  },
  {
    year: "2013 - 2016",
    title: "Primary Education",
    organization: "Kurooz Academy, Hajipur, Vaishali, Bihar",
  },
  {
    year: "2009 - 2013",
    title: "Early Education",
    organization: "St. Mary's School, Sarai, Vaishali, Bihar",
  }
];

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Necro-Rohan",
    stats: "75+ problems solved",
    link: "https://leetcode.com/u/Necro-Rohan/",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=512",
    bgColor: "hover:bg-orange-50",
  },
  {
    platform: "CodeChef",
    username: "hungrydevourer",
    stats: "rating @ 1187",
    link: "https://www.codechef.com/users/hungrydevourer",
    icon: "https://ugc.production.linktr.ee/9e405674-7e6a-44db-a9ca-d112ea037c20_codecheficon.png",
    bgColor: "hover:bg-red-50",
  },
  {
    platform: "GitHub",
    username: "Necro-Rohan",
    stats: "20+ repositories",
    link: "https://github.com/Necro-Rohan",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    bgColor: "hover:bg-gray-50",
  },
  {
    platform: "Codeforces",
    username: "Necro_Rohan",
    stats: "rating @ 395",
    link: "https://codeforces.com/profile/Necro_Rohan",
    icon: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg",
    bgColor: "hover:bg-blue-50",
  },
];

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative z-10 flex flex-col items-center justify-start text-center px-4 text-white min-h-screen w-full "
      >
        <div className="max-w-4xl w-full mb-10">
          <div className="group relative inline-block mb-3 md:mb-5">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
              About Me
              <Minus className="inline text-5xl text-rose-500 ml-2 " />
              <UserCircle className="inline size-7 md:size-10 ml-2 group-hover:text-blue-500" />
            </h3>
            <p className=" mt-2 w-2/3 h-[1.5px] bg-blue-500"></p>
          </div>
          <p className="text-md text-gray-400 max-w-2xl mx-auto text-start font-light">
            I'm currently a Computer Science student at the Newton School of
            Technology, Pune with a passion for software development,
            applications, engineering, and AI. I always love creating beautiful
            and functional web applications.Since starting my programming
            journey in 2024, I've been exploring different areas of technology
            to find the path that suits me best. Along the way, I'm gaining
            valuable experience and building a solid foundation in various
            programming languages and frameworks. I'm curious, eager to learn,
            and always ready to adapt to new technologies—because I believe
            continuous learning is the key to growing in the world of software
            development.
          </p>
          <div>
            <h4 className="text-lg md:text-2xl font-semibold text-gray-200 mt-10 mb-3">
              My Codefolio
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {codingProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 bg-gray-900/50 rounded-xl p-4 shadow-sm transform transition-all duration-300 hover:!scale-110 hover:bg-white/10"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center rounded-xl p-2 min-w-[220px] gap-3`}
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.platform} icon`}
                      className="w-10 h-10 object-contain"
                    />
                    <div className="text-left">
                      <p className="text-md font-medium text-gray-200">
                        {profile.platform}
                      </p>
                      <p className="text-sm text-gray-400">
                        {profile.username} - {profile.stats}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-blue-400 mt-4">
            <a href="#skills">Check out my Skills...</a>
          </div>
        </div>
        <div
          id='experience'
          className="space-y-8 flex flex-col items-center justify-start text-center px-4 text-white w-full my-20">
          <div className="group relative inline-block">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
              Education & Experience
              <Minus className="inline text-5xl text-rose-500 ml-2 " />
              <BookOpen className="inline size-7 md:size-10 ml-2 group-hover:text-blue-500" />
            </h3>
            <p className=" mt-2 w-2/3 h-[1.5px] bg-blue-500"></p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl">
            {/* Image */}
            <div className="hidden md:flex w-1/2 mr-3 -ml-12">
              <img
                src={img}
                alt="Education Timeline"
                className="w-full h-[700px] xl:h-[80vh] object-cover "
              />
            </div>
            {/* Timeline */}
            <div className="space-y-6 md:w-1/2">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="group relative border-l-2 border-gray-200 hover:border-blue-600 pl-6 pb-6 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-gray-200 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors"></div>

                  <div className="space-y-2">
                    <p className="text-gray-200 text-md md:text-2xl font:normal ">
                      {item.organization}
                    </p>
                    <h4 className="text-md md:text-xl font-small md:font-normal text-gray-500">
                      {item.title}
                    </h4>
                    <span className="text-sm font-medium text-gray-100">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
