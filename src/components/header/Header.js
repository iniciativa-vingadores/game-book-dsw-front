import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions";

//import materialui
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

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
    }
    return;
  };

  //TODO(): Fazer o html css tela principal
  render() {
    const title = "Game Book - plataforma para livros jogos";
    return (
      <div className="root">
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit" className="grow">
              {title}
            </Typography>
            <Link to="/login">
              <Button className="button">
                {this.state.active ? "Logout" : "Login"}
              </Button>
            </Link>
            <Link to="/register">
              <Button className="button">Register</Button>
            </Link>
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
