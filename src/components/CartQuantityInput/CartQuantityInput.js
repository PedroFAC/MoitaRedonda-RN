import React from 'react';
import NumericInput from 'react-native-numeric-input';
import PropTypes from 'prop-types';
import { useCart } from '../../helpers/hooks';

const CartQuantityInput = ({ quantity, item }) => {
  const { changeQuantity } = useCart();
  return (
    <NumericInput
      value={quantity}
      minValue={1}
      iconSize={10}
      editable={false}
      totalWidth={100}
      rounded
      onChange={(value) => changeQuantity(item, value)}
    />
  );
};

export default CartQuantityInput;

CartQuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  item: PropTypes.shape({ price: PropTypes.string, quantity: PropTypes.number })
    .isRequired,
};
