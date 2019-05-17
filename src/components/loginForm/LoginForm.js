import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  checkResponse = _ => {
    if (this.props.user !== null && this.props.user.auth !== undefined) {
      if (this.props.user.auth.code === 200) {
        return (
          <div>
            <Link to="/">Login successful, go to Main</Link>
          </div>
        );
      } else {
        return <div>{this.props.user.auth.message}</div>;
      }
    }
    return;
  };

  render() {
    //TODO(): Desenhar a tela de login
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="textfield"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="textfield"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <button
            onClick={_ =>
              this.props.loginUser(this.state.email, this.state.password)
            }
          >
            Login
          </button>
        </form>
        <br />
        <div>{this.checkResponse()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
