import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FortuneCookie from './FortuneCookie'

import Home from './Home'

function App() {
  return (
    <>
      <h1>Un-fortunate</h1>
      <p>A series of D: events</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortune-cookie" element={<FortuneCookie />} />
      </Routes>
    </>
  )
}

export default App
