import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import Tilt from 'react-parallax-tilt'
import style from '../styles/Card.module.css'
import cards from '../../server/public/data/Cards.js'

function Card() {
  // Ramdomiser
  function randomizerer() {
    const randomizer = Math.floor(Math.random() * 11)
    const randomImg = '/images/tarot-cards/' + cards[randomizer].image
    const randomText = cards[randomizer].text
    const randomItems = []
    randomItems.push(randomImg, randomText)
    return randomItems
  }

  const [isFlipped, setIsFlipped] = useState({
    card1: false,
    val1: randomizerer(),
    card2: false,
    val2: randomizerer(),
    card3: false,
    val3: randomizerer(),
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
                <img id="card1" src={isFlipped.val1[0]} alt="fortune teller" />
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
                <p className={style.tarot_text}>{isFlipped.val1[1]}</p>
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped.card2} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img id="card2" src={isFlipped.val2[0]} alt="fortune teller" />
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
                <p className={style.tarot_text}>{isFlipped.val2[1]}</p>
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped.card3} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img id="card3" src={isFlipped.val3[0]} alt="fortune teller" />
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
                <p className={style.tarot_text}>{isFlipped.val3[1]}</p>
              </Tilt>
            </div>
          </button>
        </ReactCardFlip>
      </div>
    </div>
  )
}

export default Card
