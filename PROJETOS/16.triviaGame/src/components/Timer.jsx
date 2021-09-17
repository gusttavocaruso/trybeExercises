import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCountdown as updateCountDownAction } from '../redux/action';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
    };
    this.disableBtns = this.disableBtns.bind(this);
    this.setNewInterval = this.setNewInterval.bind(this);
    this.setTimeState = this.setTimeState.bind(this);
  }

  componentDidMount() {
    this.setNewInterval();
  }

  componentDidUpdate() {
    const { time } = this.state;
    const { stopCount, callback, restart, updateCountdown } = this.props;
    updateCountdown(time);
    if (restart) {
      this.handleRestart();
      return;
    }
    if (stopCount) {
      updateCountdown(time);
      clearInterval(this.countdownInterval);
      return;
    }
    if (time === 0) {
      this.disableBtns();
      callback(true);
      clearInterval(this.countdownInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  setTimeState() {
    this.setState((prevState) => ({ time: prevState.time - 1 }));
  }

  setNewInterval() {
    const SECOND = 1000;
    const { updateCountdown } = this.props;
    const { time } = this.state;
    this.setState({ time: 30 });
    this.countdownInterval = setInterval(() => {
      this.setTimeState();
      updateCountdown(time);
    }, SECOND);
  }

  handleRestart() {
    const { setRestart, updateCountdown } = this.props;
    const MAX_TIME = 30;
    updateCountdown(MAX_TIME);
    clearInterval(this.countdownInterval);
    this.setNewInterval();
    setRestart(false);
  }

  disableBtns() {
    const btns = document.querySelectorAll('.alternativas');
    btns.forEach((btn) => {
      btn.disabled = true;
    });
  }

  render() {
    const { time } = this.state;
    return (
      <p className="timer">{ `Tempo restante: ${time}` }</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCountdown: (time) => dispatch(updateCountDownAction({ time })),
});

Timer.propTypes = {
  updateCountdown: PropTypes.func.isRequired,
  stopCount: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  setRestart: PropTypes.func.isRequired,
  restart: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
