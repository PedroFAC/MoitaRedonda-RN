import React from 'react';
import {
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';
import { useFirebaseAuth } from '../../helpers/hooks';

const Store = () => {
  const { fireBaseSignout } = useFirebaseAuth();

  return (
    <Container>
      <CustomButton onPress={() => fireBaseSignout()}>Signout</CustomButton>
    </Container>
  );
};

export default Store;
