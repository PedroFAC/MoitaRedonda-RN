import { Card, CardItem, Container, Icon, List, Text } from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CartListItem from '../../components/CartListItem/CartListItem';
import { useCart } from '../../helpers/hooks';
import { Container as EmptyContainer } from '../../components/sharedComponents/sharedComponents';
import routesEnum from '../../routes/routesConstants';

const Cart = () => {
  const { cart, totalItems, totalCost, onClear } = useCart();
  const { navigate } = useNavigation();
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
      <Button
        disabled={cart.length < 1}
        mode="contained"
        uppercase={false}
        onPress={() => navigate(routesEnum.confirmPurchase)}
      >
        Finalizar pedido
      </Button>
      <Button
        disabled={cart.length < 1}
        uppercase={false}
        onPress={() => onClear()}
        mode="contained"
        color="#DB4437"
      >
        Limpar carrinho
      </Button>
    </Container>
  );
};

export default Cart;
