import { Container } from 'native-base';
import React from 'react';
import { Button } from 'react-native-paper';
import StoreProductsList from '../../components/StoreProductsList/StoreProductsList';
import { useFirebaseAuth } from '../../helpers/hooks';

const Store = () => {
  const { fireBaseSignout } = useFirebaseAuth();
  return (
    <Container>
      <StoreProductsList />
      <Button
        mode="contained"
        color="#DB4437"
        onPress={() => fireBaseSignout()}
      >
        Encerrar sessão
      </Button>
    </Container>
  );
};

export default Store;
