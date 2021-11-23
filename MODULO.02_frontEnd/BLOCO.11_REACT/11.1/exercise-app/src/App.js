import './App.css';
import React from 'react';
import { createPortal } from 'react-dom';

class App extends React.Component {
  render() {

    const compromissos = [
      'compromisso 1',
      'compromisso 2',
      'compromisso 3',
      'compromisso 4',
    ];

    const Task = (value) => {
      return value;
    }

    return (
      <div>

        <h1> {Task('workingOn')} </h1>

        <ul> { compromissos.map((comp) =>
          <li> {comp} </li>) }
        </ul>

      </div>
    );
  }
}

export default App;
