import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { Redirect } from "react-router-dom";

//import material ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//import ccs
import "./LoginForm.css";

class LoginForm extends React.Component {
  state = {
    email: { value: "", isValid: false, message: "" },
    password: { value: "", isValid: false, message: "" }
  };

  onChangeValue = e => {
    this.setState({
      [e.target.name]: { ...this.state[e.target.name], value: e.target.value }
    });
  };

  onButtonLogin = _ => {
    const terms = {
      email: this.state.email.value,
      password: this.state.password.value
    };

    this.props.loginUser(terms.email, terms.password);
  };

  render() {
    if (!!this.props.user && !!this.props.user.auth) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <div className="authform">
            <img className="imagem" alt="logo" src="./book.png" />
            <form className="form-wrapper" onSubmit={e => e.preventDefault()}>
              <TextField
                className="input"
                variant="outlined"
                label="email"
                type="textfield"
                name="email"
                value={this.state.email.value}
                onChange={this.onChangeValue}
              />
              <br />
              <TextField
                className="input"
                label="senha"
                variant="outlined"
                type="password"
                name="password"
                value={this.state.password.value}
                onChange={this.onChangeValue}
              />
              <br />
              <Button
                className="myButton"
                variant="contained"
                onClick={_ => this.onButtonLogin()}
              >
                <strong>Login</strong>
              </Button>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
