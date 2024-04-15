import React from 'react';

// this will be the input box component where the user will be able to input the date of the event,
// the time of the event, and the name of the event
// the values that the user inputs will be used to calculate the time left for the event
// and display it in the countdown timer component

const InputBox = () => {
    return (
        <div className="input-box">
            <input type="text" placeholder="Event Name" />
            <input type="date" />
            <input type="time" />
        </div>
    )
}

export default InputBox;