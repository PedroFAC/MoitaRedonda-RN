import { Card, CardItem, Container, Icon, List, Text, View } from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import CartListItem from '../../components/CartListItem/CartListItem';
import { useCart } from '../../helpers/hooks';

const Cart = () => {
  const { cart, totalItems, totalCost, onClear } = useCart();

  return (
    <Container>
      <View style={{ flex: 1 }}>
        {cart.length === 0 ? (
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Icon name="alert" />
            <Text>Seus itens adicionados aparecerão aqui</Text>
          </View>
        ) : (
          <List
            dataArray={cart}
            renderItem={({ item }) => <CartListItem item={item} />}
          />
        )}
      </View>
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
