import React from "react";
class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      conpassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        conpassword: "",
      },
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    //let element = this.state[name];
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = value.length < 3 ? "Username must be at least 3 character" : "";
        break;
        case "email":
            errors.email = value.includes("@") ? "" : "Email is not invalid";
            break;
            case "password":
                errors.password = value.length < 6 ? "Password must be at least 6 character" : "";
            break;
            case "conpassword":
                errors.conpassword = this.state.password === this.state.conpassword ? "" : "Password are not correct";
            break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="username">Username </label>
          <br />
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.username}
            name="username"
            id="username"
          />{" "}
          
          
          <p>{this.state.errors.username}</p>
          <label htmlFor="email">Email </label>
          <br />
          <input
            type="text"
            onChange={this.handleInput}
            name="email"
            value={this.state.email}
            id="email"
          />{" "}
          <p>{this.state.errors.email}</p>
          
          <label htmlFor="password">Password </label>
          <br />
          <input
            type="text"
            onChange={this.handleInput}
            name="password"
            value={this.state.password}
            id="password"
          />{" "}
          <p>{this.state.errors.password}</p>
          
          <label htmlFor="conpassword">Confirm Password </label>
          <br />
          <input
            type="text"
            onChange={this.handleInput}
            name="conpassword"
            value={this.state.conpassword}
            id="conpassword"
          />{" "}
          <p>{this.state.errors.conpassword}</p>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default Validation;
