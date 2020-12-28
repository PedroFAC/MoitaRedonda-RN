import { useRoute } from '@react-navigation/native';
import { Body, Card, CardItem, H3, Right, Text } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { productDefault } from '../../assets';

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
          <Image
            source={productDefault}
            style={{ height: 200, width: '100%' }}
          />
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
      <CardItem>
        <Body>
          <Button style={{ width: '100%' }} icon="cart">
            Adicionar ao carrinho
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

export default StoreProductPage;
