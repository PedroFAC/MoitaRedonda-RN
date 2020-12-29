import {
  ListItem,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View,
} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import { productDefault } from '../../assets';
import CartQuantityInput from '../CartQuantityInput/CartQuantityInput';
import { useCart } from '../../helpers/hooks';

const CartListItem = ({ item }) => {
  const { removeProductFromCart } = useCart();

  return (
    <ListItem>
      <Left>
        <Thumbnail source={productDefault} />
        <Body>
          <Text>{item.name}</Text>
          <Text note>Preço: R${item.price}</Text>
        </Body>
      </Left>
      <View>
        <CartQuantityInput item={item} quantity={item.quantity} />
      </View>
      <Right>
        <IconButton icon="delete" onPress={() => removeProductFromCart(item)} />
      </Right>
    </ListItem>
  );
};

export default CartListItem;

CartListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
