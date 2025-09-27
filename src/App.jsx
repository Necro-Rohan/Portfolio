import React from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import hero_background from './assets/hero_background.png'

function App() {

  return (
    <>
      <div className="App">
        <img
          src={hero_background}
          alt="Logo"
          className=" absolute w-full h-[60vh] md:h-[80vh] lg:h-screen inset-0  object-cover md:object-cover"
        />
        <Navbar />
      </div>
    </>
  );
}

export default App
