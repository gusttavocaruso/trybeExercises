import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Share from '../images/shareIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';

const CardFavorite = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      setFavs(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
  }, []);

  return (
    <div>
      {favs.map((fav, index) => (
        <div className="main" key={ index }>
          <img
            src={ fav.image }
            alt={ fav.name }
            className="imageFood"
            data-testid={ `${index}-horizontal-image` }
          />
          <p data-testid={ `${index}-horizontal-name` }>{fav.name}</p>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {` ${fav.area} - ${fav.category}` }
          </p>
          <p data-testid={ `${index}-horizontal-top-text` }>{fav.alcoholicOrNot}</p>
          <button
            type="button"
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ Share }
              alt="btn share"
            />
          </button>
          <button
            className="fav"
            type="button"
          >
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ BlackHeart }
              alt="btn Fav"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

CardFavorite.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default CardFavorite;
