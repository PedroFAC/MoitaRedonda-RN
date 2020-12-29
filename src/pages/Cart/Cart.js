import { Card, CardItem, Container, Icon, List, Text } from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import CartListItem from '../../components/CartListItem/CartListItem';
import { useCart } from '../../helpers/hooks';
import { Container as EmptyContainer } from '../../components/sharedComponents/sharedComponents';

const Cart = () => {
  const { cart, totalItems, totalCost, onClear } = useCart();

  return (
    <Container>
      <Container>
        {cart.length === 0 ? (
          <EmptyContainer>
            <Icon name="alert" />
            <Text>Seus itens adicionados aparecerão aqui</Text>
          </EmptyContainer>
        ) : (
          <List
            dataArray={cart}
            renderItem={({ item }) => <CartListItem item={item} />}
          />
        )}
      </Container>
      <Card>
        <CardItem>
          <Text>Total de itens: {totalItems}</Text>
        </CardItem>
        <CardItem>
          <Text>Valor total: R$ {totalCost}</Text>
        </CardItem>
      </Card>
      <Button mode="contained">Finalizar pedido</Button>
      <Button onPress={() => onClear()} mode="contained" color="#DB4437">
        Limpar carrinho
      </Button>
    </Container>
  );
};

export default Cart;
