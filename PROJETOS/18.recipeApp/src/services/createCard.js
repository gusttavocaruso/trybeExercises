import React from 'react';
import Card from '../components/Card';

export default function createCard(array = [], tipo) {
  const twelve = 12;
  if (array) {
    const twelveFirst = array.slice(0, twelve);

    return (
      <div>
        {twelveFirst.map((alimento, index) => (
          <Card tipo={ tipo } key={ index } chave={ index } alimento={ alimento } />
        ))}
      </div>
    );
  }
}
