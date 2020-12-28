import { useRoute } from '@react-navigation/native';
import { Body, Card, CardItem, H3, Right, Text } from 'native-base';
import React from 'react';
import { productDefault } from '../../assets';
import { CardButton } from '../../components/sharedComponents/sharedComponents';
import { CardImage } from './styles';

const StoreProductPage = () => {
  const { params } = useRoute();
  const { name, description, price, owner } = params;
  return (
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
        <CardButton icon="cart">Adicionar ao carrinho</CardButton>
      </CardItem>
    </Card>
  );
};

export default StoreProductPage;
