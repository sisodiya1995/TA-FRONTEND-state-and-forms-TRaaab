import React from "react";
//import ReactDOM from "react-dom";
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/images/phone.jpg",
    }
  }

  handlejpg = (e) => {
      //console.log(e.target.innerText)
    this.setState ({
      image: `/images/${e.target.innerText}.jpg`,
    });
    //console.log(this.setState.image)
  };
  
  handlejpeg = (e) => {
    this.setState ({
      image: `/images/${e.target.innerText}.jpeg`,
    });
    console.log(this.setState.image);
  };
  render() {
    return (
      <>
        <h2>Display the image</h2>
        <img src={this.state.image} alt="" />
        <button onClick={(e) =>{this.handlejpg(e)}}>basketball</button>
        <button onClick={(e) =>{this.handlejpeg(e)}}>pubg</button>
        <button onClick={(e) =>{this.handlejpg(e)}}>laptop</button>
        <button onClick={(e) =>{this.handlejpg(e)}}>phone</button>
        <button onClick={(e) =>{this.handlejpg(e)}}>tiger</button>
        <button onClick={(e) =>{this.handlejpg(e)}}>cricket</button>
      </>
    )
  }
}

export default Display;
