import React from 'react';
import ScratchCard from './ScratchCard';
import './ScratchCardList.css';


const ScratchCardList = ({ revealed, onReveal }) => {
  const cardData = {
    day1: { day: 1, date: "2025-07-16", theme: "Your beauty. 💆🏻‍♀️", hint: "https://mywordle.strivemath.com/?word=both" },
    day2: { day: 2, date: "2025-07-17", theme: "How I fell for you. 🥰", hint: "https://mywordle.strivemath.com/?word=jsigd" },
    day3: { day: 3, date: "2025-07-18", theme: "I am the luckiest men in the world!🍀", hint: "https://mywordle.strivemath.com/?word=nieqpv" },
    day4: { day: 4, date: "2025-07-19", theme: "The future! 💫", hint: "https://mywordle.strivemath.com/?word=swwhj" },
  };

  const today = new Date();
  
  return (
    <div className="scratch-card-list">
      {Object.entries(cardData).map(([key, data]) => {
        const cardDate = new Date(data.date);
        const canReveal = today >= cardDate;

        return (
          <ScratchCard
            key={data.date}
            {...data}
            isBlurred={!revealed[data.date]}
            onClick={canReveal ? () => onReveal(data.date) : undefined}
          />
        );
      })}
    </div>
  );
};

export default ScratchCardList;

