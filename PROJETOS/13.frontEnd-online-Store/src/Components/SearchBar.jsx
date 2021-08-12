import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { alterarEstado, handleChange, product } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ product }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ alterarEstado }
          >
            Pesquisar
          </button>
        </form>

      </div>
    );
  }
}

SearchBar.propTypes = {
  alterarEstado: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
};

export default SearchBar;

// feito pelo grupo via pair programming
