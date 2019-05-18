import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UserDetail extends React.Component {
  checkResponse = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const user = this.props.user.info.data;
      return (
        <div>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.checkResponse()}
        <Link to="/">Return to main page</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(UserDetail);
