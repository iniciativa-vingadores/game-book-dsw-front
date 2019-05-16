import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

//Link para diferentes rotas
// import { Link } from "react-router-dom";
// JSX: <Link to="rota"><Link/>

class LoginForm extends React.Component {
  render() {
    let email = "";
    let password = "";

    //TODO(): Terminar fluxo login
    return (
      <div>
        <form>
          <input
            type="textfield"
            onChange={e => (this.name = e.target.value)}
          />
          <br />
          <input
            type="textfield"
            onChange={e => (this.password = e.target.value)}
          />
          <br />
          <button onClick={_ => this.props.loginUser(email, password)}>
            Login bitch!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.user };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
