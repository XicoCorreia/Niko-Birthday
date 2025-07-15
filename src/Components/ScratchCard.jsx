import React from 'react';
import './ScratchCard.css';

const ScratchCard = ({ day, date, theme, hint, isBlurred, onClick }) => {
  return (
    <div
      className={`scratch-card ${isBlurred ? 'blurred' : ''}`}
      onClick={onClick}
    >
      <div className="scratch-card-header"><strong>Day {day} </strong>- {new Intl.DateTimeFormat("en-GB").format(new Date(date))}</div>
      <div className="scratch-card-body">
        <p><strong>Theme:</strong> {theme}</p>
        <a href={hint} target="_blank" rel="noopener noreferrer"> Hint of the day</a>
      </div>
    </div>
  );
};

export default ScratchCard;
