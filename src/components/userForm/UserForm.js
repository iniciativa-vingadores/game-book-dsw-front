import React from "react";

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
        <input
          type="textfield"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <input
          type="textfield"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="textfield"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <br />
        <button type="button" onClick={this.onButtonReturn}>
          {type}
        </button>
      </form>
    );
  }
}

export default UserForm;
