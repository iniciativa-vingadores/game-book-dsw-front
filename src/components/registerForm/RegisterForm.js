import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions";

class RegisterForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  checkResponse = _ => {
    const response = this.props.user;
    if (response !== null && response.info !== undefined) {
      if (response.info.code === 201) {
        return (
          <div>
            <Link to="/">{`Hello ${
              response.info.data.name
            }, go to Main!`}</Link>
          </div>
        );
      } else {
        return <div>{response.info.message}</div>;
      }
    }
    return;
  };

  render() {
    //TODO(): Fazer o html css tela de registro
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="textfield"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
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
              this.props.registerUser(
                this.state.name,
                this.state.email,
                this.state.password
              )
            }
          >
            Register
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
  { registerUser }
)(RegisterForm);
