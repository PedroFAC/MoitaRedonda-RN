import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';
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
import { AuthContext } from './AuthContext';
import { ADMIN_EMAIL } from '../constants/admin';
import { theme } from '../components/sharedComponents/theme';

const Navigation = () => {
  const { Screen, Navigator } = createStackNavigator();
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const watchUserChanges = (result) => {
    setUser(result);
    if (initializing) {
      setInitializing(false);
    }
  };

  const { Provider } = AuthContext;

  const SignedOutStack = () => (
    <Navigator
      initialRouteName={routesEnum.home}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.black,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.heading1.fontFamily,
        },
      }}
    >
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
    </Navigator>
  );

  const SignedInStack = () =>
    user?.email === ADMIN_EMAIL ? (
      <Navigator
        initialRouteName={routesEnum.productsAdmin}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontFamily: theme.fonts.heading1.fontFamily,
          },
        }}
      >
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
      </Navigator>
    ) : (
      <Navigator
        initialRouteName={routesEnum.store}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontFamily: theme.fonts.heading1.fontFamily,
          },
        }}
      >
        <Screen
          options={{
            title: 'Loja',
            headerLeft: null,
          }}
          name={routesEnum.store}
          component={Store}
        />
        <Screen
          options={{ title: 'Produto' }}
          name={routesEnum.storeProduct}
          component={StoreProductPage}
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
    );

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(watchUserChanges);
    return authSubscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <Provider value={user}>
          <SignedInStack />
        </Provider>
      ) : (
        <SignedOutStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

StoreProductPage.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }),
};
StoreProductPage.defaultProps = {
  navigation: null,
};
