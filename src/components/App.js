import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Material ui button example
//import Button from '@material-ui/core/Button'

//Components
import MainPage from "./mainPage/MainPage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";

const App = _ => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/register" exact component={RegisterForm} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
