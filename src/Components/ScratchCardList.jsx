import React from 'react';
import ScratchCard from './ScratchCard';
import './ScratchCardList.css';

const ScratchCardList = () => {
  return (
    <div className="scratch-card-list">
      <ScratchCard day="1" theme="1" hint="1" />
      <ScratchCard day="2" theme="2" hint="2" />
      <ScratchCard day="3" theme="3" hint="3" />
      <ScratchCard day="4" theme="4" hint="4" />
    </div>
  );
};

export default ScratchCardList;
