import React from "react";
import Checkbox from "./checkbox";
import Signup from "./signup";
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNext: false,
      isBack: false,
    };
  }
  handleClick = () => {
    this.setState({
      isNext: true,
    });
  };
  handleBack = () => {
    this.setState({
      isBack: true,
    });
  };
  render() {
    return (
      <>
        {this.state.isNext === true ? (
          <Checkbox />
        ) : (
          <div>
            <span>
              <button> ✅</button> Sign up
            </span>
            <span>
              <button> 2</button>message
            </span>
            <span>
              <button> 3</button>checkbox
            </span>
            <form>
              <small>step 2/3</small>
              <h2>Message</h2>
              <label htmlFor="message">message</label> <br></br>
              <input type="text" id="message" name="message" />
              <br></br>
              <input type="radio" id="check-1" name="check-1" />
              <label htmlFor="check-1">The number one choice</label>
              <br></br>
              <input type="radio" id="check-2" name="check-2" />
              <label htmlFor="check-2">The number one choice</label>
              <hr></hr>
              <button>Back</button>
              <button onClick={this.handleClick}>Next Step</button>
            </form>
          </div>
        )}
        {this.state.isBack === true ? <Signup /> : ""}
      </>
    );
  }
}

export default Message;
