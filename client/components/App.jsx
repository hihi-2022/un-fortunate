import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FortuneCookie from './FortuneCookie'

import Home from './Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortune-cookie" element={<FortuneCookie />} />
      </Routes>
    </>
  )
}

export default App
