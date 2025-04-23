import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Pastes from './components/Pastes'
import Viewpaste from './components/Viewpaste'

function App() {
 

  return (
 <div>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/pastes' element={<Pastes/>} />
    <Route path="/?Viewpaste/:id" element={<Viewpaste />} />
    <Route path='/?pasteId=' element={<Home/>} />
  </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
