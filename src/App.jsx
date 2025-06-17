import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from "./Components/Header/Header.jsx";
import Service from "./Components/Services/Service.jsx";
import Marquee from "./Components/Marquee/Marquee.jsx";
import GameCards from "./Components/GameCards/GameCards.jsx";
import VideoBg from "./Components/VideoBg/VideoBg.jsx";
import Mission from "./Components/Mission/Mission.jsx";
import Team from "./Components/Team/Team.jsx";
import Works from "./Components/Works/Works.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Insta from "./Components/Insta/Insta.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

  return (
    <>
     <Nav/>
        <Header/>
        <Service/>
        <Marquee/>
        <GameCards/>
        <VideoBg/>
        <Mission/>
        <Team/>
        <Works/>
        <Testimonial/>
        <Contact/>
        <Insta/>
        <Footer/>
    </>
  )
}

export default App
