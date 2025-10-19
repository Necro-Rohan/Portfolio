import React, {useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='App relative w-full min-h-screen bg-[url("./assets/backgroundImg.png")] bg-center bg-fixed bg-cover'>
        <Navbar />
        <div className="w-full mt-5 md:my-32 pt-10">
          <HeroSection />
        </div>
        <div className="w-full mt-10">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
