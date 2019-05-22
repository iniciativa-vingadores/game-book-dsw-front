import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../actions";
import UserForm from "../userForm/UserForm";

class RegisterForm extends React.Component {
  state = { active: false };

  checkResponse = _ => {
    // const response = this.props.user;
    // if (response !== null && response.info !== undefined) {
    //   if (response.info.code === 201) {
    //     return <Redirect to="/login" />;
    //   } else {
    //     return <div>{response.info.message}</div>;
    //   }
    // }

    if (this.state.active) {
      return <Redirect to="/login" />;
    }
    return;
  };

  onSubmitForm = terms => {
    this.setState({ active: true });
    // this.props.registerUser(terms.name, terms.email, terms.password);
  };

  render() {
    //TODO(): Fazer o html css tela de registro
    return (
      <div>
        <UserForm onSubmitForm={this.onSubmitForm} type="REGISTRAR" />
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
