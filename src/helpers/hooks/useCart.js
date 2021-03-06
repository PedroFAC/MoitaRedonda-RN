import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';
import { useContext } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_PHONE_NUMBER } from '../../constants/admin';
import {
  addToCart,
  changeItemQuantity,
  clearCart,
  removeFromCart,
} from '../../redux/actions/cart';
import { AuthContext } from '../../routes/AuthContext';
import routesEnum from '../../routes/routesConstants';

const useCart = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const cart = useSelector((state) => state.cartReducer.cart);
  const currentUserName = useContext(AuthContext);

  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
  const totalCost = cart
    .reduce((a, b) => a + b.quantity * b.price, 0)
    .toFixed(2);

  const addProductToCart = async (product) => {
    try {
      await dispatch(addToCart(product));
      navigate(routesEnum.cart);
    } catch (error) {
      Toast.show({
        text: 'Erro ao adicionar produto ao carrinho!',
        type: 'warning',
      });
    }
  };

  const removeProductFromCart = async (product) => {
    try {
      await dispatch(removeFromCart(product));
      Toast.show({
        text: 'Produto removido!',
        type: 'success',
      });
    } catch (error) {
      Toast.show({
        text: 'Erro ao adicionar produto ao carrinho!',
        type: 'warning',
      });
    }
  };

  const onClear = () => {
    if (cart.length > 0) {
      dispatch(clearCart());
      Toast.show({
        text: 'Carrinho limpo!',
        type: 'success',
      });
    }
  };

  const clearCartSignOut = () => dispatch(clearCart());

  const changeQuantity = (item, value) =>
    dispatch(changeItemQuantity(item, value));

  const closeOrder = async () => {
    const builtString = `Olá, sou o usuário ${
      currentUserName?.displayName
    } e gostaria de confirmar meu pedido no valor de R$ ${totalCost} que contem os seguintes itens: ${cart.map(
      (item) => `%0A${item.quantity}x ${item.name} - R$ ${item.price}`
    )}
    `;

    try {
      await Linking.openURL(
        `whatsapp://send?text=${builtString}&phone=+55${ADMIN_PHONE_NUMBER}`
      );
    } catch {
      await Linking.openURL(
        `https://api.whatsapp.com/send?text=${builtString}&phone=+55${ADMIN_PHONE_NUMBER}`
      );
    }
  };

  return {
    cart,
    totalItems,
    totalCost,
    addProductToCart,
    removeProductFromCart,
    onClear,
    changeQuantity,
    closeOrder,
    clearCartSignOut,
  };
};

export default useCart;
