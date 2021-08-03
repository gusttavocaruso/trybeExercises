import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState(
      { shouldRedirect: false },
      () => {
        createMovie(newMovie);
        this.setState({
          shouldRedirect: true,
        });
      },
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    const movieForm = (
      <div>
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );

    return (
      <div data-testid="new-movie">
        { shouldRedirect ? <Redirect to="/" /> : movieForm }
      </div>
    );
  }
}

export default NewMovie;
