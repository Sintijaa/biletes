import React, { useState } from 'react';

function EventForm() {
  const [event, setEvent] = useState({ location: '', time: '', price: '', image: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vieta:
        <input type="text" name="location" value={event.location} onChange={handleChange} />
      </label>
      <label>
        Laiks:
        <input type="text" name="time" value={event.time} onChange={handleChange} />
      </label>
      <label>
        Cena:
        <input type="text" name="price" value={event.price} onChange={handleChange} />
      </label>
      <label>
        Bilde:
        <input type="text" name="image" value={event.image} onChange={handleChange} />
      </label>
      <input type="submit" value="Pievienot pasākumu" />
    </form>
  );
}

export default EventForm;