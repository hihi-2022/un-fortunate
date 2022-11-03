import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Card from './Card'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
