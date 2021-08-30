import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import App from '../App';

describe('Test nav-links on the Aplication', () => {
  it('Should home-link works', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const titlePokedex = screen.getByRole('heading', {
      level: 2,
      name: /encountered pokémons/i,
    });
    expect(titlePokedex).toBeInTheDocument();
  });

  it('Should about-link works', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const aboutTitle = screen.getByRole('heading', {
      level: 2,
      name: /about pokédex/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Should favorite-pokemons-link works', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favoriteLink).toBeInTheDocument();
    userEvent.click(favoriteLink);

    const titleFavorite = screen.getByRole('heading', {
      level: 2,
      name: /favorite pokémons/i,
    });
    expect(titleFavorite).toBeInTheDocument();
  });

  it('Should "not found page" works', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');
    const notFoundTitle = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
