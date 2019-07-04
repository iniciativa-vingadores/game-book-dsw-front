import React from "react";

import { connect } from "react-redux";
import { detailBook } from "../../actions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import BookIcon from "@material-ui/icons/Book";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";

import "./ItemBook.css";

class ItemList extends React.Component {
  state = { response: false };

  countRateStars = rate => {
    switch (Math.trunc(rate)) {
      case 1:
        return (
          <div>
            <StarIcon className="star" />
          </div>
        );
      case 2:
        return (
          <div>
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
        );
      case 3:
        return (
          <div>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
        );
      case 4:
        return (
          <div>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
        );
      default:
        return (
          <div>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
        );
    }
  };

  onButtonListItem = id => {
    this.props.detailBook(id);
    this.setState({ response: true });
  };

  render() {
    if (
      this.state.response &&
      this.props.book !== null &&
      this.props.book.detail !== undefined
    ) {
      if (this.props.book.detail.code === 200) {
        this.setState({ response: false });
        this.props.onSubmitBookDetail(this.props.book.detail.data);
      }
    }

    const { key, name, rate, keywords } = this.props;
    return (
      <div>
        <Card className="my-card">
          <ListItem button onClick={_ => this.onButtonListItem(key)}>
            <ListItemAvatar>
              <Avatar>
                <BookIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={keywords.map(e => `[${e}] `)}
            />
            <ListItemSecondaryAction>
              {this.countRateStars(rate)}
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { book: state.book };
};

export default connect(
  mapStateToProps,
  { detailBook }
)(ItemList);
