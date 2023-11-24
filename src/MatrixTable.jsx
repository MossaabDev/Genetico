import React, { useState } from 'react'
import "./styles.css";

const MatrixTable = ({matrix, values}) => {
    const[popMatrix, setPopMatrix] = useState(matrix);
    const[popValues, setPopValues] = useState(values);
    
  return (
    <table>
        <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td>Solution {rowIndex}</td>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex}>{cell}</td>
                    ))}
                    <td>{values[rowIndex]}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default MatrixTable