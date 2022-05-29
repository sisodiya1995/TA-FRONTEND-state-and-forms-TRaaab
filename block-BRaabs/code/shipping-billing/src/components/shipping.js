import React from "react";
import Billing from "./billing";
class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,

      address: "",
      zip: "",
      city: "",
      country: "",

      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    //let element = this.state[name];

    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isChecked: !prevState.isChecked,
      };
    });
  };
  render() {
    return (
      <>
        <div className="form-section">
          <form className="shipping">
            <h2>Shipping Address</h2>
            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.address}
              name="address"
              id="address"
              placeholder="Enter address"
            />{" "}
            <br></br>
            <label htmlFor="zip">ZIP/Postal Code</label>
            <br />
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.zip}
              name="zip"
              id="zip"
              placeholder="Enter zipcode"
            />{" "}
            <br></br>
            <label htmlFor="city">City</label>
            <br />
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.city}
              name="city"
              id="city"
              placeholder="Enter city name"
            />{" "}
            <br></br>
            <label htmlFor="country">Country</label>
            <br />
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.country}
              name="country"
              id="country"
              placeholder="Enter country name"
            />{" "}
          </form>

          <form className="billing">
            <h2>Billing Address</h2>
            <input
              className="check"
              type="checkbox"
              id="check"
              onClick={this.handleClick}
            />
            <label htmlFor="check">Same as the Shipping Address?</label>
            {this.state.isChecked === true ? (
              <Billing info={this.state} />
            ) : (
              <Billing info={this.state.shipping} />
            )}
          </form>
          
        </div>
      </>
    );
  }
}

export default Shipping;
