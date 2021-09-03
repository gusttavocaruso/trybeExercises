import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoggedPage extends Component {
  render() {
    const { userLogin, userRegistration } = this.props;
    const { email, password } = userLogin;
    // const { nome, email, password } = userRegistration;
    
    const check = userRegistration.map((user) =>
      (user.email === email) && (user.password === password));
    // {
    //   if (user.email === email && user.password === password) {
    //     return (
    //       <span>Welcome { user.name }</span>
    //     );
    //   } return(<span>unregister user</span>)
    // });
    return (
      <div className="conteiner">
        <h2>Logged page</h2>
        {(!check ?
          <span>Unknow user. Please, register yourself</span> :
          <p>Welcome { userRegistration.nome }</p> )}
        <Link to="/" className="button">Return</Link>  
      </div>
    )
  }
}

const mapStateToProps = ({ loginReducer, registerReducer }) => ({
  userRegistration: registerReducer,
  userLogin: loginReducer,
});

export default connect(mapStateToProps)(LoggedPage);
