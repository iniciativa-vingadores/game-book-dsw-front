import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Material ui button example
//import Button from '@material-ui/core/Button'

//Components
import LoginForm from "./loginForm/LoginForm";

const App = _ => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={LoginForm} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
