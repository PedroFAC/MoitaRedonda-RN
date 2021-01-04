import { Container } from 'native-base';
import React from 'react';
import LargeButton from '../../components/LargeButton/LargeButton';
import StoreProductsList from '../../components/StoreProductsList/StoreProductsList';
import { useFirebaseAuth } from '../../helpers/hooks';

const Store = () => {
  const { fireBaseSignout } = useFirebaseAuth();

  return (
    <Container>
      <StoreProductsList />
      <LargeButton color="#DB4437" onPress={() => fireBaseSignout()}>
        Encerrar sessão
      </LargeButton>
    </Container>
  );
};

export default Store;
