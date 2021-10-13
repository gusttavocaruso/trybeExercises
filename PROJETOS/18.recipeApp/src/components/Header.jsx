import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/myContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { filterByClickFood, filterByClickDrink } from '../services/funcAuxHeader';

const Header = ({ pageName, hasLupa }) => {
  const [hidden, setHidden] = useState(true);
  const [inputFilter, setInputFilter] = useState('');
  const [radioFilter, setRadioFilter] = useState('');
  const { setDataFood, setDataDrink } = useContext(MyContext);

  const handleFiltersChange = ({ target: { type, value } }) => {
    const filtersType = (type === 'text')
      ? setInputFilter(value) : setRadioFilter(value);

    if (radioFilter === 'primeira-letra'
        && type === 'text' && value.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter')
        && setInputFilter('');
    }
    return filtersType;
  };

  const showSearchBar = () => {
    setHidden(!hidden);
  };

  const setSelectedFilter = () => {
    if (pageName === 'Comidas') {
      filterByClickFood(radioFilter, inputFilter, setInputFilter, setDataFood);
    } else {
      filterByClickDrink(radioFilter, inputFilter, setInputFilter, setDataDrink);
    }
  };

  const searchInput = (
    <>
      <input
        className="searchInput"
        data-testid="search-input"
        type="text"
        onChange={ handleFiltersChange }
        name="input-text"
      />
      <label htmlFor="ingredient-search-radio">
        <input
          name="searchOpt"
          type="radio"
          id="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          value="ingrediente"
          onChange={ handleFiltersChange }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          name="searchOpt"
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          value="nome"
          onChange={ handleFiltersChange }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          name="searchOpt"
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          value="primeira-letra"
          onChange={ handleFiltersChange }
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ setSelectedFilter }
      >
        Buscar
      </button>
    </>
  );

  const withSearchIMG = (
    <>
      <nav className="header">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
          />
        </Link>
        <h2 data-testid="page-title">{ pageName }</h2>
        <button type="button" onClick={ showSearchBar }>
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="lupa"
          />
        </button>
      </nav>
      { hidden ? null : searchInput }
    </>
  );

  const withoutSearchIMG = (
    <nav className="header">
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="profile"
          data-testid="profile-top-btn"
        />
      </Link>
      <h2 data-testid="page-title">{ pageName }</h2>
    </nav>
  );

  return (
    hasLupa ? withSearchIMG : withoutSearchIMG
  );
};

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Header;
