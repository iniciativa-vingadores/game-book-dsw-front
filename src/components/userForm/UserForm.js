import React from "react";
import { TextField, Button } from "@material-ui/core";

//import css
import "./UserForm.css";

class UserForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onButtonReturn = _ => {
    this.props.onSubmitForm(this.state);
  };

  render() {
    const type = this.props.type;

    return (
      <div className="format">
        <img className="imagemR" src="./book.png" alt="imageR"/>
        <form className="formwrapper" onSubmit={e => e.preventDefault()}>
          <TextField
            className="input"
            variant="outlined"
            label="name"
            type="textfield"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          <TextField
            className="input"
            variant="outlined"
            label="email"
            type="textfield"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <TextField
            className="input"
            label="senha"
            variant="outlined"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <TextField
            className="input"
            label="confirmar senha"
            variant="outlined"
            type="password"
            //onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <Button
            className="myButton"
            variant="contained"
            type="button"
            onClick={this.onButtonReturn}
          >
            <strong>{type}</strong>
          </Button>
        </form>
      </div>
    );
  }
}

export default UserForm;
