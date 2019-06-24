import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../actions";
import UserForm from "../userForm/UserForm";

class RegisterForm extends React.Component {
  onSubmitForm = terms => {
    this.props.registerUser(terms.name, terms.email, terms.password);
  };

  render() {
    const response = this.props.user;
    if (!!response && !!response.auth) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <UserForm onSubmitForm={this.onSubmitForm} type="REGISTRAR" />
          <br />
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
  { registerUser }
)(RegisterForm);
