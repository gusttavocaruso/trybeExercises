import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../images/drinkIcon.svg';
import meal from '../images/mealIcon.svg';
import explore from '../images/exploreIcon.svg';

const Footer = () => (
  <div data-testid="footer" className="footer">
    <Link to="/bebidas">
      <img src={ drink } alt="drink" data-testid="drinks-bottom-btn" />
    </Link>
    <Link to="/explorar">
      <img data-testid="explore-bottom-btn" src={ explore } alt="explore" />
    </Link>
    <Link to="/comidas">
      <img data-testid="food-bottom-btn" src={ meal } alt="meal" />
    </Link>
  </div>
);

export default Footer;
