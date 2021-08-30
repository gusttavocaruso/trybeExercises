import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import { Pokemon } from '../components';

const favoritedId = { 1: true };
const pokemon = {
  id: 1,
  name: 'Pikachu',
  averageWeight: { value: '5', measurementUnit: 'kg' },
  type: 'eletrico',
  image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
};

describe('Test pokemons page', () => {
  it('Should be pokemons selected informations there', () => {
    renderWithRouter(
      <Pokemon pokemon={ pokemon } isFavorite={ favoritedId[pokemon.id] } />,
    );
    const name = screen.getByText(/pikachu/i);
    expect(name).toBeInTheDocument();
    const type = screen.getByText(/eletrico/i);
    expect(type).toBeInTheDocument();
    const averageWeight = screen.getByText(/average weight: 5 kg/i);
    expect(averageWeight).toBeInTheDocument();
    const pokemonImage = screen.getByAltText(/pikachu sprite/i);
    expect(pokemonImage).toHaveAttribute('src', pokemon.image);
  });

  it('Should have a details-nav-link there ', () => {
    renderWithRouter(
      <Pokemon pokemon={ pokemon } isFavorite={ favoritedId[pokemon.id] } />,
    );
    const link = screen.getByText(/More details/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/pokemons/${pokemon.id}`);
  });

  it('Should datails-nav-link works', () => {
    const { history } = renderWithRouter(
      <Pokemon pokemon={ pokemon } isFavorite={ favoritedId[pokemon.id] } />,
    );
    const link = screen.getByText(/More details/i);
    userEvent.click(link);
    expect(history.location.pathname).toBe(`/pokemons/${pokemon.id}`);
  });

  it('Should have a star-icon there', () => {
    renderWithRouter(
      <Pokemon pokemon={ pokemon } isFavorite={ favoritedId[pokemon.id] } />,
    );

    const starIcon = screen.getByAltText(`${pokemon.name} is marked as favorite`);
    const src = '/star-icon.svg';
    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveAttribute('src', src);
  });
});
