import React from 'react';
import ButtonsRecipes from '../components/ButtonsRecipes';
import CardFavorite from '../components/CardFavorite';
import Header from '../components/Header';

const ReceitasFavoritas = () => (
  <div>
    <Header hasLupa={ false } pageName="Receitas Favoritas" />
    <ButtonsRecipes />
    <CardFavorite />
  </div>
);

export default ReceitasFavoritas;
