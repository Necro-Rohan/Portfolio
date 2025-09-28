import React from 'react'
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

const About = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 text-white min-h-screen w-full mb-10">
      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I'm a passionate developer with a love for creating beautiful and
          functional web applications.
        </p>
      </div>
      <div className="space-y-8 flex flex-col items-center justify-start text-center px-4 text-white w-full mt-10">
        <div className="relative inline-block">
          <h3 className="text-3xl font-semibold text-gray-200">
            Education & Experience
          </h3>
          <p className=" mt-2 w-2/3 h-[1.5px] bg-blue-500"></p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl">
          {/* Image */}
          <div className='hidden md:block w-1/2'>
            <img src='#' alt='Education Timeline' />
          </div>
          {/* Timeline */}
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="group relative border-l-2 border-gray-200 pl-6 pb-6 hover:border-gray-400 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-gray-200 group-hover:border-gray-400 transition-colors"></div>

                <div className="space-y-2">
                  <p className="text-gray-200 text-2xl font-medium">
                    {item.organization}
                  </p>
                  <h4 className="text-lg font-normal text-gray-500">
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
        {/* <div className="space-y-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="group relative border-l-2 border-gray-200 pl-6 pb-6 hover:border-gray-400 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-gray-200 group-hover:border-gray-400 transition-colors"></div>

              <div className="space-y-2">
                <p className="text-gray-200 text-2xl font-medium">
                  {item.organization}
                </p>
                <h4 className="text-lg font-normal text-gray-500">
                  {item.title}
                </h4>
                <span className="text-sm font-medium text-gray-100">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default About
