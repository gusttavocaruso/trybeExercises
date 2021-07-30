import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { valueName, funcOn } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ valueName }
          onChange={ funcOn }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  valueName: PropTypes.string.isRequired,
  funcOn: PropTypes.func.isRequired,
};

export default ImagePath;
