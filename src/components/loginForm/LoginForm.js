import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { Link } from "react-router-dom";

//import material ui
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//import ccs
import "./LoginForm.css";

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
            <Link to="/">
              <Typography>Login successful, go to Main</Typography>
            </Link>
          </div>
        );
      } else {
        return (
          <div>
            <Typography>{this.props.user.auth.message}</Typography>
          </div>
        );
      }
    }
    return;
  };

  render() {
    //TODO(): Desenhar a tela de login
    return (
      <div>
        <div className="authform">
          <img className="imagem" src="./book.png" />
          <form className="form-wrapper" onSubmit={e => e.preventDefault()}>
            <TextField
              variant="outlined"
              label="email"
              type="textfield"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <br />
            <TextField
              label="senha"
              variant="outlined"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <br />
            <Button
              variant="contained"
              onClick={_ =>
                this.props.loginUser(this.state.email, this.state.password)
              }
            >
              <strong>Login</strong>
            </Button>
          </form>
        </div>
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
