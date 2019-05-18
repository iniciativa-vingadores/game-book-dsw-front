import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

//Components
import MainPage from "./mainPage/MainPage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";
import UserDetail from "./userDetail/UserDetail";

class App extends React.Component {
  checkUserDetail = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const userId = this.props.user.info.data.id;
      return <Route path={`/users/${userId}`} exact component={UserDetail} />;
    }
  };

  checkBookDetail = _ => {};

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
            {this.checkUserDetail()}
            {this.checkBookDetail()}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
