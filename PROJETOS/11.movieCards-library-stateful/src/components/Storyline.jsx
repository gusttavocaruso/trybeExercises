import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse:
        <input
          data-testid="storyline-input"
          type="text"
          name="storyLine"
          value={ valueName }
          onChange={ funcOn }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default Storyline;
