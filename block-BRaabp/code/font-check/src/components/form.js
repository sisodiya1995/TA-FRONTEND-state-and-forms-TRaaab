import React from "react";

class From extends React.Component {
    constructor(){
        super()
        this.state = {
          text : ""
        }
    }

    handleChage = (e) =>{
      console.log(e.target.value)
      this.setState({
           text : e.target.value
      })
    }
    render (){
        return (
            <>
            <input type="text" onChange={this.handleChage} placeholder="Type somthing"/>
            <div className="boxes">
            <div className="box">
                <div className="font-name">
                    <span>Mukta</span>
                    <small>style 1</small>
                </div>
                <p className="mukta">{this.state.text}</p>
            </div>
            <div className="box">
            <div className="font-name">
                    <span>Bangla</span>
                    <small>style 1</small>
                </div>
                <p className="bangle">{this.state.text}</p>
            </div>
            <div className="box">
            <div className="font-name">
                    <span>Oswald</span>
                    <small>style 5</small>
                </div>
                <p className="oswald">{this.state.text}</p>
            </div>
            </div >
            
            </>
        )
    }
}

export default From;