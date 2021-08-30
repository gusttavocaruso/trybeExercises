import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

export default function renderWithRouter(component) {
  const history = createMemoryHistory();
  const objRender = render(<Router history={ history }>{component}</Router>);
  return { ...objRender, history };
}
