import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  handleRemove = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };
  render() {
    return (
      <>
        {this.state.display ? (
          <div className="modal">
            <button
              className="close"
              onClick={() => {
                this.handleRemove();
              }}
            >
              {" "}
              X
            </button>
            <p> Title :{this.props.Title}</p>
            <p>Year :{this.props.Year}</p>
            <p>Rated :{this.props.Rated}</p>
            <p>Released :{this.props.Released}</p>
            <p>Runtime :{this.props.Runtime}</p>
            <p>Genre :{this.props.Genre}</p>
            <p>Director :{this.props.Director}</p>
            <p>Actors :{this.props.Actors}</p>
            <p>Language :{this.props.Language}</p>
            <p>Country :{this.props.Country}</p>
            <p className="movie-img"> Images :
              {this.props.Images.map((i) => {
                return (
                  <>
                  <figure> <img src={i} alt="img" className="images" /></figure>
                   
                  </>
                );
              })}
            </p>
            
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Modal;
