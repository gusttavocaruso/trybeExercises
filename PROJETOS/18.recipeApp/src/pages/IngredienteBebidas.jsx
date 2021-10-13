import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreIng from '../components/ExploreIng';

const IngredienteBebidas = () => (
  <>
    <Header pageName="Explorar Ingredientes" hasLupa={ false } />
    <div className="main">
      <ExploreIng tipo="bebidas" />
    </div>
    <Footer />
  </>
);

export default IngredienteBebidas;
