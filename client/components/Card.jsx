import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Tilt from 'react-parallax-tilt'
import style from '../styles/Card.module.css'
import cards from '../../server/public/data/Cards.js'

function Card() {
  // Ramdomiser
  const randomizer = Math.floor(Math.random() * 11)
  const randomImg = '/images/tarot-cards/' + cards[randomizer].image
  const randomText = cards[randomizer].text

  const [isFlipped, setIsFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
  })

  const handleClick = (e) => {
    const targetID = e.target.id
    setIsFlipped((prevState) => {
      return { ...prevState, [targetID]: !prevState[targetID] }
    })
  }

  return (
    <div className={style.fortune_room}>
      <div className={style.tarot_cards}>
        <ReactCardFlip isFlipped={isFlipped.card1} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img id="card1" src={randomImg} alt="fortune teller" />
              </Tilt>
            </div>
          </button>

          <button>
            <div className={style.tarot_1}>
              <Tilt>
                <img
                  src="/images/tarot-cards/Plain_card.png"
                  alt="your fortune"
                />
                <p className={style.tarot_text}>{randomText}</p>
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped.card2} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img
                  id="card2"
                  src="/fortune-teller.jpeg"
                  alt="fortune teller"
                />
              </Tilt>
            </div>
          </button>

          <button>
            <div className={style.tarot_1}>
              <Tilt>
                <img src="/images/tarot-cards/Libra.png" alt="your fortune" />
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped.card3} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img
                  id="card3"
                  src="/fortune-teller.jpeg"
                  alt="fortune teller"
                />
              </Tilt>
            </div>
          </button>

          <button>
            <div className={style.tarot_1}>
              <Tilt>
                <img src="/images/tarot-cards/Libra.png" alt="your fortune" />
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
      </div>
    </div>
  )
}

export default Card
