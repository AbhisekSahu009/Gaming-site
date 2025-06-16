import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from "./Components/Header/Header.jsx";
import Service from "./Components/Services/Service.jsx";

function App() {

  return (
    <>
     <Nav/>
        <Header/>
        <Service/>
    </>
  )
}

export default App
