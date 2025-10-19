import React from 'react'
import { ContactRound, Minus } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full mt-10 items-center justify-center text-center px-4 text-white">
      <div className="group relative inline-block items-center lg:hidden">
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
          Contact Me <Minus className="inline text-5xl text-rose-500" />
          <ContactRound className="inline size-7 md:size-10 ml-2 group-hover:text-blue-500" />
        </h3>
        <p className=" mt-2 w-2/3 h-[1.5px] bg-blue-500"></p>
      </div>
      <div
        id="contact"
        className="w-full max-w-5xl mx-auto text-center md:pb-15 px-4 sm:px-10 lg:flex items-start justify-center gap-8"
      >
        <div className="flex flex-col items-center  w-{50%} justitfy-center mb-10 md:mb-0 pt-10 md:items-start">
          <h2 className="hidden lg:inline-block text-4xl font-semibold text-gray-200 mb-6 ">
            Let's Get in Touch
          </h2>
          <p className="text-md text-gray-400 mb-8 lg:text-left">
            I'm always interested in hearing about new projects and
            opportunities. Drop me a message! or just a friendly hello 😄
          </p>
        </div>
        <div className="md:w-full">
          <form
            className="flex flex-col items-center w-full"
            action="https://formspree.io/f/xeordaww"
            method="POST"
            target='_blank'
          >
            <div className="w-full md:flex md:gap-5">
              <div className="flex flex-col mb-4 items-start gap-1 w-full">
                <label className="text-gray-300 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  placeholder="Enter Your Name"
                  className="mb-4 p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="flex flex-col mb-4 items-start gap-1 w-full">
                <label className="text-gray-300 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  placeholder="Enter Your Email"
                  className="mb-4 p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 items-start gap-1 w-full">
              <label className="text-gray-300 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name='message'
                placeholder="Enter Your Message"
                className="mb-4 p-2 w-full rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 w-full"
                type="submit"
              >
                Send via Email
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = document.getElementById("name").value;
                  const email = document.getElementById("email").value;
                  const message = document.getElementById("message").value;
                  const whatsappMessage = `Hello! My name is ${name} (${email}). ${message}`;
                  window.open(
                    `https://wa.me/919939087003?text=${encodeURIComponent(
                      whatsappMessage
                    )}`
                  );
                }}
                className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 w-full"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
