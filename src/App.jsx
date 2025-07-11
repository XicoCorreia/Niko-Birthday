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
  <div className='header'>
    <img className="dinoleft" src="/dino.png" alt="Dino"></img>
    <h1>Niko's 23rd Birthday</h1> 
    <img className="dinoright" src="/dino.png" alt="Dino"></img>
  </div>
  <p> Hej! Welcome to Nikoline's 23rd birthday webpage, a page created by her boyfriend
      aka Xico.<br></br>
      So but what exactly is this? This is a way I found to make Niko's birthday week even more special. I have divided her gifts into 4 
      different days, and the 4 scratch cards below are related to each of the days! Each day will contain a theme and a hint for the gift 
      using one of our favorite things to do together, wordle. Also each card can only be open once we reach the day in question.<br></br>
      This is basically it so, goddag!
    </p> 
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
