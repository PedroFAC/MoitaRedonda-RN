import { useRoute, useNavigation } from '@react-navigation/native';
import { Body, Card, CardItem, H3, Right, Text, Toast } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';
import { productDefault } from '../../assets';
import CartFab from '../../components/CartFab/CartFab';
import { CardButton } from '../../components/sharedComponents/sharedComponents';
import { addToCart } from '../../redux/actions/cart';
import routesEnum from '../../routes/routesConstants';
import { CardImage } from './styles';

const StoreProductPage = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { name, description, price, owner } = params;

  const addProductToCart = async (product) => {
    try {
      await dispatch(addToCart(product));
      navigate(routesEnum.cart);
    } catch (error) {
      Toast.show({
        text: 'Erro ao adicionar produto ao carrinho!',
        type: 'warning',
      });
    }
  };

  return (
    <>
      <Card>
        <CardItem>
          <Body>
            <H3>{name}</H3>
          </Body>
          <Right>
            <Text note>{`R$ ${price}`}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <CardImage source={productDefault} />
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text note>Descrição:</Text>
            <Text>{description}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text note>Criado por:</Text>
            <Text>{owner}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <CardButton onPress={() => addProductToCart(params)} icon="cart">
            Adicionar ao carrinho
          </CardButton>
        </CardItem>
      </Card>
      <CartFab />
    </>
  );
};

export default StoreProductPage;
