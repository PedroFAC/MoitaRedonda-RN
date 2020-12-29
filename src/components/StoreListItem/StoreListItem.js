import { useNavigation } from '@react-navigation/native';
import { CardItem, H3, Thumbnail, Text, Body } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import { productDefault } from '../../assets';
import routesEnum from '../../routes/routesConstants';
import { CardContainer } from './styles';
import { CardButton } from '../sharedComponents/sharedComponents';
import { useCart } from '../../helpers/hooks';

const StoreListItem = ({ item }) => {
  const { navigate } = useNavigation();
  const { price, name } = item;
  const { addProductToCart } = useCart();

  return (
    <CardContainer>
      <CardItem header>
        <H3>{name}</H3>
      </CardItem>
      <CardItem>
        <Thumbnail large source={productDefault} />
      </CardItem>
      <CardItem>
        <Text note>Preço: R$ {price}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <CardButton
            color="#2d2d2d"
            icon="information-outline"
            onPress={() => navigate(routesEnum.storeProduct, item)}
          >
            Mais informações
          </CardButton>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <CardButton onPress={() => addProductToCart(item)} icon="cart">
            Adicionar ao carrinho
          </CardButton>
        </Body>
      </CardItem>
    </CardContainer>
  );
};

export default StoreListItem;

StoreListItem.propTypes = {
  item: PropTypes.shape({ name: PropTypes.string, price: PropTypes.string })
    .isRequired,
};
