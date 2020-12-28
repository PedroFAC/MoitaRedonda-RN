import { useNavigation } from '@react-navigation/native';
import { Fab, Icon } from 'native-base';
import React from 'react';
import routesEnum from '../../routes/routesConstants';

const CartFab = () => {
  const { navigate } = useNavigation();
  return (
    <Fab onPress={() => navigate(routesEnum.cart)}>
      <Icon position="bottomRight" name="cart" />
    </Fab>
  );
};

export default CartFab;
