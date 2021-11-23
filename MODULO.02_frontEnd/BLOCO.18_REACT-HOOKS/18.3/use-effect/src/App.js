import './App.css';
import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRandom = () => {
    const randomNumb = Math.trunc(Math.random() * 100);
    setRandomNumber(randomNumb);
    console.log('whata fck?')
  }

  setInterval(handleRandom, 5000);

  return (
    <div className="something">
      { randomNumber } <br />
      <button>DONT WORK</button>
    </div>
  );
}

export default App;
