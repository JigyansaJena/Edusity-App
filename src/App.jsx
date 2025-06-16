import './App.css'
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/navBar/navBar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/title/Title';
import { useState } from 'react';

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <NavBar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Program' title='What We Offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What Student says'/>
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App;