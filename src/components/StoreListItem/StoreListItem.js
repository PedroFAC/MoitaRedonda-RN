import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import productDefault from '../../assets/product-default.png';
import {
  CardContainer,
  CardHeader,
  CardSection,
  Price,
} from '../sharedComponents/sharedComponents';
import { useCart } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';
import {
  ButtonText,
  CartButtonContainer,
  ImageButton,
  ImageContainer,
  OwnerText,
  DetailsButtonContainer,
  TitleContainer,
} from './styles';

const StoreListItem = ({ item }) => {
  const { navigate } = useNavigation();
  const { price, name, downloadUrl, owner } = item;
  const { addProductToCart } = useCart();
  const image = downloadUrl ? { uri: downloadUrl } : productDefault;

  return (
    <CardContainer>
      <CardSection>
        <ImageContainer source={image}>
          <CartButtonContainer>
            <ImageButton
              onPress={() => addProductToCart(item)}
              uppercase={false}
              mode="contained"
              rounded
            >
              <ButtonText>Ad. ao carrinho +</ButtonText>
            </ImageButton>
          </CartButtonContainer>
          <DetailsButtonContainer>
            <ImageButton
              onPress={() => navigate(routesEnum.storeProduct, item)}
              uppercase={false}
              mode="contained"
            >
              <ButtonText>Ver mais detalhes</ButtonText>
            </ImageButton>
          </DetailsButtonContainer>
        </ImageContainer>
      </CardSection>
      <CardSection>
        <TitleContainer>
          <CardHeader>{name}</CardHeader>
          <OwnerText>
            Por: <OwnerText bold>{owner}</OwnerText>
          </OwnerText>
        </TitleContainer>
        <View>
          <Price>R$ {price}</Price>
        </View>
      </CardSection>
    </CardContainer>
  );
};

export default StoreListItem;

StoreListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    downloadUrl: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};
