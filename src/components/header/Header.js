import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logoutUser, removeDetailUser } from "../../actions";

//import materialui
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//import css
import "./Header.css";

class Header extends React.Component {
  state = {
    active: false,
    anchorEl: null
  };

  componentDidMount() {
    if (!!this.props.user && !!this.props.user.auth) {
      if (this.props.user.info === undefined) {
        const { auth } = this.props.user;
        this.props.getUser(auth.token, auth.id);
      }
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = _ => {
    this.setState({ anchorEl: null });
  };

  handleCloseLogout = _ => {
    this.setState({ anchorEl: null, active: false });
    this.props.logoutUser();
    this.props.removeDetailUser();
  };

  checkUserActive = _ => {
    if (!!this.props.user && !!this.props.user.info) {
      const user = this.props.user.info;
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);

      return (
        <div>
          <IconButton
            aria-owns={open ? "menu-appbar" : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={this.handleClose}
          >
            <Link to={`/users/${user.id}`}>
              <MenuItem onClick={this.handleClose}>Meu Perfil</MenuItem>
            </Link>
            <MenuItem onClick={this.handleClose}>Criar história</MenuItem>
            <MenuItem onClick={this.handleCloseLogout}>Sair</MenuItem>
          </Menu>
        </div>
      );
    } else {
      return (
        <div className="loginRegister">
          <Link to="/login">
            <Button className="button">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="button">Registrar</Button>
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="root">
        <AppBar>
          <Toolbar className="toolbar">
            <Link to="/">
              <IconButton>
                <img src="/book_white.png" alt="logo" className="icone" />
              </IconButton>
            </Link>
            <div>
              <SearchIcon className="searchIcon" />
            </div>
            <InputBase placeholder="Pesquisar.." className="search" />
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
  { getUser, logoutUser, removeDetailUser }
)(Header);
