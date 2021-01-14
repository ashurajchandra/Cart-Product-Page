import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="cart-Item">
        <div>
          <img id="cart-item-img" src={item.image} />
        </div>
        <div className="left-cart-item-div">
          <div id="-item-name">
            <h3>{item.name}</h3>
          </div>
          <div id="item-size">
            <h5>Size: {item.size}</h5>
            <span></span>
          </div>
          <div id="item-quantity">
            <h5>Quantity:{item.qty}</h5>
            <span> </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
