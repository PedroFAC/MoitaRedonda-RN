import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

import { ButtonsContainer } from './styles';
import {
  Input,
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';
import routesEnum from '../../routes/routesConstants';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();
  const signin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigate(routesEnum.store);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };
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
          onPress={() => signin()}
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
