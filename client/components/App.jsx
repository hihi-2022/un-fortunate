import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'

function App() {
  return (
    <>

      <h1>Un-fortunate</h1>
      <p>A series of D: events</p>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    </>
  )
}

export default App
