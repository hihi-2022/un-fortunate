import React from 'react'
import Tilt from 'react-parallax-tilt'
import style from '../styles/Card.module.css'

function Card() {
  return (
    <div className={style.tarot_cards}>
      <div className={style.tarot_1}>
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
      <div className={style.tarot_1}>
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
      <div className={style.tarot_1}>
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
    </div>
  )
}

export default Card
