import { ADD_TO_CART } from "../actions/actionTypes";

// intital store state
const initialItemState = {
  items: [],
  isItemPresent: false,
};

// return state based on action types
export default function items(state = initialItemState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: [action.item],
        isItemPresent: true,
      };

    default:
      return state;
  }
}
