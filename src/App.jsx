import { useState } from 'react'
import './css/App.css'
import Event from './components/Event'
import InputBox from './components/InputBox'

const App = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [events, setEvents] = useState([]);

  const handleSubmit = () => {
    // Combine date and time into a single string
    const dateTime = `${date}T${time}`;

    // Create a new event
    const event = {
      eventName,
      targetDate: dateTime,
    };

    // Add the new event to the events array
    const newEvents = [...events, event];
    setEvents(newEvents);

    // Save the events array to local storage
    localStorage.setItem('events', JSON.stringify(newEvents));

    // Clear the input fields
    setEventName('');
    setDate('');
    setTime('');
  };

  const handleRemove = index => {
    const confirmDeletion = window.confirm('Are you sure you want to delete this event?');
    if (!confirmDeletion) {
      return;
    }
    const newEvents = events.filter((event, i) => i !== index);
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const handleUpdate = (updatedEvent, index) => {
    // Create a new array with the updated event
    const newEvents = events.map((event, i) => i === index ? updatedEvent : event);
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const sortEvents = (events) => {
    return events.sort((a, b) => new Date(a.targetDate) - new Date(b.targetDate));
  };

  const sortedEvents = sortEvents(events);

  const isValid = eventName !== '' && date !== '' && time !== '';

  return (
    <div>
      <h1>Event Creator</h1>
      <p>Create an event and see the countdown!</p>
      <div className="input-container">
        <InputBox
          className="input-box"
          eventName={eventName}
          date={date}
          time={time}
          handleEventNameChange={e => setEventName(e.target.value)}
          handleDateChange={e => setDate(e.target.value)}
          handleTimeChange={e => setTime(e.target.value)}
        />
        <button className={!isValid ? "disabled" : "button-64"} role="button" onClick={handleSubmit} disabled={!isValid}><span className="text">Add Event</span></button>
      </div>

      <div className="event-container">
        {sortedEvents.map((event, index) => (
          <Event
            key={index}
            eventName={event.eventName}
            targetDate={event.targetDate}
            onRemove={() => handleRemove(index)}
            onUpdate={(updatedEvent) => handleUpdate(updatedEvent, index)}
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default App;