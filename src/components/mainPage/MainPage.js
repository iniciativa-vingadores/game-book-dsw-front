import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions";

class MainPage extends React.Component {
  state = {
    active: false
  };
  componentDidMount() {
    if (this.props.user !== null && this.props.user.auth !== undefined) {
      this.props.getUser(this.props.user.auth.data.token);
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  checkResponse = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const user = this.props.user.info.data;
      return (
        <Link to={`/users/${user.id}`}>
          <button>{`${user.name} detail`}</button>
        </Link>
      );
    }
    return;
  };

  //TODO(): Fazer o html css tela principal
  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <Link to="/login">
            <button>{this.state.active ? "Logout" : "Login"}</button>
          </Link>
          <br />
          <br />
          <Link to="/register">
            <button>Register</button>
          </Link>
          <br />
          <br />
          {this.checkResponse()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { getUser }
)(MainPage);
