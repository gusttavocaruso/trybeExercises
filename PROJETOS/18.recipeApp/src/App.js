import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/provider';
import pages from './pages/indexPages';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ pages.Login } />
          <Route exact path="/perfil" component={ pages.Perfil } />
          <Route exact path="/explorar" component={ pages.Explorar } />
          <Route exact path="/comidas" component={ pages.TelaComidas } />
          <Route exact path="/bebidas" component={ pages.TelaBebidas } />
          <Route exact path="/receitas-feitas" component={ pages.ReceitasFeitas } />
          <Route exact path="/explorar/comidas" component={ pages.ExplorarComidas } />
          <Route exact path="/explorar/bebidas" component={ pages.ExplorarBebidas } />
          <Route exact path="/receitas-favoritas" component={ pages.ReceitasFavoritas } />
          <Route
            exact
            path="/comidas/:id"
            component={ pages.DetalheComidas }
          />
          <Route
            exact
            path="/bebidas/:id"
            component={ pages.DetalheBebidas }
          />
          <Route
            exact
            path="/explorar/comidas/area"
            component={ pages.ExplorarComidasArea }
          />
          <Route
            exact
            path="/comidas/:id/in-progress"
            component={ pages.ReceitasProcessosComidas }
          />
          <Route
            path="/bebidas/:id/in-progress"
            component={ pages.ReceitasProcessosBebidas }
          />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ pages.IngredienteComidas }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ pages.IngredienteBebidas }
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
