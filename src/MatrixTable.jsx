import React from 'react'

const MatrixTable = ({matrix}) => {
  return (
    <table>
        <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
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