import React from "react";
import Message from "./message";
class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      isBack: false,
    };
  }
  handleBack = () => {
    this.setState({
      isBack: true,
    });
  };

  render() {
    return (
      <>
        {this.state.isBack === true ? (
          <Message />
        ) : (
          <div>
            <span>
              <button> ✅</button>Sign up
            </span>
            <span>
              <button>✅ </button> message
            </span>
            <span>
              <button> 3</button>checkbox
            </span>
            <form>
              <small>step 3/3</small>
              <h2>Checkbox</h2>

              <label htmlFor="message">message</label> <br></br>
              <input type="text" id="message" name="message" /> <br></br>
              <input type="radio" id="check-1" name="check-1" />
              <label htmlFor="check-1">I want to add this options</label>
              <input type="radio" id="check-2" name="check-2" /> <br></br>
              <label htmlFor="check-2">Let me click this box</label>
              
              <hr></hr>
              <button onClick={this.handleBack}>Back</button>
              <button>submit</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default Checkbox;
