import React from 'react'

function Header({time}) {
  return (
    <div className='header'>
          <h1>QuizBee</h1>
          <div className='timeContainer'>Time left : <span className='timer'>
            {time>= 0 ? time : "0"}</span></div>
    </div>
  )
}

export default Header