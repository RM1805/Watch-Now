import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
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
      <div className="show-details">
        <img src={show.image?.original} alt={show.name} className="show-thumbnail" />
        <div className="show-info">
          <h2 className="show-name">{show.name}</h2>
          <p className="show-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
          <Link to={`/details/${id}/summary`} className="btn btn-primary">
            View Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
