import React from 'react';
import CountdownTimer from './CountdownTimer';

// this component will be used to display the event name and the countdown timer as well as a button to remove the event

const Event = ({ eventName, targetDate, onRemove }) => {
    return (
        <div className="event">
            <h2>{eventName}</h2>
            <CountdownTimer targetDate={targetDate} />
            <div className="button-container">
                <button className="button-64" role="button" onClick={onRemove}><span className="text">Remove Event</span></button>
            </div>
        </div>
    )
}

export default Event;