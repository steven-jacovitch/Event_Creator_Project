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
  // Convert the target date to a Date object
  const countdownTarget = new Date(targetDate);

  // Initialize the timeLeft state with the amount of time left until the target date
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(countdownTarget));

  // Use an effect to update the timeLeft state every second
  useEffect(() => {
    // Create a timer that updates the timeLeft state every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countdownTarget));
    }, 1000)

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [countdownTarget]); // Only re-run the effect if the countdownTarget changes

  // If there's no time left, display a message that the event has passed
  if (!timeLeft) {
    return <p>The event has passed</p>;
  }

  return (
    <div className="countdown">
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