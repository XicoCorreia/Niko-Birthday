import React, { useEffect, useState } from 'react';
import './Countdown.css'; // Import the CSS

const Countdown = () => {
  const targetDate = new Date('2025-07-19T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isTimeZero =
  (timeLeft.days ?? 0) === 0 &&
  (timeLeft.hours ?? 0) === 0 &&
  (timeLeft.minutes ?? 0) === 0 &&
  (timeLeft.seconds ?? 0) === 0;


  return (
    <div className="countdown-container">
      <h1 className="countdown-title">⏳ Countdown to Birthday</h1>
      <div className="countdown-values">
        {isTimeZero ? (
          <div className="birthday-message">
            🎉 <strong>HAPPY BIRTHDAY!</strong> 🎉
            <div className="confetti">🎊🎊🎊🎊🎊</div>
          </div>
        ) : (
          <p>
            {String(timeLeft.days ?? 0).padStart(2, '0')}:
            {String(timeLeft.hours ?? 0).padStart(2, '0')}:
            {String(timeLeft.minutes ?? 0).padStart(2, '0')}:
            {String(timeLeft.seconds ?? 0).padStart(2, '0')}
          </p>
        )}
      </div>
    </div>
  );
  

};

export default Countdown;
