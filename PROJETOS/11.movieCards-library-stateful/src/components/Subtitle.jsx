import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ valueName }
          onChange={ funcOn }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default Subtitle;
