import React from 'react'
import { useState } from 'react'
const Range = (props) => {
  const [startingPoint, setStartingPoint] = useState(props.start);
  const [endingPoint, setEndingPoint] = useState(props.end);
  const handleStartChange = (e) =>{
    setStartingPoint(e.target.value);
    props.function1(e.target.value);
  }

  const handleEndChange = (e) =>{
    setEndingPoint(e.target.value);
    props.function2(e.target.value);
  }
  return (
    <div className='initInfo'>
        <h3>Choose a range:</h3>
        From:
        <input type="number" id='start' value={startingPoint} onChange={handleStartChange}/>
        To:
        <input type="number" id='end' value={endingPoint} onChange={handleEndChange}/>
    </div>
  )
}

export default Range