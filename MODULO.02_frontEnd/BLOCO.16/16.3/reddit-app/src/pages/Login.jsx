import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginCreator } from '../redux/action';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    const { email, password } = this.state;
    return(
      <div className="conteiner">

        <fieldset>
          <h2>Please, set your login-data:</h2>
          <label htmlFor="email" className="conteiner">
            EMAIL:
            <input
              id="email"
              type="text"
              name="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password" className="conteiner">
            PASSWORD:
            <input
              id="password"
              type="text"
              name="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <Link
            to="/clientes"
            className="button"
            onClick={ () => this.onSubmitForm() }>
            LOGIN
          </Link>
            New? <br />
          <Link to="/registro">Registre Yourself</Link>
          <Link to="/" className="button">Return</Link>
        </fieldset>

      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (state) => dispatch(loginCreator(state)) }
);

export default connect(null, mapDispatchToProps)(Login);
