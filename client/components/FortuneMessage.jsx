import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

import style from '../styles/FortuneMessage.module.css'

function FortuneMessage({ fortune }) {
  return (
    <div className={style.message}>
      <p>{fortune.message}</p>
    </div>
  )
}

export default FortuneMessage
// const tl = useRef()
// const el = useRef()
// const message = useRef()

// useLayoutEffect(() => {
//   const ctx = gsap.context(() => {
//     tl.current = gsap.timeline().from(message.current, {
//       rotation: '+=360',
//       ease: 'ease-in',
//     })
//   }, el)

//   return () => ctx.revert()
// }, [])

// const onClick = () => {
//   const ctx = gsap.context(() => {
//     tl.current = gsap.timeline().from(message.current, {
//       rotation: '+=360',
//       ease: 'ease-in',
//     })
//   }, el)

//   return () => ctx.revert()
// }
