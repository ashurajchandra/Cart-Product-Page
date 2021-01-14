import { ADD_TO_CART } from "./actionTypes";

// action to add item to cart
export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item,
  };
}
