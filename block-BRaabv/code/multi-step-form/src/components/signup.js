import React from "react";
import Message from "./message";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  handleClick = () => {
    this.setState({
      isClicked: true,
    });
  };

  render() {
    return (
      <>
        {this.state.isClicked === false ? (
          <div>
            <span>
              <button> 1 </button>Sign up
            </span>
            <span>
              <button> 2</button>message
            </span>
            <span>
              <button> 3</button>checkbox
            </span>
            <form>
              <small>step 1/3</small>
              <h2>Sign Up</h2>
              <label htmlFor="firstname">First Name</label> <br />
              <input type="text" id="firstname" name="firstname" />
              <br></br>
              <label htmlFor="lastname">Last Name</label> <br></br>
              <input type="text" id="lastname" name="lastname" /> <br></br>
              <label htmlFor="birth">Date of Birth</label>
              <br></br>
              <input type="date" id="birth" name="birth" />
              <br></br>
              <label htmlFor="email">Email Address</label>
              <br></br>
              <input type="text" id="email" name="email" />
              <br></br>
              <label htmlFor="address">Address</label>
              <br></br>
              <input type="text" id="address" name="address" />
              <hr />
              <button onClick={this.handleClick}>Next Step</button>
            </form>
          </div>
        ) : (
          <Message />
        )}
      </>
    );
  }
}
export default Signup;
