import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Registration from './pages/Registration';
import LoggedPage from './pages/LoggedPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/clientes" component={ Clientes } />
        <Route exact path="/registro" component={ Registration } />
        <Route exact path="/logged" component={ LoggedPage } />
      </Switch>
    </BrowserRouter>
  );
}
