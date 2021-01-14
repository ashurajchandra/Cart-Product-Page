import React, { useState } from "react";
import { connect } from "react-redux";
import Cart from "./cart";
function Header(props) {
  const { items } = props;
  const [getCart, setCart] = useState(false);
  const { isItemPresent } = props.items;

  function handleClose() {
    setCart(false);
  }
  return (
    <div>
      <div className="header-part">
        <h3>START SELLING PRODUCTS OR BUY THEM FROM ANYWHERE!</h3>
        <img
          src="https://image.flaticon.com/icons/png/128/3031/3031157.png"
          alt="close-button"
        />
      </div>
      <div className="header-part-2">
        <div>
          {" "}
          <select id="select">
            <option>USD</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div>
          <h3>BONFIRE</h3>
        </div>
        <div className="header-cart-count">
          {isItemPresent ? (
            getCart ? (
              <Cart handleClose={handleClose} show={getCart} items={items} />
            ) : (
              <h4 onClick={() => setCart(true)}>Cart({items.items[0].qty})</h4>
            )
          ) : (
            <h4>Cart(0)</h4>
          )}
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(Header);
