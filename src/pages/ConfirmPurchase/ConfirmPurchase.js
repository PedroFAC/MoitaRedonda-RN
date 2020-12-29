import { Card, CardItem, Container, Left, Right, Text } from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import { useCart } from '../../helpers/hooks';

const ConfirmPurchase = () => {
  const { cart, totalCost, totalItems, closeOrder } = useCart();

  return (
    <Container>
      <Container style={{ flex: 1 }}>
        <Card>
          <CardItem>
            <Text>Total de itens: {totalItems}</Text>
          </CardItem>
          <CardItem>
            <Text>Valor total: R$ {totalCost}</Text>
          </CardItem>
          {cart.map((item) => (
            <CardItem>
              <Left>
                <Text>{`${item.quantity}x ${item.name}`}</Text>
              </Left>
              <Right>
                <Text note>R$ {item.price}</Text>
              </Right>
            </CardItem>
          ))}
        </Card>
      </Container>
      <Button
        icon="whatsapp"
        mode="contained"
        color="#66bb6a"
        labelStyle={{ color: 'white', fontSize: 18 }}
        uppercase={false}
        onPress={() => closeOrder()}
      >
        Finalizar pedido por WhatsApp
      </Button>
    </Container>
  );
};

export default ConfirmPurchase;
