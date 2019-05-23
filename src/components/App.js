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

class App extends React.Component {
  checkUserDetail = _ => {
    if (this.props.user !== null && this.props.user.info !== undefined) {
      const userId = this.props.user.info.data.id;
      return <Route path={`/users/${userId}`} exact component={UserDetail} />;
    }
  };

  checkBookDetail = _ => {
    if (this.props.book !== null && this.props.book.detail !== undefined) {
      const bookId = this.props.book.detail.data.id;
      return (
        <div>
          <Route path={`/books/${bookId}`} exact component={BookDetail} />
          <Route path={`/books/read/${bookId}`} exact component={ReadBook} />
        </div>
      );
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
            {this.checkUserDetail()}
            {this.checkBookDetail()}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, book: state.book };
};

export default connect(mapStateToProps)(App);
