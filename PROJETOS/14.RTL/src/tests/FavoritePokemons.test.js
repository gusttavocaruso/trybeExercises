import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import App from '../App';

describe('Test favorite pokemons page', () => {
  it('Should not have any pokemon there', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);

    const emptyFavoriteText = screen.getByText(/no favorite pokemon found/i);
    expect(emptyFavoriteText).toBeInTheDocument();
  });

  it('Should have a favorite pokemon there', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const favoriteInput = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favoriteInput);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);

    const pokemonCard = screen.getAllByRole('img');
    expect(pokemonCard[0]).toBeInTheDocument();
  });
});
