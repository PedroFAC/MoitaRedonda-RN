import { useRoute } from '@react-navigation/native';
import { Body, Button, Icon } from 'native-base';
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { productDefault } from '../../assets';
import {
  Container,
  CardContainer,
  CardHeader,
  CardSection,
  Price,
  Paragraph,
} from '../../components/sharedComponents/sharedComponents';
import { theme } from '../../components/sharedComponents/theme';
import { useCart } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';
import { AddToCartButton, CardImage } from './styles';
import { ButtonText, OwnerText } from '../../components/StoreListItem/styles';

const StoreProductPage = ({ navigation }) => {
  const { params } = useRoute();
  const { name, description, price, owner, downloadUrl } = params;
  const { addProductToCart } = useCart();
  const image = downloadUrl ? { uri: downloadUrl } : productDefault;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate(routesEnum.cart)}
          style={{ backgroundColor: theme.colors.black }}
          rounded
        >
          <Icon name="cart" />
        </Button>
      ),
    });
  }, [navigation]);
  return (
    <Container>
      <CardSection>
        <Body>
          <CardImage source={image} />
        </Body>
      </CardSection>
      <CardContainer>
        <CardSection>
          <Body>
            <Price>{`R$ ${price}`}</Price>
          </Body>
          <AddToCartButton
            onPress={() => addProductToCart(params)}
            uppercase={false}
            mode="contained"
            rounded
          >
            <ButtonText>Ad. ao carrinho +</ButtonText>
          </AddToCartButton>
        </CardSection>
        <CardSection>
          <Body>
            <CardHeader>{name}</CardHeader>
          </Body>
        </CardSection>
        <CardSection>
          <Body>
            <OwnerText>
              Por: <OwnerText bold>{owner}</OwnerText>
            </OwnerText>
          </Body>
        </CardSection>
        <CardSection>
          <Body>
            <Paragraph>{description}</Paragraph>
          </Body>
        </CardSection>
      </CardContainer>
    </Container>
  );
};

export default StoreProductPage;

StoreProductPage.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }),
};
StoreProductPage.defaultProps = {
  navigation: null,
};
