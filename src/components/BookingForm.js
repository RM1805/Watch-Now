import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [movie, setMovie] = useState('');
const { id } = useParams();

useEffect(() => {
fetch(`https://api.tvmaze.com/shows/${id}`)
.then((response) => response.json())
.then((data) => setMovie(data))
.catch((error) => console.log(error));

}, [id]);

const handleFormSubmit = (e) => {
e.preventDefault();
const userDetails = {
    name,
    email,
    movie: id,
  };
  
  localStorage.setItem('userDetails', JSON.stringify(userDetails));

  setName('');
  setEmail('');
  
  };
  
  return (
  <div className="container">
  <h1 className="booking-heading">Book Your Ticket</h1>
  <form className="booking-form" onSubmit={handleFormSubmit}>
  <div className="form-group">
  <label htmlFor="name">Name</label>
  <input
  type="text"
  id="name"
  className="form-control"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  />
  </div>
  <div className="form-group">
  <label htmlFor="email">Email</label>
  <input
  type="email"
  id="email"
  className="form-control"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  />
  </div>
  <div className="form-group">
  <label htmlFor="movie">Movie</label>
  <input
           type="text"
           id="movie"
           className="form-control"
           value={movie.name}
           readOnly
         />
  </div>
  <button type="submit" className="btn btn-primary btn-book">
  Book Now
  </button>
  </form>
  </div>
  );
  };
  
  export default BookingForm;