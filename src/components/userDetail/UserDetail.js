import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../actions";
import UserForm from "../userForm/UserForm";

class UserDetail extends React.Component {
  state = {
    showEdit: false
  };

  checkResponse = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const user = this.props.user.info.data;
      return (
        <div>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/" />
        </div>
      );
    }
  };

  //Edit e delete nao functionam eu n sei pq
  onSubmitForm = terms => {
    //const token = this.props.user.auth.data.token;
    //this.props.updateUser(token, terms.name, terms.email, terms.password);
    //this.setState({ showEdit: false });
  };

  onButtonDelete = _ => {
    //const token = this.props.user.auth.data.token;
    //this.props.deleteUser(token);
    //this.setState({ active: false });
    return <Redirect to="/" />;
  };

  showEditForm = _ => {
    if (this.state.showEdit === true) {
      return (
        <div>
          <UserForm onSubmitForm={this.onSubmitForm} type="Edit Perfil" />
        </div>
      );
    } else return <div />;
  };

  render() {
    return (
      <div>
        {this.checkResponse()}
        <button
          type="button"
          onClick={_ => this.setState({ showEdit: !this.state.showEdit })}
        >
          {!this.state.showEdit ? "Edit Perfil" : "Cancel"}
        </button>
        <br />
        <br />
        {this.showEditForm()}
        <br />
        <br />
        <button type="button" onClick={this.onButtonDelete}>
          Delete Account
        </button>
        <br />
        <br />
        <Link to="/">Return to main page</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { updateUser, deleteUser }
)(UserDetail);
