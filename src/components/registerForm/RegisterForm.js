import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions";
import UserForm from "../userForm/UserForm";

class RegisterForm extends React.Component {
  checkResponse = _ => {
    const response = this.props.user;
    if (response !== null && response.info !== undefined) {
      if (response.info.code === 201) {
        return (
          <div>
            <Link to="/login">Successful register, go to Login</Link>
          </div>
        );
      } else {
        return <div>{response.info.message}</div>;
      }
    }
    return;
  };

  onSubmitForm = terms => {
    this.props.registerUser(terms.name, terms.email, terms.password);
  };

  render() {
    //TODO(): Fazer o html css tela de registro
    return (
      <div>
        <UserForm onSubmitForm={this.onSubmitForm} type="Register" />
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
