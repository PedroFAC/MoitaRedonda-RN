import { Card, Left, Right } from 'native-base';
import React from 'react';
import CartStatusCard from '../../components/CartStatusCard/CartStatusCard';
import LargeButton from '../../components/LargeButton/LargeButton';
import {
  CardSection,
  Container,
  SmallPrice,
} from '../../components/sharedComponents/sharedComponents';
import { useCart } from '../../helpers/hooks';
import { ProductName } from './styles';

const ConfirmPurchase = () => {
  const { cart, closeOrder } = useCart();

  return (
    <Container>
      <Container>
        <Card>
          {cart.map((item) => (
            <CardSection key={item.key}>
              <Left>
                <ProductName>{`${item.quantity}x ${item.name}`}</ProductName>
              </Left>
              <Right>
                <SmallPrice>R$ {item.price}</SmallPrice>
              </Right>
            </CardSection>
          ))}
          <CartStatusCard />
        </Card>
      </Container>
      <LargeButton icon="whatsapp" color="#66bb6a" onPress={() => closeOrder()}>
        Finalizar pedido por WhatsApp
      </LargeButton>
    </Container>
  );
};

export default ConfirmPurchase;
