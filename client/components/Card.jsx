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

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={style.fortune_room}>
      <div className={style.tarot_cards}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className={style.tarot_1}>
              <Tilt>
                <img src={randomImg} alt="fortune teller" />
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
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <button onClick={handleClick}>
          <div className={style.tarot_1}>
            <Tilt>
              <img src="/fortune-teller.jpeg" alt="fortune teller" />
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
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <button onClick={handleClick}>
          <div className={style.tarot_1}>
            <Tilt>
              <img src="/fortune-teller.jpeg" alt="fortune teller" />
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
      </ReactCardFlip> */}
      </div>
    </div>
  )
}

export default Card
