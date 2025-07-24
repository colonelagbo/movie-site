import React from 'react';
import './MovieCard.css';
import Star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="" className='Movie_Card'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s'
        alt='movie poster'
        className='movie_poster'
      />  
      <div>
        <h3 className='movie_details_heading'>Movie Name</h3>  
        <div className="movie_date_rate">
          <p>10-20-2020</p>
          <p>8.0 <img src={Star} alt="rating icon" className='card_emoji' /></p>
        </div>
        <p className='movie_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum totam ut numquam, fuga quis minima dignissimos placeat corrupti 
          dolore quos at omnis nostrum temporibus magni nemo reiciendis? Repellat, ratione.
        </p>
      </div> 
    </a>
  );
};

export default MovieCard;
