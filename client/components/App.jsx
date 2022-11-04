import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FortuneCookie from './FortuneCookie'
import Ball from './8Ball'
import Home from './Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortune-cookie" element={<FortuneCookie />} />
        <Route path="/8Ball" element={<Ball />} />
      </Routes>
    </>
  )
}

export default App
