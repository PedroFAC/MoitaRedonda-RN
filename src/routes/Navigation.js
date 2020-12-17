import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home/Home';
import routesEnum from './routesConstants';
import Signup from '../pages/Signup/Signup';
import Store from '../pages/Store/Store';

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
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
