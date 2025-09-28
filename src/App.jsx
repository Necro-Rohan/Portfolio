import React from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import hero_background from './assets/Hero_vid.mp4'
import HeroSection from './components/HeroSection';

function App() {

  return (
    <>
      <div className="App relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] scale-[1.25]"
        >
          <source src={hero_background} type="video/mp4" />
        </video>

        {/* Content */}
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App
