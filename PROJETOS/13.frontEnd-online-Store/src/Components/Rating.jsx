import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="product-detail-evaluation">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            data-testid="product-detail-evaluation"
            placeholder="Digite seu comentário"
          />
        </label>
      </form>
    );
  }
}

export default Rating;
