import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

import ListBook from "../listBook/ListBook";

class MainPage extends React.Component {
  state = {
    active: false
  };

  componentDidMount() {
    const { user } = this.props;
    if (!!user && !!user.auth) {
      if (user.info === undefined || user.info === null || user.info === "") {
        const { auth } = this.props.user;
        this.props.getUser(auth.token, auth.id);
      }
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    return (
      <div>
        <ListBook />
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
