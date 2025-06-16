import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from "./Components/Header/Header.jsx";
import Service from "./Components/Services/Service.jsx";
import Marquee from "./Components/Marquee/Marquee.jsx";
import GameCards from "./Components/GameCards/GameCards.jsx";

function App() {

  return (
    <>
     <Nav/>
        <Header/>
        <Service/>
        <Marquee/>
        <GameCards/>
    </>
  )
}

export default App
