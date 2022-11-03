import React from 'react'
import Tilt from 'react-parallax-tilt'
import style from '../styles/Home.module.css'

function Home() {
  return (
    <div className={style.fortune_room}>
      <div className={style.teller}>
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
    </div>
  )
}
export default Home
