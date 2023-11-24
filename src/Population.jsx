import React from 'react'
import MatrixTable from './MatrixTable'
import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
const Population = (props) => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const[linesM, setLines] = useState(0);
  const[columnsM, setColumns] = useState(0);
  const [rangeStart, setRagngeStart] = useState(-2);
  const [rangeEnd, setRangeEnd] = useState(2);
  const [popMatrix, setPopMatrix] = useState(props.matrix);
  const [values, setValues] = useState(props.values);
  const generate = () =>{
    
      const fetchMatrix = async () => {
        try {
          
          const result = await invoke('create_pop_matrix', {height: parseInt(props.lines), width: parseInt(props.columns)});
          const result2 = await invoke('calculate_values', {pop: result , start: parseInt(props.start), end: parseInt(props.end)});
          setPopMatrix(result);
          props.function1(result);
          setValues(result2);
          props.function2(result2);
        } catch (error) {
          console.error('Error fetching matrix:', error);
        }
      };

      const fetchValues = async () => {
        try {
          
          const result = await invoke('calculate_values', {pop: popMatrix , start: parseInt(props.start), end: parseInt(props.end)});
          setValues(result);
          props.function2(result);
        } catch (error) {
          console.error('Error fetching results:', error);
        }
      };
  
      fetchMatrix();
      //fetchValues();
      
  
      
    
  }

  
  return (
    <div>
      Matrix
      <MatrixTable matrix={popMatrix} values={values}/>
      <button onClick={generate}>Generate new population</button>
    </div>
  )
}

export default Population