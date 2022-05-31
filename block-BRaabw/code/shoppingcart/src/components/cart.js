import React from "react";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = { isDisplay: false };
  }

  handleClick = () => {
    this.setState({
      isDisplay: true,
    });
  };

  handleRemove = () => {
    this.setState({
      isDisplay: false,
    });
  };
  render() {
    return (
      <div className="carts">
        <>
          {this.state.isDisplay === false ? (
            <div>
              <img
                onClick={this.handleClick}
                style={{ backgroundColor: "black" }}
                src="/static/bag-icon.png"
                alt="cart-img"
                className="cart-logo"
              />

              <span className="items">{this.props.info.length}</span>
            </div>
          ) : (
            <div className="cart-products">
              <div className="summary-title">
                <small>Shopping Summary</small>
                <button className="btn-4" onClick={this.handleRemove}>
                  X
                </button>
              </div>

              {this.props.info.map((p) => {
                return (
                  <>
                    <div className="cartitem">
                      <figure>
                        <img
                          src={`/static/products/` + `${p.sku}` + `_1.jpg`}
                          alt="img"
                          className="cart-img"
                        />
                      </figure>

                      <p>{p.title}</p>
                      <p>{p.availableSizes}</p>
                      <p>
                        {p.currencyFormat} {p.price}
                      </p>
                      <p>Qty : 1</p>
                    </div>
                  </>
                );
              })}

              <p className="total">
                SubTotal :{" "}
                {this.props.info.reduce((acc, cv) => {
                  acc = acc + cv.price;
                  return acc;
                }, 0)}
              </p>
            </div>
          )}
        </>
      </div>
    );
  }
}
export default Cart;
