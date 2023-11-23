import React from 'react'

const Range = () => {
  return (
    <div className='initInfo'>
        <h3>Choose a range:</h3>
        From:
        <input type="number" id='start'/>
        To:
        <input type="number" id='end'/>
    </div>
  )
}

export default Range