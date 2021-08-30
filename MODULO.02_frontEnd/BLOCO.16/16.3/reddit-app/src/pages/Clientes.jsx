import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clientes extends Component {
  render() {
    const { userRegistration } = this.props;
    return (
      <div className="conteiner">
        <h2>CLIENTES CADASTRADOS PAGE</h2>
        { userRegistration.map((user, index) => {
          return (
            <ul key={ user.email }>
              <li>ID: { index+1 }</li>
              <li>Nome: { user.nome }</li>
              <li>Idade: { user.idade }</li>
              <li>Email: { user.email }</li>
              <li>Password: { user.password }</li>
            </ul>
          );
        })}
        <Link 
          className="button"
          to="/registro">
          Novo Cadastro
        </Link>
        <Link to="/login" className="button">Return</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer, registerReducer }) => ({
  userRegistration: registerReducer,
  userLogin: loginReducer,
});

export default connect(mapStateToProps)(Clientes);
