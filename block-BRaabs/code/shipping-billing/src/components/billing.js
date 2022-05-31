import React from "react";

class Billing extends React.Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter address"
            value={this.props.info.address}
          />{" "}
          <br></br>
          <label htmlFor="zip">ZIP/Postal Code</label>
          <br />
          <input
            type="text"
            name="zip"
            id="zip"
            placeholder="Enter zipcode"
            value={this.props.info.zip}
          />{" "}
          <br></br>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter city name"
            value={this.props.info.city}
          />{" "}
          <br></br>
          <label htmlFor="country">Country</label>
          <br />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Enter country name"
            value={this.props.info.country}
          />{" "}
        </form>
      </>
    );
  }
}

export default Billing;
