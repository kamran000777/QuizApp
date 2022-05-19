import React from 'react'

function Footer({count,length,questionHandler}) {
  return (
    <div className='footer'>
          <div className='record'>
          <span className='count'>{count}</span><span> of {length-1} Questions</span>
          </div>
     <button onClick={questionHandler}>Next Que.</button>
    </div>
  )
}

export default Footer