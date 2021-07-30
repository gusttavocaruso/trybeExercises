import React from 'react';
import PropTypes from 'prop-types';

class RatingNew extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação:
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ valueName }
          onChange={ funcOn }
        />
      </label>
    );
  }
}

RatingNew.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default RatingNew;

// Rating.defaultProps = {
//   valueName: 'undefined',
// };
