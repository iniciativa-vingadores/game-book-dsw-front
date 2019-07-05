import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

//Components
import MainPage from "./mainPage/MainPage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";
import UserDetail from "./userDetail/UserDetail";
import BookDetail from "./bookDetail/BookDetail";
import Header from "./header/Header";
import ReadBook from "./readBook/ReadBook";
import EditUser from "./editUser/EditUser";
import ErrorHandler from "./errorHandler/ErrorHandler";
import CreateStory from "./createStory/CreateStory";

class App extends React.Component {
  renderError = _ => {
    console.log(this.props.error);
    if (!!this.props.error && !!this.props.error.status) {
      return <ErrorHandler message={this.props.error.status.message} />;
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/users/:id" exact component={UserDetail} />
            <Route path="/users/:id/update" exact component={EditUser} />
            <Route path="/create" exact component={CreateStory} />
            <Route path="/books/:id" exact component={BookDetail} />
            <Route path="/books/read/:id" exact component={ReadBook} />
          </div>
        </BrowserRouter>
        {this.renderError()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

export default connect(mapStateToProps)(App);
