import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Summary = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!show) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="summary-title">Summary - {show.name}</h1>
      <div className="summary-description" dangerouslySetInnerHTML={{ __html: show.summary }} />
      <Link to={`/details/${id}/summary/booking`} className="btn btn-primary">
        Book a Movie Ticket
      </Link>
    </div>
  );
};

export default Summary;
