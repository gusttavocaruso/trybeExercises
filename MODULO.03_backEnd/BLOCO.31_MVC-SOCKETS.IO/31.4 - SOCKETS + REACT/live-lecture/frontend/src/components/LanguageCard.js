import React, { useState, useEffect } from 'react';
import socket from '../utils/socketClient';

import { Card, Button } from 'react-bootstrap';

function LanguageCard({ index, id, name, image, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  useEffect(() => {
    socket.on('refreshCurrentVotes', (language) => {
      if (language._id === id) setCurrentVotes(language.votes);
    })
  }, []);
  
  const handleClick = () => {
    socket.emit('increaseVotes', { id, name} );
  }

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Votos: <span data-testid={`current-votes-${index}`}>{currentVotes}</span>  
        </Card.Text>
        <Button onClick={handleClick} data-testid={`vote-participant-${index}`}>Votar</Button>
      </Card.Body>
    </Card>
  );
}

export default LanguageCard;