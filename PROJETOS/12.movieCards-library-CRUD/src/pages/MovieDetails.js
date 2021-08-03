import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* import App from '../App.css'; */

import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    };

    this.movieDelete = this.movieDelete.bind(this);
  }

  componentDidMount() {
    this.movieDetailsFunc();
  }

  async movieDetailsFunc() {
    const { match: { params: { id } } } = this.props;
    const movieDetailsPromise = await getMovie(id);

    this.setState(
      { loading: true },
      () => {
        this.setState({
          movie: movieDetailsPromise,
          loading: false,
        });
      },
    );
  }

  movieDelete() {
    const { movie: { id } } = this.state;
    deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    const movieDetails = (
      <div>
        <h1>{ `Title: ${title}` }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <br />
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.movieDelete }>DELETAR</Link>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : movieDetails }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
