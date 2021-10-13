import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import copy from 'clipboard-copy';
import Loading from '../components/Loading';
import Share from '../images/shareIcon.svg';
import Heart from '../images/whiteHeartIcon.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlackHeart from '../images/blackHeartIcon.svg';
import {
  btnContinuar,
  btnFavoritar,
  ingredientMeasures,
  changeLocalRecipe,
  changeLocalFavorite,
  getAPIdataID,
  alimentosSugestions } from '../services/funcAuxDetails';

const DetalheComidas = ({ match: { params: { id }, url }, history }) => {
  const [foodDetail, setfoodDetail] = useState([]);
  const [drinksDetails, setDrinkDetails] = useState([]);
  const [btnState, setBtnState] = useState('Iniciar Receita');
  const [btnFavorite, setBtnFavorite] = useState('isNotFavorite');
  const [isHidden, setIsHidden] = useState(true);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    alimentosSugestions(setDrinkDetails, 'cocktails');
    getAPIdataID(id, setfoodDetail, 'food');

    btnContinuar(id, setBtnState, 'meals');
    btnFavoritar(id, setBtnFavorite);
  }, []);

  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
    strArea,
  } = foodDetail;

  const handleRecipe = () => {
    changeLocalRecipe(id, 'meals', 'cocktails');
    history.push(`/comidas/${id}/in-progress`);
  };

  const favInfo = {
    id,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
  };
  const handleFavorite = () => {
    changeLocalFavorite(favInfo, btnFavorite, setBtnFavorite, id);
    const favBtn = (btnFavorite === 'isFavorite')
      ? setBtnFavorite('isNotFavorite') : setBtnFavorite('isFavorite');
    return favBtn;
  };

  const handleShare = () => {
    copy(`http://localhost:3000${url}`);
    setIsHidden(false);
  };

  const receitasIngMeas = () => {
    const ingredients = ingredientMeasures(foodDetail, 'ingredientes');
    const measures = ingredientMeasures(foodDetail, 'medidas');

    const receitas = ingredients.map((ingredient, i) => `${ingredient} - ${measures[i]}`);
    return receitas;
  };

  return (foodDetail.length === 0 && drinksDetails.length === 0) ? <Loading /> : (
    <div>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
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
        className="fav"
        onClick={ handleFavorite }
        type="button"
      >
        <img
          data-testid="favorite-btn"
          src={ btnFavorite === 'isFavorite' ? BlackHeart : Heart }
          alt="btn Fav"
        />
      </button>
      <p data-testid="recipe-title">{strMeal}</p>
      <p data-testid="recipe-category">{strCategory}</p>
      <section>
        <p>Ingredients</p>
        <div className="ingredients-measure">
          <ul>
            {receitasIngMeas()
              .map((ingredient, i) => (
                <li
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  key={ i }
                >
                  { ingredient }
                </li>))}
          </ul>
          {/* <ul>
            {ingredientMeasures(foodDetail, 'medida')
              .map((measure, i) => (
                <li
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  key={ i }
                >
                  { measure }
                </li>))}
          </ul> */}
        </div>
      </section>
      <p data-testid="instructions">{strInstructions}</p>
      <iframe
        data-testid="video"
        title="YouTube video player"
        width="320"
        height="240"
        src={ strYoutube ? strYoutube.replace('watch?v=', 'embed/') : 'loading' }
        frameBorder="0"
        allow="accelerometer; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Slider { ...settings }>
        {drinksDetails
          .map(({ strDrinkThumb, strDrink, strCategory: strDrikCategory }, i) => (
            <section key={ i } data-testid={ `${i}-recomendation-card` }>
              <img
                width="100"
                height="100"
                src={ strDrinkThumb }
                alt={ strDrink }
              />
              <p>{strDrikCategory}</p>
              <p data-testid={ `${i}-recomendation-title` }>{strDrink}</p>
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
};

DetalheComidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default DetalheComidas;
/* //testes */
