import React, { useState, useEffect } from 'react';
import socket from '../utils/socketClient';

function SquareCard({ x, y }) {
  const [xPosition, setXPosition] = useState(x);
  const [yPosition, setYPosition] = useState(y);

  useEffect(() => {
    socket.on('refreshNewPosition', ({ x, y }) => {
      setXPosition(x);
      setYPosition(y);
    })
    }, []);
  
  const handleClick = () => {
    socket.emit('radomNewPosition');
  }

  return (
    <div style={ { "display": "flex" } }>

      <div
        style={ { 
          "display": "flex",
          "backgroundColor": "darksalmon",
          "width": "200px",
          "height": "50rem",
          "margin": "8px",
          "justifyContent": "center",
          "paddingTop": "100px",
          "fontWeight": "bolder",
          "border": "2px solid"
        } }
      >
        Clique no quadrado
      </div>

      <button
        onClick={ () => handleClick() }
        style={ {
          "width": "150px",
          "height": "150px",
          "marginLeft": `${xPosition}px`,
          "marginTop": `${yPosition}px`,
          "backgroundColor": "indianred"
        } }
      />

    </div>
  );
}

export default SquareCard;