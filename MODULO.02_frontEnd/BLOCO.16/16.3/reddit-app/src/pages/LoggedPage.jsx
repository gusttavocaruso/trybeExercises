import { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedPage extends Component {
  render() {
    return (
      <div className="conteiner">
        <h2>Logged page</h2>
        <Link to="/" className="button">Return</Link>
      </div>
    )
  }
}

export default LoggedPage;
