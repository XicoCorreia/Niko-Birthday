import Countdown from './Components/Countdown'
import './App.css'
import ScratchCardList from './Components/ScratchCardList';
import React, { useState } from 'react';


function App() {
  const [revealedCards, setRevealedCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const revealCard = (day) => {
    setRevealedCards((prev) => ({ ...prev, [day]: true }));
  };

  return ( <>
  <div>
    <h1>🥳Niko's 23rd Birthday🥳</h1>
  </div>
  
    <div >
      <Countdown />
    </div>
    <div>
    <ScratchCardList
        revealed={revealedCards}
        onReveal={revealCard}
      />
    </div>
  </>
  );
}

export default App
