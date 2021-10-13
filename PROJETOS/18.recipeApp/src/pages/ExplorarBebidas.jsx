import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreAliment from '../components/ExploreAliment';

const ExplorarBebida = () => (
  <>
    <Header hasLupa={ false } pageName="Explorar Bebidas" />
    <div className="main">
      <ExploreAliment tipo="bebidas" />
    </div>
    <Footer />
  </>
);

export default ExplorarBebida;
