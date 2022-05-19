import React from 'react'

function Result({length,score, reset}) {
  return (
    <div className="result-Container">
          <div className='img' >
          </div>
        <div className='score'>
              <h3>You have answered {score} out of {length-1} answers correctly</h3>
        </div>
        <button className='reset' onClick={reset}>Start Again</button>
    </div>
  )
}

export default Result