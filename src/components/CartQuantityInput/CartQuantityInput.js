import React from 'react';
import NumericInput from 'react-native-numeric-input';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeItemQuantity } from '../../redux/actions/cart';

const CartQuantityInput = ({ quantity, item }) => {
  const dispatch = useDispatch();
  return (
    <NumericInput
      value={quantity}
      minValue={1}
      iconSize={10}
      editable={false}
      totalWidth={100}
      rounded
      onChange={(value) => dispatch(changeItemQuantity(item, value))}
    />
  );
};

export default CartQuantityInput;

CartQuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  item: PropTypes.shape({ price: PropTypes.string, quantity: PropTypes.number })
    .isRequired,
};
