import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFirebaseAuth } from '../../helpers/hooks';
import { ButtonsContainer } from './styles';
import {
  Input,
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';
import routesEnum from '../../routes/routesConstants';

const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { navigate } = useNavigation();
  const { firebaseSignIn } = useFirebaseAuth();

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
      <ButtonsContainer>
        <CustomButton
          onPress={() => firebaseSignIn(email, password)}
          uppercase={false}
          mode="contained"
        >
          Entrar
        </CustomButton>
        <CustomButton
          uppercase={false}
          mode="contained"
          onPress={() => navigate(routesEnum.signup)}
        >
          Cadastre-se
        </CustomButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
