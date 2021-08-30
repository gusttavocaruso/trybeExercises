import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import App from '../App';
import pokemons from '../data';

describe('Test pokedex page', () => {
  const pokemonId = 'pokemon-name';
  const nextButtonId = 'next-pokemon';
  const pokemoTypeId = 'pokemon-type';

  it('should a H2-heading text be there', () => {
    renderWithRouter(<App />);

    const pokedexTitle = screen.getByRole('heading', {
      level: 2,
      name: /encountered pokémons/i,
    });
    expect(pokedexTitle).toBeInTheDocument();
  });

  it('should next pokemon is other-one', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByTestId(nextButtonId);
    expect(nextButton).toHaveTextContent(/próximo pokémon/i);

    const { src: pikachuImg } = screen
      .getByRole('img', { name: /pikachu sprite/i });

    userEvent.click(nextButton);

    const { src: charmanderImg } = screen
      .getByRole('img', { name: /charmander sprite/i });

    expect(charmanderImg).not.toBe(pikachuImg);
  });

  it('should first pokemon return ', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByTestId(nextButtonId);

    const { innerHTML: pokemonNameOne } = screen.getByTestId(pokemonId);

    pokemons.forEach(() => userEvent.click(nextButton));
    const { innerHTML: pokemonNameTwo } = screen.getByTestId(pokemonId);

    expect(pokemonNameOne).toBe(pokemonNameTwo);
  });

  it('should return one pokemon at a time', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByTestId(nextButtonId);

    userEvent.click(nextButton);
    const pokemonNameOne = screen.getAllByTestId(pokemonId);
    expect(pokemonNameOne.length).toBe(1);

    userEvent.click(nextButton);

    const pokemonNameTwo = screen.getAllByTestId(pokemonId);
    expect(pokemonNameTwo.length).toBe(1);
  });

  it('should have filter buttons', () => {
    renderWithRouter(<App />);
    const DEFAULT_TYPES = [
      'Electric', 'Fire',
      'Bug', 'Poison',
      'Psychic', 'Normal',
      'Dragon',
    ];
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const compareOperator = typeButtons
      .every(({ innerHTML }, index) => innerHTML === DEFAULT_TYPES[index]);
    expect(compareOperator).toBeTruthy();
    expect(typeButtons.length).toBe(DEFAULT_TYPES.length);
  });

  it('should have functional filter buttons', () => {
    renderWithRouter(<App />);
    const fireTypeButton = screen.getByRole('button', { name: /fire/i });
    const allButton = screen.getByRole('button', { name: /all/i });
    const nextButton = screen.getByTestId(nextButtonId);

    userEvent.click(fireTypeButton);

    const typeName = screen.getByTestId(pokemoTypeId);
    expect(fireTypeButton.innerHTML).toBe(typeName.innerHTML);
    expect(allButton).toBeInTheDocument();

    userEvent.click(nextButton);
    expect(fireTypeButton.innerHTML).toBe(typeName.innerHTML);
  });

  it('should have functional "all" button', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByTestId(nextButtonId);
    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton.innerHTML).toBe('All');

    const { innerHTML: typeNameOne } = screen.getByTestId(pokemoTypeId);
    userEvent.click(nextButton);
    const { innerHTML: typeNameTwo } = screen.getByTestId(pokemoTypeId);

    expect(typeNameOne).not.toBe(typeNameTwo);

    userEvent.click(allButton);
    const { innerHTML: typeNameThree } = screen.getByTestId(pokemoTypeId);
    userEvent.click(nextButton);
    const { innerHTML: typeNameFour } = screen.getByTestId(pokemoTypeId);

    expect(typeNameThree).not.toBe(typeNameFour);
  });
});
