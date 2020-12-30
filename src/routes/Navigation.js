import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home/Home';
import routesEnum from './routesConstants';
import Signup from '../pages/Signup/Signup';
import Store from '../pages/Store/Store';
import ProductsAdministration from '../pages/ProductsAdministration/ProductsAdministration';
import AddProductForm from '../pages/ProductsAdministration/AddProductForm/AddProductForm';
import EditProductForm from '../pages/ProductsAdministration/EditProductForm/EditProductForm';
import StoreProductPage from '../pages/StoreProductPage/StoreProductPage';
import Cart from '../pages/Cart/Cart';
import ConfirmPurchase from '../pages/ConfirmPurchase/ConfirmPurchase';

const Navigation = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          options={{ headerShown: false }}
          name={routesEnum.home}
          component={Home}
        />
        <Screen
          options={{ title: 'Cadastrar-se' }}
          name={routesEnum.signup}
          component={Signup}
        />
        <Screen
          options={{ title: 'Loja', headerLeft: null }}
          name={routesEnum.store}
          component={Store}
        />
        <Screen
          options={{ title: 'Produto' }}
          name={routesEnum.storeProduct}
          component={StoreProductPage}
        />
        <Screen
          options={{ title: 'Administração de produtos', headerLeft: null }}
          name={routesEnum.productsAdmin}
          component={ProductsAdministration}
        />
        <Screen
          options={{ title: 'Adicionar Produto' }}
          name={routesEnum.addProductForm}
          component={AddProductForm}
        />
        <Screen
          options={{ title: 'Editar Produto' }}
          name={routesEnum.editProductForm}
          component={EditProductForm}
        />
        <Screen
          options={{ title: 'Carrinho' }}
          name={routesEnum.cart}
          component={Cart}
        />
        <Screen
          options={{ title: 'Confirmar compra' }}
          name={routesEnum.confirmPurchase}
          component={ConfirmPurchase}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
