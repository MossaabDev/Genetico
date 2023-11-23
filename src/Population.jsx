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
  const [popMatrix, setPopMatrix] = useState([]);
  /*
  
  async function createTable(){
    setPopMatrix(await invoke("create_pop_matrix", { lines, columns}))
  }
  createTable();
  alert(popMatrix);
  */
  const [matrixDetail, setMatrixSize] = useState({ height: linesM, width: columnsM});
  useEffect(() => {
    const fetchMatrix = async () => {
      try {
        
        const result = await invoke('create_pop_matrix', {height: parseInt(props.lines), width: parseInt(props.columns)});
        setPopMatrix(result);
      } catch (error) {
        console.error('Error fetching matrix:', error);
      }
    };

    fetchMatrix();
  }, []);

  
  return (
    <div>
      Matrix
      <MatrixTable matrix={popMatrix}/>
    </div>
  )
}

export default Population