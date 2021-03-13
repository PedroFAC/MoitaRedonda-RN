import { Button, Icon } from 'native-base';
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import LargeButton from '../../components/LargeButton/LargeButton';
import { Container } from '../../components/sharedComponents/sharedComponents';
import { theme } from '../../components/sharedComponents/theme';
import StoreProductsList from '../../components/StoreProductsList/StoreProductsList';
import { useFirebaseAuth } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';

const Store = ({ navigation }) => {
  const { fireBaseSignout } = useFirebaseAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate(routesEnum.cart)}
          style={{ backgroundColor: theme.colors.black }}
          rounded
        >
          <Icon name="cart" />
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <StoreProductsList />
      <LargeButton onPress={() => fireBaseSignout()}>
        Encerrar sessão
      </LargeButton>
    </Container>
  );
};

export default Store;

Store.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }),
};
Store.defaultProps = {
  navigation: null,
};
