import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading, MovieCard } from '../components';
import { getMovies as movieAPI } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.moviePromisse();
  }

  async moviePromisse() {
    const data = await movieAPI();
    this.setState(
      { loading: true },
      () => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...data],
          loading: false,
        }));
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const { title } = movies;
    const movieCard = (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ title } movie={ movie } />)}
      </div>
    );

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movieCard }
      </div>
    );
  }
}

export default MovieList;
