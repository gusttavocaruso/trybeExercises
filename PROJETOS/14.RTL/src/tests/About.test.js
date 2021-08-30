import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import App from '../App';

describe('Test About-page content', () => {
  it('Should a H2-heading be there', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const aboutTitle = screen.getByRole('heading', {
      level: 2,
      name: /about pokédex/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Should two pokedex-text-paragraphs be there', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const oneP = screen.getByText(/this application simulates a pokédex/i);
    expect(oneP).toBeInTheDocument();

    const twoP = screen.getByText(/one can filter pokémons by type/i);
    expect(twoP).toBeInTheDocument();
  });

  it('Should an specific image be there', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const aboutImg = screen.getByRole('img', { name: /pokédex/i });
    expect(aboutImg.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
