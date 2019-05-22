import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

import ListBook from "../listBook/ListBook";

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
