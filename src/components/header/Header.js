import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions";

//import materialui
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";

//import css
import "./Header.css";

class Header extends React.Component {
  state = {
    active: false,
    anchorEl: null
  };

  componentDidMount() {
    if (this.props.user !== null && this.props.user.auth !== undefined) {
      this.props.getUser(this.props.user.auth.data.token);
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  checkUserActive = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const user = this.props.user.info.data;
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
            <MenuItem onClick={this.handleClose}>Sair</MenuItem>
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

  //TODO(): Fazer o html css tela principal
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
