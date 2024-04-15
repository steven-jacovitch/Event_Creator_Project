import { useState } from 'react'
import './App.css'
import CountdownTimer from './assets/components/CountdownTimer'
import InputBox from './assets/components/InputBox'

const App = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [targetDate, setTargetDate] = useState(null);

  const handleSubmit = () => {
    // Combine date and time into a single string
    const dateTime = `${date}T${time}`;
    setTargetDate(dateTime);
  };

  return (
    <div>
      <InputBox
        eventName={eventName}
        date={date}
        time={time}
        handleEventNameChange={e => setEventName(e.target.value)}
        handleDateChange={e => setDate(e.target.value)}
        handleTimeChange={e => setTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {targetDate && <CountdownTimer targetDate={targetDate} />}
    </div>
  );
};

export default App;
