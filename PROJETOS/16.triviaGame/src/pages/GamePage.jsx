import { decode } from 'html-entities';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Timer from '../components/Timer';

class GamePage extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonClass: 'alternativas',
      showNextButton: false,
      numeroDaPergunta: 0,
      stopCount: false,
      restartCounter: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.renderBtnsMultiple = this.renderBtnsMultiple.bind(this);
    this.setShowNextButtonState = this.setShowNextButtonState.bind(this);
    this.setStopCount = this.setStopCount.bind(this);
    this.setRestartCounter = this.setRestartCounter.bind(this);
  }

  setShowNextButtonState(bool) {
    this.setState({ showNextButton: bool });
  }

  setStopCount(bool) {
    this.setState({ stopCount: bool });
  }

  setRestartCounter(bool) {
    this.setState({ restartCounter: bool });
  }

  handleClick({ target }) {
    const buttons = document.querySelectorAll('.alternativas');
    buttons.forEach((button) => {
      button.className = 'alternativas selectedErrada';
      if (button.getAttribute('data-testid') === 'correct-answer') {
        button.className = 'alternativas selectedCerta';
      }
    });

    this.handleScore(target);
    this.setStopCount(true);
    this.setShowNextButtonState(true);
  }

  handleScore(target) {
    const { numeroDaPergunta } = this.state;
    const { remainingTime, results } = this.props;
    console.log(remainingTime);
    const { difficulty } = results[numeroDaPergunta];
    const difficultyPoints = { hard: 3, medium: 2, easy: 1 };
    const TEN = 10;
    const scoreFormula = TEN + (remainingTime * difficultyPoints[difficulty]);
    const player = JSON.parse(localStorage.getItem('state'));

    if (target.getAttribute('data-testid') === 'correct-answer') {
      const assertion = player.player.assertions + 1;
      player.player.assertions = assertion;
      player.player.score += scoreFormula;
      localStorage.setItem('state', JSON.stringify(player));
    } else {
      player.player.score += 0;
    }
  }

  handleNext() {
    const { numeroDaPergunta } = this.state;
    const { history } = this.props;
    const FOUR = 3;
    if (numeroDaPergunta > FOUR) history.push('/feedback');
    const perguntaAtual = numeroDaPergunta + 1;
    const buttons = document.querySelectorAll('.alternativas');
    this.setState({ numeroDaPergunta: perguntaAtual });
    buttons.forEach((button) => {
      button.className = 'alternativas';
      button.disabled = false;
    });
    this.setShowNextButtonState(false);
    this.setRestartCounter(true);
    this.setStopCount(false);
  }

  renderNextButton() {
    return (
      <button
        data-testid="btn-next"
        className="button-next"
        type="submit"
        onClick={ this.handleNext }
      >
        Proxima
      </button>
    );
  }

  renderBtnsMultiple(result) {
    const { buttonClass } = this.state;
    return (
      <>
        <button
          className={ buttonClass }
          onClick={ this.handleClick }
          type="button"
          data-testid="wrong-answer-1"
        >
          {decode(result.incorrect_answers[1])}
        </button>
        <button
          className={ buttonClass }
          onClick={ this.handleClick }
          type="button"
          data-testid="wrong-answer-2"
        >
          {decode(result.incorrect_answers[2])}
        </button>
      </>
    );
  }

  renderButtons() {
    const { numeroDaPergunta, buttonClass, showNextButton } = this.state;
    const { results } = this.props;
    const pergunta = results.filter((_result, index) => (index === numeroDaPergunta));
    return (
      pergunta.map((result, index) => (
        <div className="main-questions" key={ index }>
          <div
            className="question-category"
            data-testid="question-category"
          >
            {decode(result.category)}
          </div>
          <div
            className="main-question"
            data-testid="question-text"
          >
            {decode(result.question)}
          </div>
          <div className="game-buttons">
            <button
              className={ buttonClass }
              onClick={ this.handleClick }
              type="button"
              data-testid="correct-answer"
            >
              {decode(result.correct_answer)}
            </button>
            <button
              className={ buttonClass }
              onClick={ this.handleClick }
              type="button"
              data-testid="wrong-answer-0"
            >
              {decode(result.incorrect_answers[0])}
            </button>
            {result.type === 'multiple' && this.renderBtnsMultiple(result)}
            { showNextButton && this.renderNextButton() }
          </div>
        </div>
      ))
    );
  }

  render() {
    const { stopCount, restartCounter } = this.state;
    console.log(`restartCounter: ${restartCounter}`);
    console.log(`stopCount: ${stopCount}`);
    return (
      <div className="gameboard main-content">
        <Header />
        { this.renderButtons() }
        <Timer
          stopCount={ stopCount }
          setStopCount={ this.setStopCount }
          restart={ restartCounter }
          setRestart={ this.setRestartCounter }
          callback={ this.setShowNextButtonState }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.questionReducer.results,
  remainingTime: state.questionReducer.time,
});

GamePage.propTypes = {
  results: PropTypes.arrayOf(PropTypes.any).isRequired,
  remainingTime: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(GamePage);
