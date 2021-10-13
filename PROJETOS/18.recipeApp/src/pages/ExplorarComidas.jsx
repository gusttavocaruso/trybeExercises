import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreAliment from '../components/ExploreAliment';

const ExplorarComidas = () => (
  <>
    <Header hasLupa={ false } pageName="Explorar Comidas" />
    <div className="main">
      <ExploreAliment tipo="comidas" />
    </div>
    <Footer />
  </>
);

export default ExplorarComidas;
