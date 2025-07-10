import React from 'react';
import './ScratchCard.css';

const ScratchCard = ({ day, theme, hint, isBlurred, onClick }) => {
  return (
    <div
      className={`scratch-card ${isBlurred ? 'blurred' : ''}`}
      onClick={onClick}
    >
      <div className="scratch-card-header">Day {day}</div>
      <div className="scratch-card-body">
        <p><strong>Theme:</strong> {theme}</p>
        <p><strong>Hint:</strong> {hint}</p>
      </div>
    </div>
  );
};

export default ScratchCard;
