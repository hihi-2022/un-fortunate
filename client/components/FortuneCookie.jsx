import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

import style from '../styles/FortuneCookie.module.css'
import FortuneMessage from './FortuneMessage'

function FortuneCookie() {
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
      <div ref={cookie} className={style.fortuneCookie} onClick={onClick}>
        <img src="/images/fortune-cookie/1fortune.png" alt="fortune cookie" />
        <FortuneMessage />
      </div>
    </div>
  )
}

export default FortuneCookie
