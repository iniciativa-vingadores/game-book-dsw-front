import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Material ui button example
//import Button from '@material-ui/core/Button'

//Components
import Example from "./example/Example";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Example} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
