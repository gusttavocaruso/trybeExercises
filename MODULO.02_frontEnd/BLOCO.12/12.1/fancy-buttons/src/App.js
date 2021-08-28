import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
    });
  }
  
  handleButtonTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
    });
  }
  
  handleButtonThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;

    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = { clicksBtnOne }
        </button>
        <button
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = { clicksBtnTwo }
        </button>
        <button
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = { clicksBtnThree }
        </button>
      </div>
    );
  }
}

export default App;
