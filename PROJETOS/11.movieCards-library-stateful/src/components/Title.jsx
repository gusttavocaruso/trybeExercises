import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ valueName }
          onChange={ funcOn }
        />
      </label>
    );
  }
}

Title.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default Title;
