import React from 'react';
import CountdownTimer from './CountdownTimer';

const Event = ({ eventName, targetDate, onRemove }) => {
  return (
    <div className="event">
      <h2>Time remaining until {eventName}!</h2>
      <CountdownTimer targetDate={targetDate} />
      <div className="event-buttons">
        <button className="button-64" role="button" onClick={onRemove}>
          <div className="button-text">
            <span className="text">Remove Event</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Event;