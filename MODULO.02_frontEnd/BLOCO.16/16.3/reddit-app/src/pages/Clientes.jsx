import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clientes extends Component {
  render() {
    const { userRegistration } = this.props;
    const { email, password } = userRegistration;
    return (
      <div className="conteiner">
        <h2>CLIENTES CADASTRADOS PAGE</h2>
        <ul>
          <li>Email: { email }</li>
          <li>Password: { password }</li>
        </ul>
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
