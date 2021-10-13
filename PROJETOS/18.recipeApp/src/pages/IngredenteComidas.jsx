import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreIng from '../components/ExploreIng';

const IngredienteComidas = () => (
  <>
    <Header pageName="Explorar Ingredientes" hasLupa={ false } />
    <div className="main">
      <ExploreIng tipo="comidas" />
    </div>
    <Footer />
  </>
);

export default IngredienteComidas;
