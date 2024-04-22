import React, { useState } from 'react';
import EventEdit from './EventEdit';
import CountdownTimer from './CountdownTimer';

const Event = ({ event, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedEvent) => {
    // Update the event in the parent component
    onUpdate(updatedEvent);
    // Exit the editing mode
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="event">
        <h2>Time remaining until {event.eventName}!</h2>
        <CountdownTimer targetDate={event.targetDate} />
        <EventEdit event={event} onSave={handleSave} />
      </div>
    );
  }

  return (
    <div className="event">
      <h2>Time remaining until {event.eventName}!</h2>
      <CountdownTimer targetDate={event.targetDate} />
      <div className="event-buttons">
        <button className="button-64" role="button" onClick={() => onRemove(event)}>
          <div className="button-text">
            <span className="text">Remove Event</span>
          </div>
        </button>
        <button className="button-64" role="button" onClick={() => setIsEditing(true)}>
          <div className="button-text">
            <span className="text">Make Changes</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Event;