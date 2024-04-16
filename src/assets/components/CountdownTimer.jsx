import React, { useState, useEffect } from 'react';
import './style.css';

const calculateTimeLeft = (countdownTarget) => {
  const totalTimeLeft = countdownTarget - new Date();
  if (totalTimeLeft < 0) {
    return null;
  }
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return [{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }];
}

const CountdownTimer = ({ targetDate }) => {
  const countdownTarget = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(countdownTarget));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countdownTarget));
    }, 1000)

    return () => clearInterval(timer);
  }, [countdownTarget]);

  if (!timeLeft) {
    return <p>The event has passed</p>;
  }

  return (
    <div className="countdown">
      <h3>Time Remaining</h3>
      <div className="content">
        {timeLeft.map(item => (
          <div className="box" key={item.label}>
            <div className="value">
              <span>{item.value}</span>
            </div>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer;