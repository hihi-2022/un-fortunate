import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import TiltDemo from './TiltDemo'

function App() {
  return (
    <>
      {/* <h1>Un-fortunate</h1>
      <p>A series of D: events</p> */}

      <TiltDemo />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </>
  )
}

export default App
