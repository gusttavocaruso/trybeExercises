import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import MyContext from '../context/myContext';
import { cocktailsAPIRequest } from '../services/APIrequest';
import createCard from '../services/createCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TelaBebidas = ({ history }) => {
  const {
    dataDrink,
    categoryDrink,
    btnState,
    setDataDrink,
  } = useContext(MyContext);
  const firstRender = useRef(true);

  useEffect(() => {
    const cocktailsRequest = async () => {
      const drink = await cocktailsAPIRequest();
      setDataDrink(drink);
    };
    cocktailsRequest();
  }, [setDataDrink]);

  useEffect(() => {
    if (!firstRender.current) {
      const { category } = btnState;
      const ApiCategoryDrink = async () => {
        const fetchCategoryDrink = await cocktailsAPIRequest('filter', `c=${category}`);
        setDataDrink(fetchCategoryDrink);
      };
      ApiCategoryDrink();
    } else {
      firstRender.current = false;
    }
  }, [btnState, setDataDrink]);

  return !dataDrink || dataDrink.length === 0 ? (
    <Loading />
  ) : (
    <>
      <Header hasLupa pageName="Bebidas" />
      <div className="main">
        <Filters alimento={ categoryDrink } />
        { dataDrink.length === 1
          ? history.push(`/bebidas/${dataDrink[0].idDrink}`)
          : createCard(dataDrink, 'Drink') }
      </div>
      <Footer />
    </>
  );
};

TelaBebidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default TelaBebidas;
