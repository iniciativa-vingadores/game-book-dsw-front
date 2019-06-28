import React from "react";
import { deleteError } from "../../actions";
import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";

import "./ErrorHandler.css";

class ErrorHandler extends React.Component {
  state = {
    open: true
  };

  handleClose = _ => {
    this.setState({ open: false });
  };

  render() {
    if (this.props.message !== undefined) {
      return (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          key={this.props.message}
          open={this.state.open}
          onClose={this.handleClose}
          autoHideDuration={2000}
          onExited={_ => this.props.deleteError()}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.props.message}</span>}
        />
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

export default connect(
  mapStateToProps,
  { deleteError }
)(ErrorHandler);
