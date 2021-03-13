import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import { productDefault } from '../../assets';
import CartQuantityInput from '../CartQuantityInput/CartQuantityInput';
import { useCart } from '../../helpers/hooks';
import {
  MultiContainer,
  Product,
  ProductHeader,
  ProductImage,
  SingleContainer,
  SmallPrice,
  VerticalContainer,
} from './styles';
import { OwnerText } from '../sharedComponents/sharedComponents';

const CartListItem = ({ item }) => {
  const { removeProductFromCart } = useCart();
  const image = item.downloadUrl ? { uri: item.downloadUrl } : productDefault;

  return (
    <Product>
      <SingleContainer>
        <ProductImage square source={image} />
      </SingleContainer>
      <VerticalContainer>
        <SingleContainer>
          <ProductHeader>{item.name}</ProductHeader>
          <OwnerText bold>Por: {item.owner}</OwnerText>
        </SingleContainer>
        <MultiContainer>
          <CartQuantityInput item={item} quantity={item.quantity} />
          <SmallPrice>R$ {item.price}</SmallPrice>
          <IconButton
            icon="delete"
            onPress={() => removeProductFromCart(item)}
          />
        </MultiContainer>
      </VerticalContainer>
    </Product>
  );
};

export default CartListItem;

CartListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    downloadUrl: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};
