import {
  ADD_TO_CART,
  CHANGE_ITEM_QUANTITY,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from '../../types/cart';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.find((item) => item.key === action.payload.item.key)
          ? state.cart.map((item) =>
              item.key === action.payload.item.key
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload.item, quantity: 1 }],
      };
    case CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.key === action.payload.item.key
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CLEAR_CART:
      return { ...state, cart: initialState.cart };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.key !== action.payload.item.key),
      };
    default:
      return state;
  }
};

export default cartReducer;
