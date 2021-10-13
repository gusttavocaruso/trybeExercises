import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ alimento, tipo, chave }) => {
  const image = alimento[`str${tipo}Thumb`];
  const name = alimento[`str${tipo}`];
  const idAlimento = alimento[`id${tipo}`];
  const rota = tipo === 'Meal' ? `/comidas/${idAlimento}` : `/bebidas/${idAlimento}`;
  return (
    <Link
      to={ {
        pathname: rota,
        state: { alimento },
      } }
      data-testid={ `${chave}-recipe-card` }
    >
      <img
        alt={ name }
        src={ image }
        className="imageFood"
        data-testid={ `${chave}-card-img` }
      />
      <p data-testid={ `${chave}-card-name` }>{name}</p>
    </Link>
  );
};

Card.propTypes = {
  alimento: PropTypes.shape({}),
  tipo: PropTypes.string,
}.isRequired;

export default Card;
