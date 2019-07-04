import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser, removeDetailUser } from "../../actions";
import UserForm from "../userForm/UserForm";

class EditUser extends React.Component {
  state = {
    ok: false
  };

  onSubmitForm = terms => {
    const { auth } = this.props.user;
    const temp = {
      name: terms.name === "" ? null : terms.name,
      email: terms.email === "" ? null : terms.email,
      password: terms.password === "" ? null : terms.password
    };
    this.props.updateUser(
      auth.token,
      auth.id,
      temp.name,
      temp.email,
      temp.password
    );
  };

  componentDidUpdate() {
    if (!!this.props.user && !!this.props.user.info) {
      if (!!this.props.user.info.code) {
        if (this.props.user.info.code === 200) {
          this.setState({ ok: true });
          this.props.removeDetailUser();
        }
      }
    }
  }

  render() {
    if (this.state.ok) {
      return <Redirect to="/" />;
    }
    if (!!this.props.user && !!this.props.user.info) {
      const { info } = this.props.user;
      return (
        <div>
          <UserForm
            onSubmitForm={this.onSubmitForm}
            type="EDITAR"
            data={info}
          />
          <br />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { updateUser, removeDetailUser }
)(EditUser);
