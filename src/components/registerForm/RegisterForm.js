import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";

class RegisterForm extends React.Component {
  render() {
    return <div>RegisterForm</div>;
  }
}

const mapStateToProps = state => {
  return { response: state.user };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterForm);
