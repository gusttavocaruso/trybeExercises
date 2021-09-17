import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail, saveQuestion } from '../redux/action';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      nome: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  onSubmitForm() {
    const { onSubmit, history } = this.props;
    const { nome, email } = this.state;
    onSubmit(this.state);
    const player = { player: {
      name: nome,
      assertions: 0,
      score: 0,
      gravatarEmail: email,
    },
    };
    localStorage.setItem('state', JSON.stringify(player));
    history.push('/game-page');
  }

  async fetchApi() {
    const { submitQuestion } = this.props;
    const url = 'https://opentdb.com/api_token.php?command=request';
    const fetchResponse = await fetch(url);
    const user = await fetchResponse.json();
    localStorage.setItem('token', user.token);

    const token = localStorage.getItem('token');
    const url2 = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(url2);
    const question = await response.json();
    submitQuestion(question.results);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;
    const nameMin = 1;
    const nameAllowed = nome.length >= nameMin;
    const emailValid = () => (/\S+@\S+\.\S+/).test(email);
    return (
      <fieldset className="login">
        <label htmlFor="input-gravatar-email">
          <span className="label">Email do Gravatar:</span>
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="input-player-name">
          <span className="label">Nome do Jogador:</span>
          <input
            data-testid="input-player-name"
            type="nome"
            name="nome"
            onChange={ this.handleChange }
            value={ nome }
          />
        </label>
        <div className="login-buttons">
          <button
            data-testid="btn-play"
            disabled={ !(emailValid() && nameAllowed) }
            className="main-button"
            type="submit"
            onClick={ () => this.onSubmitForm() }
          >
            Entrar
          </button>
          <Link to="/config">
            <button
              data-testid="btn-settings"
              className="main-button"
              type="button"
            >
              Configuração
            </button>
          </Link>
        </div>
      </fieldset>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    onSubmit: (payload) => dispatch(saveEmail(payload)),
    submitQuestion: (payload) => dispatch(saveQuestion(payload)),
  }
);

export default connect(null, mapDispatchToProps)(Login);
