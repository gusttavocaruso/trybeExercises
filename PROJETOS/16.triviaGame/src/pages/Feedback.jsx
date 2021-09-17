import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const localStore = JSON.parse(localStorage.getItem('state'));
    const { assertions, score } = localStore.player;
    const THREE = 3;
    return (
      <div className="gameboard">
        <Header />
        <div className="feedback-column">
          <span className="label-feedback bold">Score: </span>
          <h3 data-testid="feedback-total-score">{ score }</h3>
        </div>
        <div className="feedback-column">
          <span className="label-feedback bold">Quantidade de acertos:</span>
          <h3 data-testid="feedback-total-question">{ assertions }</h3>
        </div>
        <h3 data-testid="feedback-text">
          { assertions >= THREE ? 'Mandou bem!' : 'Podia ser melhor...' }
        </h3>
        <Link to="/ranking" className="link" data-testid="btn-ranking">Ver Ranking</Link>
        <Link to="/" className="link" data-testid="btn-play-again">Jogar novamente</Link>
      </div>
    );
  }
}

export default Feedback;
