import {
  ADD_TO_CART,
  CHANGE_ITEM_QUANTITY,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from '../../types/cart';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: {
    item,
  },
});

export const changeItemQuantity = (item, quantity) => ({
  type: CHANGE_ITEM_QUANTITY,
  payload: {
    item,
    quantity,
  },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: {
    item,
  },
});
