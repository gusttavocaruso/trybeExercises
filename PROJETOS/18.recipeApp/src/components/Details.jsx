import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import Share from '../images/shareIcon.svg';
import Heart from '../images/whiteHeartIcon.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlackHeart from '../images/blackHeartIcon.svg';
import { ingredientMeasures } from '../services/funcAuxDetails';

const Details = ({
  alimentoDetail,
  opostoDetails,
  tipo,
  btnState,
  btnFavorite,
  isHidden,
  handleRecipe,
  handleFavorite,
  handleShare,
  id }) => {
  if (tipo === 'cocktails') {
    const {
      strDrink,
      strCategory,
      strInstructions,
      strDrinkThumb,
      strAlcoholic } = alimentoDetail;

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt={ strDrink }
          width="320"
          height="240"
        />
        <button
          onClick={ handleShare }
          type="button"
        >
          <img data-testid="share-btn" src={ Share } alt="btn share" />
        </button>
        <p hidden={ isHidden }>Link copiado!</p>
        <button
          onClick={ handleFavorite }
          type="button"
        >
          <img
            data-testid="favorite-btn"
            src={ btnFavorite === 'isFavorite' ? BlackHeart : Heart }
            alt="btn Fav"
          />
        </button>
        <p data-testid="recipe-title">{strDrink}</p>
        <p data-testid="recipe-category">{strCategory}</p>
        <p data-testid="recipe-category">{strAlcoholic}</p>
        <section>
          <p>Ingredients</p>
          <div className="ingredients-measure">
            <ul>
              {ingredientMeasures(alimentoDetail, 'ingredientes')
                .map((ingredient, i) => (
                  <li
                    data-testid={ `${i}-ingredient-name-and-measure` }
                    key={ i }
                  >
                    { ingredient }
                  </li>))}
            </ul>
            <ul>
              {ingredientMeasures(alimentoDetail, 'medida')
                .map((measurement, i) => (
                  <li
                    data-testid={ `${i}-ingredient-name-and-measure` }
                    key={ i }
                  >
                    { measurement }
                  </li>))}
            </ul>
          </div>
        </section>
        <p data-testid="instructions">{strInstructions}</p>
        <Slider { ...settings }>
          {opostoDetails
            .map(({ strMealThumb, strMeal, strCategory: strMealCategory }, i) => (
              <section key={ i } data-testid={ `${i}-recomendation-card` }>
                <img
                  width="100"
                  height="100"
                  src={ strMealThumb }
                  alt={ strMeal }
                />
                <p>{strMealCategory}</p>
                <p data-testid={ `${i}-recomendation-title` }>{strMeal}</p>
              </section>
            ))}
        </Slider>
        <button
          id={ id }
          onClick={ handleRecipe }
          className="iniciar"
          data-testid="start-recipe-btn"
          type="button"
        >
          {btnState}
        </button>
      </div>
    );
  } if (tipo === 'meal') {
    /*    const {
      strMeal,
      strCategory,
      strInstructions,
      strMealThumb,
      strYoutube,
      strArea,
    } = alimentoDetail; */
    return (<div>oi</div>);
  }
};
Details.propTypes = {
  alimentoDetail: PropTypes.shape({
    strAlcoholic: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strInstructions: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
  }),
  opostoDetails: PropTypes.any,
  tipo: PropTypes.string,
}.isRequired;

export default Details;
