import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/myContext';
import createCard from '../services/createCard';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import { foodAPIRequest } from '../services/APIrequest';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TelaComidas = ({ history }) => {
  const {
    dataFood,
    categoryFood,
    btnState,
    setDataFood,
  } = useContext(MyContext);
  const firstRender = useRef(true);

  useEffect(() => {
    const foodRequest = async () => {
      const food = await foodAPIRequest();
      setDataFood(food);
    };
    foodRequest();
  }, [setDataFood]);

  useEffect(() => {
    if (!firstRender.current) {
      const { category } = btnState;
      const ApiCategoryFood = async () => {
        const fetchCategoryFood = await foodAPIRequest('filter', `c=${category}`);
        setDataFood(fetchCategoryFood);
      };
      ApiCategoryFood();
    } else {
      firstRender.current = false;
    }
  }, [btnState, setDataFood]);

  return !dataFood || dataFood.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Header hasLupa pageName="Comidas" />
      <div className="main">
        <Filters alimento={ categoryFood } />
        { (dataFood.length === 1 && dataFood[0].idMeal !== '52968')
          ? history.push(`/comidas/${dataFood[0].idMeal}`)
          : createCard(dataFood, 'Meal') }
      </div>
      <Footer />
    </div>
  );
};

TelaComidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default TelaComidas;
