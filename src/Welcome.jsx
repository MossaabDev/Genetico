import React from 'react'
import "./App.css";
import Nav from './Nav';
import { useState } from 'react';
function Welcome(props) {
  
  const [popLength, setPopLength] = useState(props.value1);
  const [geneLength, setGeneLength] = useState(props.value2);
  // Event handler for input changes
  const handlePopLengthChange = (e) => {
    setPopLength(e.target.value);
    props.function1(e.target.value);
  };

  const handleGeneLengthChange = (e) => {
    setGeneLength(e.target.value);
    props.function2(e.target.value);
  };


  

  return (
    <div className="initInfo">
      <h1 className="welcome">Welcome to Algo Evo</h1>
      Enter the length of the population: <input type="number" id="popLength" value={popLength} onChange={handlePopLengthChange}/>
      Enter the length of the individual: <input type="number" id="" value={geneLength} onChange={handleGeneLengthChange}/>
    </div>
  );
}

export default Welcome