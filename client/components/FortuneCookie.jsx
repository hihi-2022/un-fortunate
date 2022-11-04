import React, { useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'

import style from '../styles/FortuneCookie.module.css'
import FortuneMessage from './FortuneMessage'

import data from '../../cookie-messages'

function FortuneCookie() {
  const randomMessage = () => {
    const randomNumber = Math.floor(Math.random() * 15) + 1
    const fortune = data.find((element) => element.id == randomNumber)
    return fortune
  }

  const [fortune, setFortune] = useState({ message: '' })

  const tl = useRef()
  const el = useRef()
  const cookie = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from(cookie.current, {
        rotation: '+=360',
        ease: 'ease-in',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  const onClick = () => {
    const fortune = randomMessage()
    console.log(fortune)
    setFortune(fortune)

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from(cookie.current, {
        rotation: '+=360',
        ease: 'ease-in',
      })
    }, el)

    return () => ctx.revert()
  }

  return (
    <div ref={el} className={style.fortuneBackground}>
      <h1 className={style.fortuneHeading}>Fortune Cookie</h1>
      <h2 className={style.fortuneHeading2}> おみくじ入りクッキ</h2>
      <div ref={cookie} className={style.fortuneCookie} onClick={onClick}>
        <img src="/images/fortune-cookie/1fortune.png" alt="fortune cookie" />
        <FortuneMessage fortune={fortune} />
      </div>
    </div>
  )
}

export default FortuneCookie
