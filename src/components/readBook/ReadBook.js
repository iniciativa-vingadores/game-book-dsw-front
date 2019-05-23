import React from "react";
import { connect } from "react-redux";
import { readBook } from "../../actions";

import Typography from "@material-ui/core/Typography";

class ReadBook extends React.Component {
  render() {
    return <dib>ReadBook</dib>;
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { readBook }
)(ReadBook);
