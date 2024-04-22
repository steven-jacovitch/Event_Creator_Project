import React, { useState } from 'react';

const EventEdit = ({ event, onSave }) => {
    const [eventName, setEventName] = useState(event.eventName);
    const [targetDate, setTargetDate] = useState(event.targetDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...event,
            eventName,
            targetDate,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                Event Name:
                <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </label>
            <label>
                Target Date:
                <input type="datetime-local" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
            </label>
            <button className="button-64" type="submit">
                <div className="button-text">
                    <span className="text">Save Changes</span>
                </div>
            </button>
        </form>
    );
};

export default EventEdit;