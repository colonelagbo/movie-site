import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import './MovieList.css';
import MovieCard from '../MovieList/MovieCard';
import FilterGroup from './FilterGroup';

const MovieList = ({type, title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: 'default',
    order: 'asc'
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== 'default') {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=b1bdc8abdee0945ebaa14ad8759c0d91`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  const handleFilter = (rate) => {
    let filtered;
    if (rate === minRating) {
      setMinRating(0);
      filtered = movies;
    } else {
      setMinRating(rate);
      filtered = movies.filter((movie) => movie.vote_average >= rate);
    }

    setFilterMovies(filtered);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
         {title}{""} 
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
