import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleInc = () => {
    //console.log(e.target.innerText)
if(this.state.counter % 5 === 0){
    this.setState({
        counter: this.state.counter + 5,
      });
}

if(this.state.counter === 0 ){
    this.setState({
        counter: this.state.counter + 1,
      });
}
    
  };

  handleInc5 = (e) => {
    this.setState({
      counter: Number(e.target.innerText),
    });
  };

  handleDec = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <p>{this.state.counter}</p>

        <h2>Steps</h2>
        <button
          onClick={(e) => {
            this.handleInc5(e);
          }}
        >
          5
        </button>
        <button onClick={this.handleInc}>10</button>
        <button onClick={this.handleInc}>15</button>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default Counter;
