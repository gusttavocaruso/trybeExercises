import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* <div>Movie Card Library CRUD</div> */}
      <Switch>
        <Route
          exact
          path="/"
          component={ MovieList }
        />
        <Route
          exact
          path="/movies/new"
          component={ NewMovie }
        />
        <Route
          exact
          path="/movies/:id"
          component={ MovieDetails }
        />
        <Route
          exact
          path="/movies/:id/edit"
          component={ EditMovie }
        />
        <Route
          component={ NotFound }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
