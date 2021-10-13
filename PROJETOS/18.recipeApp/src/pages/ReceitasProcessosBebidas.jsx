import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Loading from '../components/Loading';
import Share from '../images/shareIcon.svg';
import Heart from '../images/whiteHeartIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';
import {
  btnFavoritar,
  ingredientMeasures,
  changeLocalRecipe,
  changeLocalFavorite,
  getAPIdataID,
  changeLocalCheckDrink,
} from '../services/funcAuxDetails';

const ReceitasProcessosBebidas = ({ match: { params: { id } }, history }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [btnFavorite, setBtnFavorite] = useState('isNotFavorite');
  const [isHidden, setIsHidden] = useState(true);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))
    && JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[id]) {
      setCheckedState(JSON.parse(localStorage.getItem('inProgressRecipes'))
        .cocktails[id]);
    }
    getAPIdataID(id, setDrinkDetail, 'drink');
    btnFavoritar(id, setBtnFavorite);
  }, []);

  useEffect(() => {
    changeLocalRecipe(id, 'cocktails', 'meals');
  }, []);

  const {
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic,
    strDrinkThumb,
  } = drinkDetail;

  const handleRecipe = () => {
    changeLocalRecipe(id, 'cocktails', 'meals');
    history.push('/receitas-feitas');
  };

  const favInfo = {
    id,
    type: 'bebida',
    area: '',
    image: strDrinkThumb,
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
  };

  const handleFavorite = () => {
    changeLocalFavorite(favInfo, btnFavorite, setBtnFavorite, id);
    const favBtn = (btnFavorite === 'isFavorite')
      ? setBtnFavorite('isNotFavorite') : setBtnFavorite('isFavorite');
    return favBtn;
  };

  const handleShare = () => {
    const url = `/bebidas/${id}`;
    copy(`http://localhost:3000${url}`);
    setIsHidden(false);
  };

  const receitasIngMeas = () => {
    const ingredients = ingredientMeasures(drinkDetail, 'ingredientes');
    const measures = ingredientMeasures(drinkDetail, 'medidas');

    const receitas = ingredients.map((ingredient, i) => `${ingredient} - 
      ${measures[i] === undefined ? '' : measures[i]}`);
    return receitas;
  };

  const changeCheckBox = ({ target: { name, checked } }) => {
    setCheckedState(changeLocalCheckDrink(name, checked, id, checkedState));
  };

  return (drinkDetail.length === 0) ? <Loading /> : (
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
      <p data-testid="recipe-title">{strDrink}</p>
      <p data-testid="recipe-category">{strCategory}</p>
      <p data-testid="recipe-category">{strAlcoholic}</p>
      <div className="ingredients-measure">
        {receitasIngMeas()
          .map((ingredient, i) => (
            <label
              htmlFor={ ingredient }
              key={ i }
              data-testid={ `${i}-ingredient-step` }
              className={ checkedState.includes(ingredient) ? 'line-thru' : '' }
            >
              <input
                onChange={ changeCheckBox }
                name={ ingredient }
                type="checkbox"
                checked={ checkedState.includes(ingredient) }
              />
              { ingredient }
            </label>
          ))}
      </div>
      <p data-testid="instructions">{strInstructions}</p>
      <button
        onClick={ handleRecipe }
        className="iniciar"
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ !receitasIngMeas().every((element) => checkedState.includes(element)) }
      >
        Finalizar Receita
      </button>
    </div>
  );
};

ReceitasProcessosBebidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ReceitasProcessosBebidas;
