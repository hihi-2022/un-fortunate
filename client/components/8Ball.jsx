import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import style from '../styles/8Ball.module.css'
import response from '../../server/public/data/8Ball.js'




 

export default function Ball() {
  const rn9 = Math.floor(Math.random() * 10)
  const [textRes, setButtonText] = useState('What puzzles you today?');
  console.log(rn9)
  
  const textarea = document.getElementById('message')



  function handleClick() {
    if(response[rn9].response === textRes){
      setButtonText('Who... asked?')
      textarea.value = ''
      
    }
    else{
    setButtonText(response[rn9].response);
    textarea.value = ''
    
    }

  }

  return (
    
    <div className={style.bg}>
    <div >
      <Tilt>
      <img className={style.ball} src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6XegNthXY-N3dq2_gmkrW_OzHn1rMQnRwXjIvy-rUTNA3pEmWfyh3WbDYH_-vwjALG1urRsje5UH23xisb6DXrvzpNuOMMQvQVbf3WGAsQoaNMxxVPgT4Sw&usqp=CAE' alt='8ball' />
      </Tilt>
      <img className={style.landingball} src='images/8ballmon.jpeg' alt='magic 8 ball' />
    </div>

    <div className={style.questionres}>

      <p className={style.onTop}>{textRes}</p>
    </div>
    
    <div className={style.questionbox}>
      <textarea id='message' rows="5" cols="50" placeholder="What's on your mind?"/> <br/>

      <button  className={style.button} type="submit" onClick={handleClick}> Oh magic 8-Ball! </button>
      
    </div>
    

    </div>
  )
}