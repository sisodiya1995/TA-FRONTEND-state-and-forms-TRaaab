import React from "react";
import questions from "../data";
class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }

  handleAns = (q, i) => {
    this.setState({
      answer: this.state.answer === i ? "" : i,
    });
  };
  render() {
    return (
      <>
        {questions.map((q, i) => {
          return (
            <>
              <div className="question">
                <div
                  onClick={() => {
                    this.handleAns(q, i);
                  }}
                  className={i === this.state.answer ? "green" : ""}
                >
                  {q.Q}
                </div>
              </div>

              <p className="answer">
                {i === this.state.answer ? <p>{q.A} </p> : ""}{" "}
              </p>
            </>
          );
        })}
      </>
    );
  }
}

export default Faq;
