import React from 'react';

// this will be the input box component where the user will be able to input the date of the event,
// the time of the event, and the name of the event
// the values that the user inputs will be used to calculate the time left for the event
// and display it in the countdown timer component

const InputBox = ({ eventName, date, time, handleEventNameChange, handleDateChange, handleTimeChange }) => {
    return (
        <div className="input-box">
            <input type="text" placeholder="Event Name" value={eventName} onChange={handleEventNameChange} />
            <input type="date" value={date} onChange={handleDateChange} />
            <input type="time" value={time} onChange={handleTimeChange} />
        </div>
    )
}

export default InputBox;