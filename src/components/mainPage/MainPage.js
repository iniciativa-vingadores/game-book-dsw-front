import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  //TODO(): Fazer o html css tela principal
  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <br />
          <br />
          <Link to="/register">
            <button>Register</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default MainPage;
