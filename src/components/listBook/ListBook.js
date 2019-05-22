import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { listBook, detailBook } from "../../actions";

//Material ui
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";

import ItemBook from "../itemBook/ItemBook";

class ListBook extends React.Component {
  componentDidMount() {
    this.props.listBook();
  }

  getBookDetail = id => {
    this.props.detailBook(id);
  };

  renderList = _ => {
    if (this.props.book !== null && this.props.book.list !== undefined) {
      if (this.props.book.list.code === 200) {
        const list = this.props.book.list.data.results;
        return list.map(e => {
          return (
            <ItemBook
              key={e.id}
              name={e.name}
              rate={e.rate}
              keywords={e.keywords}
            />
          );
        });
      }
    }
  };

  render() {
    // if (this.props.book !== null && this.props.book.detail !== undefined) {
    //   const bookId = this.props.book.detail.data.id;
    //   return <Redirect to={`/books/${bookId}`} />;
    // }

    return (
      <div>
        <div>
          <Typography>Lançamentos</Typography>
        </div>
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { listBook, detailBook }
)(ListBook);
