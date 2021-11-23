import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return(
      <div className="conteiner">
        <div className="component">
          <h2>Welcome to Gus Registration Page</h2>
          <Link
            to="/login"
            className="button">
            SING IN
          </Link>
          <div className="imgInitial"/>
        </div>
      </div>
    );
  }
}
