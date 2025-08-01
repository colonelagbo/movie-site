import React from 'react';
import "./App.css";
import Fire from './assets/fire.png';
import Star from './assets/glowing-star.png';
import party from "./assets/partying-face.png";

import Navbar from "./components/Navbar/Navbar";
import MovieList from './Components/MovieList/MovieList';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Star} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={party} />
    </div>
  );
};

export default App;
