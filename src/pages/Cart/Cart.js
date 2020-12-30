import { Card, Container, Icon, List, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CartListItem from '../../components/CartListItem/CartListItem';
import { useCart } from '../../helpers/hooks';
import { Wrapper } from '../../components/sharedComponents/sharedComponents';
import routesEnum from '../../routes/routesConstants';
import CartStatusCard from '../../components/CartStatusCard/CartStatusCard';
import LargeButton from '../../components/LargeButton/LargeButton';

const Cart = () => {
  const { cart, onClear } = useCart();
  const { navigate } = useNavigation();
  return (
    <Container>
      <Container>
        {cart.length === 0 ? (
          <Wrapper>
            <Icon name="alert" />
            <Text>Seus itens adicionados aparecerão aqui</Text>
          </Wrapper>
        ) : (
          <List
            dataArray={cart}
            renderItem={({ item }) => <CartListItem item={item} />}
          />
        )}
      </Container>
      <Card>
        <CartStatusCard />
      </Card>
      <LargeButton
        disabled={cart.length < 1}
        onPress={() => navigate(routesEnum.confirmPurchase)}
      >
        Finalizar pedido
      </LargeButton>
      <LargeButton
        color="#DB4437"
        disabled={cart.length < 1}
        onPress={() => onClear()}
      >
        Limpar carrinho
      </LargeButton>
    </Container>
  );
};

export default Cart;
