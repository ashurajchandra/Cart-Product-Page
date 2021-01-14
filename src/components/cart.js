import React, { useState } from "react";
import { CartItem } from "./index";
const Cart = (props) => {
  const { items, handleClose, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("items in cart", items);
  console.log("items.name:", items.items[0].name);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 id="my-cart-heading">My Cart</h1>
        {items.items.map((item) => (
          <CartItem item={item} />
        ))}
        <button type="button" id="close-btn" onClick={() => handleClose()}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Cart;
