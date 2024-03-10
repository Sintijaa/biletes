import React from 'react';
import '../style/calendar.css';

const Event = ({ event }) => (
  <div className="event">
    <h2 className="event-title">{event.name}</h2>
    <p className="event-date">{event.date}</p>
    <p className="event-location">{event.location}</p>
    <a href={event.ticketLink} className="event-link">Iegādāties biļeti</a>
  </div>
);

const EventCalendar = ({ events }) => (
  <div className="event-calendar">
    {events.map(event => <Event key={event.id} event={event} />)}
  </div>
);

// Jūsu pasākumu datu piemērs
const events = [
  {
    id: 1,
    name: 'Pasākums 1',
    date: '2024-03-15',
    location: 'Rīga',
    ticketLink: 'https://www.example.com/tickets/1'
  },
  // Pievienojiet citus pasākumus šeit
];

// Lietot EventCalendar komponenti
// <EventCalendar events={events} />