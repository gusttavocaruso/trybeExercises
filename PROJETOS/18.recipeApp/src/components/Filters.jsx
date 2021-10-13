import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import MyContext from '../context/myContext';
import { foodAPIRequest, cocktailsAPIRequest } from '../services/APIrequest';

const Filters = ({ alimento }) => {
  const { setBtnState,
    btnState,
    setDataFood,
    setDataDrink } = useContext(MyContext);
  const fifthFirst = alimento.slice(0, Number('5'));

  const buttonAll = async () => {
    const food = await foodAPIRequest();
    setDataFood(food);
    const drink = await cocktailsAPIRequest();
    setDataDrink(drink);
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    if (btnState.category !== name) {
      setBtnState({
        category: name,
      });
    } else {
      buttonAll();
    }
  };

  if (alimento.length === 0) return (<Loading />);

  return (
    <div>
      <button
        name="all"
        data-testid="All-category-filter"
        type="button"
        onClick={ buttonAll }
      >
        All
      </button>
      { fifthFirst.map(({ strCategory }, i) => (
        <button
          key={ i }
          type="button"
          name={ strCategory }
          onClick={ handleClick }
          data-testid={ `${strCategory}-category-filter` }
          value={ strCategory }
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
};

Filters.propTypes = {
  alimento: PropTypes.shape({
    length: PropTypes.number,
    slice: PropTypes.func,
  }),
}.isRequired;

export default Filters;
