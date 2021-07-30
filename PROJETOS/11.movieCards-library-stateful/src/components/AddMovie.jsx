import React from 'react';

import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingNew from './RatingNew';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Função ensinada no Course e na aula ao-vivo
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title, subtitle, imagePath, storyLine, rating, genre,
    } = this.state;

    return (
      <form action="" data-testid="add-movie-form">

        <Title valueName={ title } funcOn={ this.handleChange } />
        <Subtitle valueName={ subtitle } funcOn={ this.handleChange } />
        <ImagePath valueName={ imagePath } funcOn={ this.handleChange } />
        <Storyline valueName={ storyLine } funcOn={ this.handleChange } />
        <RatingNew valueName={ rating } funcOn={ this.handleChange } />
        <Genre valueName={ genre } funcOn={ this.handleChange } />

      </form>
    );
  }
}

export default AddMovie;
