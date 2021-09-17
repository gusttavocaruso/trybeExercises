import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import GamePage from './pages/GamePage';
import Login from './pages/Login';
import Config from './pages/Config';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game-page" component={ GamePage } />
        <Route exact path="/config" component={ Config } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
