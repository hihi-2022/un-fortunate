import React, { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'
import style from '../styles/Home.module.css'

function Home() {
  const tl = useRef()
  const el = useRef()
  const title = useRef()
  const table = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from('img', {
          duration: 1.5,
          opacity: 0,
          y: 50,
          ease: 'ease-in',
        })
        .to('img', {
          duration: 0.5,
          scale: 1,
          ease: 'back',
        })
        .from(
          title.current,
          {
            duration: 1,
            opacity: 0,
            y: -200,
            ease: 'power2',
          },
          '-=0.9'
        )
        .from(
          table.current,
          {
            duration: 1,
            y: 200,
            ease: 'power2',
          },
          '-=1'
        )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={el} className={style.fortune_room}>
      <div ref={title} className={style.title}>
        <h1>Un-Fortunate</h1>
      </div>
      <div className={style.teller}>
        <Tilt>
          <img src="/fortune-teller.jpeg" alt="fortune teller" />
        </Tilt>
      </div>
      <div ref={table} className={style.options}>
        <Link to="/">
          <img src="/images/icons/8ball.png" alt="8 ball" />
        </Link>
        <Link to="/fortune-cookie">
          <img src="/images/icons/tarots.png" alt="tarot card" />
        </Link>
        <Link to="/fortune-cookie">
          <img src="/images/icons/cookie.png" alt="fortune cookie" />
        </Link>
      </div>
    </div>
  )
}
export default Home
