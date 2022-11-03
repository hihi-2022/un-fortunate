import React from 'react'
import Tilt from 'react-parallax-tilt'

function Home() {
  return (
    <div className="fortune-room">
      <div className="teller">
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
    </div>
  )
}
export default Home
