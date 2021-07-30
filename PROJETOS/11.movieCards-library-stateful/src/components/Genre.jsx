import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero:
        <select
          data-testid="genre-input"
          name="genre"
          value={ valueName }
          onChange={ funcOn }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default Genre;
