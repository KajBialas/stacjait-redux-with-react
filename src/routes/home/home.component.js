import React, { useState } from 'react';

function Home() {
  const [counter, setCoutner] = useState(0);

  const handleIncrement = () => setCoutner(prevState => prevState + 1);
  const handleDecrement = () => setCoutner(prevState => prevState - 1);
  const handleReset = () => setCoutner(0);
  return (
    <div>
      <div>
        Current count: {counter}
      </div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}

export default Home;