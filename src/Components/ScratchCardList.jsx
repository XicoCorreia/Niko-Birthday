import React from 'react';
import ScratchCard from './ScratchCard';
import './ScratchCardList.css';

const ScratchCardList = () => {
  const cardData = {
    day1: {
      day:"1",
      theme:"1", 
      hint:"1"
    },
    day2: {
      day:"2",
      theme:"2", 
      hint:"2"
    },
    day3: {
      day:"3",
      theme:"3", 
      hint:"3"
    },
    day4: {
      day:"4",
      theme:"4", 
      hint:"4"
    }
  }
  return (
    <div className="scratch-card-list">
      <ScratchCard {...cardData.day1} />
      <ScratchCard {...cardData.day2} />
      <ScratchCard {...cardData.day3} />
      <ScratchCard {...cardData.day4} />
    </div>
  );
};

export default ScratchCardList;
