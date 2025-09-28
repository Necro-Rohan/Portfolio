import React from 'react'
import './App.css'
import Navbar from './components/Navbar' 
// import hero_background from './assets/gridbackgroundimg.jpg'
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import About from './components/About';


function App() {

  return (
    <>
      <div className='App relative w-full min-h-screen bg-repeat-y bg-[url("./assets/backgroundImg.png")] bg-cover bg-center'>
        <Navbar />
        <div className="w-full mt-5 md:my-30 pt-10">
          <HeroSection />
        </div>
        <div className="w-full mt-10">
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App
