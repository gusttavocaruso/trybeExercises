import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { foodAPIRequest, cocktailsAPIRequest } from '../services/APIrequest';

const ExploreIng = ({ tipo }) => {
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    const fetchIng = async () => {
      const TWELVE = 12;
      const ingFoodRequest = await foodAPIRequest('list', 'i=list');
      const ingDrinkRequest = await cocktailsAPIRequest('list', 'i=list');
      const ing = tipo === 'comidas' ? ingFoodRequest : ingDrinkRequest;
      const twelveIng = ing ? ing.slice(0, TWELVE) : [];
      setIngredientes(twelveIng);
    };
    fetchIng();
  }, []);

  const ingredientTipo = tipo === 'comidas' ? 'strIngredient' : 'strIngredient1';
  const siteAlimento = tipo === 'comidas' ? 'themealdb' : 'thecocktaildb';

  return ingredientes.lenght === 0 ? <Loading /> : (
    <div>
      {ingredientes.map((ingredient, index) => (
        <div data-testid={ `${index}-ingredient-card` } key={ index }>
          <img
            alt={ ingredient[ingredientTipo] }
            data-testid={ `${index}-card-img` }
            src={ `https://www.${siteAlimento}.com/images/ingredients/${ingredient[ingredientTipo]}-Small.png` }
          />
          <p data-testid={ `${index}-card-name` }>{ingredient[ingredientTipo]}</p>
        </div>
      ))}
    </div>
  );
};

ExploreIng.propTypes = {
  tipo: PropTypes.string,
}.isRequired;

export default ExploreIng;
