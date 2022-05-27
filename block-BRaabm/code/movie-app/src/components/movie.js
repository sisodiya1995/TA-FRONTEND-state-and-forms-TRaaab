import React from "react";
import data from "../data.json";
import Modal from "./modal";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data,
      isDisplay :true,
      display :""
    };
  }
  handlemovie =(movie,i) =>{
     this.setState({
        display : this.state.display === i ? "" : i ,
        
     })
     console.log(this.state.isDisplay)
  }
  render() {
    return (
      <>
        {this.state.movies.map((movie ,i) => {
          return (
            <>
              <div key ={movie.id} className="movie">
                <figure>
                  <img src={movie.Images[0]} alt="movie" />
                </figure>

                <h3>Title : {movie.Title}</h3>
                <p>Released :{movie.Released}</p>
                <button className="info-btn" onClick={() =>{this.handlemovie(movie,i)}}>More Info</button>
                
                {i === this.state.display ? <Modal {...movie} key={movie.id}/> : ""}
                
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default Movie;
