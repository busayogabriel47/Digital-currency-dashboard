import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import Headertwo from './Components/Headertwo'
import Main from './Components/Main'

import { Routes, Route } from 'react-router-dom'
import Markets from './Pages/Markets'
import Wallets from './Pages/Wallets/Index'
import Profile from './Pages/Profile'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header/>
      <Headertwo/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/markets' element={<Markets/>}/>
          <Route path='/wallet' element={<Wallets/>}/>
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
