import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.show.id,
          name: item.show.name,
          rating: item.show.rating?.average || 'N/A',
          image: item.show.image?.original || 'https://via.placeholder.com/150',
        }));
        setShows(formattedData);
      })
      .catch((error) => console.log(error));
  }, []);

  if (shows.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Top Shows</h1>
      <div className="movie-list">
        {shows.map((show) => (
          <div className="movie-item" key={show.id}>
            <img className="movie-item-image" src={show.image} alt={show.name} />
            <div className="movie-item-details">
              <h2 className="movie-item-name">{show.name}</h2>
              <p className="movie-item-rating">Rating: {show.rating}</p>
              <Link to={`/details/${show.id}`} className="btn btn-primary">
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
