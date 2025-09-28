import React from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';


function App() {

  return (
    <>
      <div className='App relative w-full min-h-screen  bg-[url("./assets/backgroundImg.png")] bg-center bg-fixed bg-cover'>
        <Navbar />
        <div className="w-full mt-5 md:my-30 pt-10">
          <HeroSection />
        </div>
        <div className="w-full mt-10">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App
