import { Card, CardItem, Left, Right, Text } from 'native-base';
import React from 'react';
import CartStatusCard from '../../components/CartStatusCard/CartStatusCard';
import LargeButton from '../../components/LargeButton/LargeButton';
import { Container } from '../../components/sharedComponents/sharedComponents';
import { useCart } from '../../helpers/hooks';

const ConfirmPurchase = () => {
  const { cart, closeOrder } = useCart();

  return (
    <Container>
      <Container style={{ flex: 1 }}>
        <Card>
          <CartStatusCard />
          {cart.map((item) => (
            <CardItem key={item.key}>
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
      <LargeButton icon="whatsapp" color="#66bb6a" onPress={() => closeOrder()}>
        Finalizar pedido por WhatsApp
      </LargeButton>
    </Container>
  );
};

export default ConfirmPurchase;
