import { useState } from 'react';
import '../style/calendar.css';

function Calendar() {
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { date, eventType, location, eventName }]);
    setDate('');
    setEventType('');
    setLocation('');
    setEventName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} placeholder="Pasākuma veids" required />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Vieta" required />
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Pasākuma nosaukums" required />
        <button type="submit">Pievienot pasākumu</button>
      </form>
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <h4>{event.date}</h4>
            <p>{event.eventType}: {event.eventName}</p>
            <p>Vieta: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
