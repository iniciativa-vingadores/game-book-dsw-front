import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listBook } from "../../actions";
import { Typography } from "@material-ui/core";

class ListBook extends React.Component {
  componentDidMount() {
    this.props.listBook();
  }

  renderList = _ => {
    if (this.props.book !== null && this.props.book.list !== undefined) {
      if (this.props.book.list.code === 200) {
        const list = this.props.book.list.data.results;
        return list.map(element => {
          return (
            <li key={element.id}>
              <Link to="/books/">{element.name}</Link>
              <br />
              <br />
            </li>
          );
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <Typography variant="display3">
            Livros disponiveis para jogar
          </Typography>
        </div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { listBook }
)(ListBook);
