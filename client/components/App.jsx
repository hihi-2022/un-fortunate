import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FortuneCookie from './FortuneCookie'
import Ball from './8Ball'
import Home from './Home'
import Card from './Card'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortune-cookie" element={<FortuneCookie />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
