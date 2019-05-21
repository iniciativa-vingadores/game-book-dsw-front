import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions";

//import materialui
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//import css
import "./Header.css";

class Header extends React.Component {
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

  checkUserActive = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const user = this.props.user.info.data;
      return (
        <Link to={`/users/${user.id}`}>
          <Button className="button">{`${user.name} detail`}</Button>
        </Link>
      );
    } else {
      return (
        <div>
          <Link to="/login">
            <Button className="button">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="button">Register</Button>
          </Link>
        </div>
      );
    }
  };

  //TODO(): Fazer o html css tela principal
  render() {
    return (
      <div className="root">
        <AppBar>
          <Toolbar>
            <IconButton>
              <img src="./2book.png" alt="logo" className="icone" />
            </IconButton>
            {/* <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase

               placeholder="Search…" />
            </div> */}
            <div className="grow" />
            {this.checkUserActive()}
          </Toolbar>
        </AppBar>
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
)(Header);
