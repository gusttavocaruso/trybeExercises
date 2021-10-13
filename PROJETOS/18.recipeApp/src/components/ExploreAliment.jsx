import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { foodAPIRequest, cocktailsAPIRequest } from '../services/APIrequest';

const ExploreAliment = ({ tipo }) => {
  const [getRandom, setGetRandom] = useState([]);

  useEffect(() => {
    const fetchAlimentoRandomico = async () => {
      const foodRequest = await foodAPIRequest('random', '', '');
      const cocktailsRequest = await cocktailsAPIRequest('random', '', '');
      const alimentoRandomico = tipo === 'comidas' ? foodRequest : cocktailsRequest;
      const idRandom = tipo === 'comidas'
        ? alimentoRandomico[0].idMeal
        : alimentoRandomico[0].idDrink;
      setGetRandom(idRandom);
    };
    fetchAlimentoRandomico();
  }, []);
  return (
    <>
      <Link to={ `/explorar/${tipo}/ingredientes` }>
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      {tipo === 'comidas' ? (
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
      ) : (
        console.log(tipo)
      )}

      <Link to={ `/${tipo}/${getRandom}` }>
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
    </>
  );
};

ExploreAliment.propTypes = {
  tipo: PropTypes.string,
}.isRequired;

export default ExploreAliment;
