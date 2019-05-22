import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import StarIcon from "@material-ui/icons/Star";

import "./ItemBook.css";

const ItemList = ({ name, rate, keywords }) => {
  const countRateStars = _ => {
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

  return (
    <div>
      <ListItem>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary={name} secondary={keywords.map(e => `[${e}] `)} />
        <ListItemSecondaryAction>{countRateStars()}</ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default ItemList;
