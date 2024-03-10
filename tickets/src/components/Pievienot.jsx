import React, { useState } from 'react';
import '../style/pievienot.css';


function EventForm({ addEventToCart }) {
  const [event, setEvent] = useState({ location: '', time: '', price: '', image: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEventToCart(event);
    setEvent({ location: '', time: '', price: '', image: '' });
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

function Cart({ cart, purchase }) {
  return (
    <div>
      <h2>Grozs</h2>
      {cart.map((event, index) => (
        <div key={index}>
          <h3>{event.location}</h3>
          <p>{event.time}</p>
          <p>{event.price}</p>
          <img src={event.image} alt="event" />
        </div>
      ))}
      <button onClick={purchase}>Iegādāties</button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addEventToCart = (event) => {
    setCart([...cart, event]);
  };

  const purchase = () => {
    console.log('Pasākumi iegādāti:', cart);
    setCart([]);
  };

  return (
    <div>
      <EventForm addEventToCart={addEventToCart} />
      <Cart cart={cart} purchase={purchase} />
    </div>
  );
}

export default App;


