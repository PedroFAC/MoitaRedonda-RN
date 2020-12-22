import React, { useState } from 'react';
import {
  Input,
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';
import { ButtonsContainer } from './styles';
import { useFirebaseAuth } from '../../helpers/hooks';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { firebaseSignUp } = useFirebaseAuth();

  return (
    <Container>
      <Input
        mode="outlined"
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        mode="outlined"
        label="Senha"
        value={password}
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />
      <Input
        mode="outlined"
        label="Confirmar Senha"
        value={confirmPassword}
        secureTextEntry
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <ButtonsContainer>
        <CustomButton
          onPress={() => firebaseSignUp(email, password, confirmPassword)}
          uppercase={false}
          mode="contained"
        >
          Confirmar
        </CustomButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Signup;
