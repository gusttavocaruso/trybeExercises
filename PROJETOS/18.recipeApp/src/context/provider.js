import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './myContext';
import { foodAPIRequest, cocktailsAPIRequest } from '../services/APIrequest';

const Provider = ({ children }) => {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [btnState, setBtnState] = useState({ category: '' });
  // const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const categoryFoodRequest = async () => {
      const category = await foodAPIRequest('list', 'c=list');
      setCategoryFood(category);
    };
    categoryFoodRequest();
  }, []);

  useEffect(() => {
    const categoryDrinkRequest = async () => {
      const drink = await cocktailsAPIRequest('list', 'c=list');
      setCategoryDrink(drink);
    };
    categoryDrinkRequest();
  }, []);

  const contextValue = {
    dataFood,
    setDataFood,
    dataDrink,
    setDataDrink,
    categoryFood,
    setCategoryFood,
    categoryDrink,
    setCategoryDrink,
    btnState,
    setBtnState,
    // isFiltered,
    // setIsFiltered,
  };

  return (
    <MyContext.Provider value={ contextValue }>{children}</MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
