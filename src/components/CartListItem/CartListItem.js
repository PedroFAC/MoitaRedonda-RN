import {
  ListItem,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  Toast,
  View,
} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { productDefault } from '../../assets';
import { removeFromCart } from '../../redux/actions/cart';
import CartQuantityInput from '../CartQuantityInput/CartQuantityInput';

const CartListItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeProductFromCart = async (product) => {
    try {
      await dispatch(removeFromCart(product));
      Toast.show({
        text: 'Produto removido!',
        type: 'success',
      });
    } catch (error) {
      Toast.show({
        text: 'Erro ao adicionar produto ao carrinho!',
        type: 'warning',
      });
    }
  };

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
