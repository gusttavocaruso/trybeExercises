import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerCreator } from '../redux/action';

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      idade: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    const { nome, idade, email, password } = this.state;

    return (
      <div className="conteiner">
        <fieldset>
        <h2>Please, set you data-infomation</h2>
          <label htmlFor="nome" className="conteiner">
            Nome:
            <input
              type="text"
              name="nome"
              id="nome"
              onChange={ this.handleChange }
              value={ nome }
              required
            />
          </label>
          <label htmlFor="idade" className="conteiner">
            Idade:
            <input
              type="text"
              name="idade"
              id="idade"
              onChange={ this.handleChange }
              value={ idade }
              required
            />
          </label>
          <label htmlFor="email" className="conteiner">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              onChange={ this.handleChange }
              value={ email }
              required
            />
          </label>
          <label htmlFor="password" className="conteiner">
            Senha:
            <input
              type="text"
              name="password"
              id="password"
              onChange={ this.handleChange }
              value={ password }
              required
            />
          <Link
            to="/clientes"
            className="button"
            onClick={ () => this.onSubmitForm() }
            required>
            DO IT!
          </Link>
          <Link to="/login" className="button"> BACK </Link>
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  userLogin: loginReducer});

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (state) => dispatch(registerCreator(state)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
