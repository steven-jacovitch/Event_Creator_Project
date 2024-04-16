import React from 'react';
import CountdownTimer from './CountdownTimer';

// this component will be used to display the event name and the countdown timer

const Event = ({ eventName, targetDate }) => {
    return (
        <div className="event">
            <h2>{eventName}</h2>
            <CountdownTimer targetDate={targetDate} />
            <button>Remove Event</button>
        </div>
    )
}

export default Event;