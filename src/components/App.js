import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import MainPage from "./mainPage/MainPage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";
import UserDetail from "./userDetail/UserDetail";
import BookDetail from "./bookDetail/BookDetail";
import Header from "./header/Header";
import ReadBook from "./readBook/ReadBook";

class App extends React.Component {
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
            <Route path="/books/:id" exact component={BookDetail} />
            <Route path="/books/read/:id" exact component={ReadBook} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
