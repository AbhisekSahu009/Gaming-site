import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from "./Components/Header/Header.jsx";
import Service from "./Components/Services/Service.jsx";
import Marquee from "./Components/Marquee/Marquee.jsx";
import GameCards from "./Components/GameCards/GameCards.jsx";
import VideoBg from "./Components/VideoBg/VideoBg.jsx";
import Mission from "./Components/Mission/Mission.jsx";

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
    </>
  )
}

export default App
