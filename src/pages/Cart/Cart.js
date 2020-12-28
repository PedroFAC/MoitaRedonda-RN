import {
  Card,
  CardItem,
  Container,
  Icon,
  List,
  Text,
  Toast,
  View,
} from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CartListItem from '../../components/CartListItem/CartListItem';
import { clearCart } from '../../redux/actions/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
  const totalCost = cart
    .reduce((a, b) => a + b.quantity * b.price, 0)
    .toFixed(2);

  const onClear = () => {
    if (cart.length > 0) {
      dispatch(clearCart());
      Toast.show({
        text: 'Carrinho limpo!',
        type: 'success',
      });
    }
  };

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
