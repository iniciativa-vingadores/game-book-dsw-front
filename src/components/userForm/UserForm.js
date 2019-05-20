import React from "react";
import { TextField, Button } from "@material-ui/core";

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
      <form onSubmit={e => e.preventDefault()}>
        <TextField
          variant="outlined"
          label="name"
          type="textfield"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <TextField
          variant="outlined"
          label="email"
          type="textfield"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <br />
        <TextField
          label="senha"
          variant="outlined"
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <br />
        <Button variant="contained" type="button" onClick={this.onButtonReturn}>
          {type}
        </Button>
      </form>
    );
  }
}

export default UserForm;
