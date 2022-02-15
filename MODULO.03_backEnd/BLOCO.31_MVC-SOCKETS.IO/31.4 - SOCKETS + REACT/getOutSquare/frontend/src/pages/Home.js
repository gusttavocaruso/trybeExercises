import React, { useEffect, useState } from 'react';
import SquareCard from '../components/squareCard';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [xyPositions, setXYPositions] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/square')
      .then((response) => response.json())
      .then((positions) => {
        setIsLoading(false);
        setXYPositions(positions);
      });
    }, []);

  return (
    <div>
      { isLoading ? <p>Loading</p> : (
        <>
          <SquareCard squarePosition={xyPositions} />
        </>
      )}
    </div>
  );
}

export default Home;
