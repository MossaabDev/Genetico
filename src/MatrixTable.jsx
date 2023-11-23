import React from 'react'
import "./styles.css";

const MatrixTable = ({matrix}) => {
  return (
    <table>
        <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td>Solution {rowIndex}</td>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex}>{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default MatrixTable